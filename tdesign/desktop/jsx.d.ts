import { HTMLAttributes } from 'omi';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [emit: string]: any;
    }
  }
}

