import { h, defineComponent, onMounted, ref, watch } from 'vue';

type EventNames = string[];
type PropNames = string[];

export function omiVueify(
  tagName: string,
  propNames: PropNames = [],
  eventNames: EventNames = []
) {
  return defineComponent({
    name: `Omi${tagName.replace(/-/g, '')}`,
    props: propNames.reduce((acc, key) => {
      acc[key] = { type: null as any }; // 你可以根据需要指定类型
      return acc;
    }, {} as Record<string, any>),
    emits: eventNames,
    setup(props, { slots, emit }) {
      const elRef = ref<HTMLElement | null>(null);

      // 监听 props 变化，赋值给 Omi 组件
      watch(
        () => ({ ...props }),
        (newProps) => {
          if (elRef.value) {
            for (const key of propNames) {
              // @ts-ignore
              (elRef.value as any)[key] = newProps[key];
            }
          }
        },
        { immediate: true, deep: true }
      );

      // 绑定事件
      onMounted(() => {
        if (elRef.value) {
          for (const eventName of eventNames) {
            elRef.value.addEventListener(eventName, (e: Event) => {
              // @ts-ignore
              emit(eventName, (e as CustomEvent).detail ?? e);
            });
          }
        }
      });

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