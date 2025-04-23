import { h, defineComponent, ref } from 'vue';

export function omiVueify(
  tagName: string,
) {
  return defineComponent({
    name: `Omi${tagName.replace(/-/g, '')}`,

    setup(props, { slots }) {
      const elRef = ref<HTMLElement | null>(null);

      return () =>
        h(
          tagName,
          {
            ref: elRef,
            ...props,
          },
          slots.default ? slots.default() : []
        );
    },
  });
}