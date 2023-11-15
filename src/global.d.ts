interface TodoItem {
  id: string;
  title: string;
  num: number;
  isCompleted: boolean;
}

type FilterStatus = 'All' | 'Active' | 'Completed';

interface WindowEventMap
  extends GlobalEventHandlersEventMap,
    WindowEventHandlersEventMap {}
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onclickOutside?: () => void;
  }
}
