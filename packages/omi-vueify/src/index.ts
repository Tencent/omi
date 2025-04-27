import { h, defineComponent, ref } from 'vue';

export function omiVueify(
  tagName: string,
  options: {
    methodNames: string[]
  },
) {
  return defineComponent({
    name: `Omi${tagName.replace(/-/g, '')}`,

    setup(props, { slots, expose }) {
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