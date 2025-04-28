import { h, defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export function omiVueify(
  tagName: string,
  options: {
    methodNames: string[]
  },
) {
  return defineComponent({
    name: `Omi${tagName.replace(/-/g, '')}`,

    setup(props, { emit, attrs, slots, expose }) {
      const elRef = ref<HTMLElement | null>(null);

      // methodNames 改成调用 elRef.value[methodName]
      const { methodNames } = options;
      const methods = {};
      methodNames.forEach((methodName) => {
        // @ts-ignore
        methods[methodName] = () => {
          if (elRef.value) {
            // @ts-ignore
            elRef.value[methodName]?.();
          }
        };
      });

      expose(methods);

      // 处理事件监听
      const omiEvents = Object.keys(attrs)
        .filter(attrKey => attrKey.match(/^on[A-Za-z]/))
        .map(oriEvent => oriEventToOmi(oriEvent));

      onMounted(() => {
        // 添加事件监听
        omiEvents.forEach((omiEvent) => {
          const vueEvent = omiEventToVue(omiEvent);
          // 仅处理kebab-case风格
          if (!isKebabString(vueEvent)) return;

          elRef.value?.addEventListener(omiEvent, (e: Event) => {
            emit(vueEvent, e);
          })
        })
      })

      // 清理事件监听
      onBeforeUnmount(() => {
        omiEvents.forEach((omiEvent) => {
          elRef.value?.removeEventListener(omiEvent, () => {})
        })
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

/*
 * omiEvent -> vueEvent
 * 示例：fileSelectAaa -> file-select-aaa
 */
const omiEventToVue = (omiEvent: string): string => {
  return omiEvent.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * 判断字符串是否是连字符风格
 */
const isKebabString = (v: string): boolean => {
  return v.includes('-');
}