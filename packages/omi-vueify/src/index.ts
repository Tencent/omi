import { h, defineComponent, ref, onMounted, onBeforeUnmount, watch, isRef, isReactive, toRaw } from 'vue';

export function omiVueify(
  tagName: string,
  options: {
    methodNames: string[]
  },
) {
  return defineComponent({
    name: tagName,
    inheritAttrs: false,

    setup(props, { emit, attrs, slots, expose }) {
      const elRef = ref<HTMLElement | null>(null);

      // methodNames 改成调用 elRef.value[methodName]
      const { methodNames } = options;
      const methods = {};
      methodNames.forEach((methodName) => {
        // @ts-ignore
        methods[methodName] = (...args: any[]) => {
          if (elRef.value) {
            // @ts-ignore
            return elRef.value[methodName]?.(...args);
          }
        };
      });

      expose(methods);

      const formatAttrs = useUnwrapAndFormatAttrs(attrs);

      // 处理事件监听
      const omiEvents = Object.keys(attrs)
        .filter(attrKey => attrKey.match(/^on[A-Za-z]/))
        .map(oriEvent => oriEventToOmi(oriEvent));

      // 存储事件处理函数的引用，以便正确移除
      const eventHandlers = new Map<string, (e: Event) => void>();

      onMounted(() => {
        // 添加事件监听
        omiEvents.forEach((omiEvent) => {
          const vueEvent = camelToKebab(omiEvent);
          // 仅处理 kebab-case/单词 风格
          if (!isKebabString(vueEvent) && omiEvent !== vueEvent) return;

          const handler = (e: Event) => {
            emit(vueEvent, e);
          };
          eventHandlers.set(omiEvent, handler);
          elRef.value?.addEventListener(omiEvent, handler);
        });
        // 处理函数参数传入
        Object.entries(formatAttrs.value).forEach(([key, value]) => {
          if (typeof value === 'function') {
            // 函数参数通过props而非attrs传入
            // @ts-ignore
            elRef.value[kebabToCamel(key)] = value;
            // @ts-ignore
            delete formatAttrs.value[key];
          }
        });
      })

      // 清理事件监听
      onBeforeUnmount(() => {
        eventHandlers.forEach((handler, omiEvent) => {
          elRef.value?.removeEventListener(omiEvent, handler);
        });
        eventHandlers.clear();
      })

      return () => {
        // 收集所有 slot vnode
        const children = [];

        // 默认 slot
        if (slots.default) {
          children.push(...slots.default());
        }

        // 具名 slot
        Object.keys(slots).forEach((key) => {
          if (key === 'default') return;
          const vnodes = slots[key]?.();
          // 给每个 vnode 添加 slot 属性
          if (vnodes) {
            vnodes.forEach((vnode) => {
              // 兼容 Fragment
              if (Array.isArray(vnode)) {
                vnode.forEach((vn) => {
                  if (vn && typeof vn === 'object') {
                    vn.props = { ...(vn.props || {}), slot: key };
                  }
                });
              } else if (vnode && typeof vnode === 'object') {
                vnode.props = { ...(vnode.props || {}), slot: key };
              }
              children.push(vnode);
            });
          }
        });

        return h(
          tagName,
          {
            ref: elRef,
            ...props,
            ...formatAttrs.value,
          },
          children
        );
      };
    },
  });
}

/*
 * oriEvent -> omiEvent:
 * 示例：onFileSelect -> fileSelect
 */
const oriEventToOmi = (oriEvent: string): string => {
  const eventName = oriEvent.slice(2);
  return eventName[0].toLowerCase() + eventName.slice(1);
}

/**
 * 判断字符串是否是连字符风格
 */
const isKebabString = (v: string): boolean => {
  return v.includes('-');
}

/*
 * 驼峰转kebab-case
 * 示例：fileSelectAaa -> file-select-aaa
 */
const camelToKebab = (omiEvent: string): string => {
  return omiEvent.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * kebab-case转驼峰
 * 示例：file-select-aaa -> fileSelectAaa
 */
const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (_match, p1) => p1.toUpperCase());
}

const deepUnwrap = (val: any): any => {
  if (isRef(val)) return deepUnwrap(val.value);
  if (isReactive(val)) val = toRaw(val);
  if (Array.isArray(val)) return val.map(deepUnwrap);
  if (val && typeof val === 'object') {
    const obj: Record<string, any> = {};
    for (const k in val) obj[k] = deepUnwrap(val[k]);
    return obj;
  }
  return val;
};

/**
 * 将 attrs 里的非事件属性递归解包为普通对象，且驼峰kebab命名兼容
 */
const useUnwrapAndFormatAttrs = (attrs: Record<string, any>) => {
  const unwraped = ref({});

  // watch keys变化，自动维护监听
  watch(
    () => Object.entries(attrs),
    (entries) => {
      const result: Record<string, any> = {};
      entries.forEach(([key, value]) => {
        if (!key.match(/^on[A-Za-z]/)) {
          // 对象类型转驼峰，基本类型转kebab
          let finalKey = key;
          let finalValue = value;
          if (isRef(value) || isReactive(value)) {
            finalValue = deepUnwrap(value);
          }

          if (finalValue && typeof finalValue === 'object') {
            finalKey = kebabToCamel(key);
          } else {
            finalKey = camelToKebab(key);
          }
          result[finalKey] = finalValue;
        }
      });
      unwraped.value = result;
    },
    { immediate: true, deep: true },
  );

  return unwraped;
};
