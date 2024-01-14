import { Component } from 'omi'

export interface ModalProps {
  show?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  title?: string;
  staticBackdrop?: boolean;
  size?: 'xl' | 'lg' | 'sm' | 'fullscreen';
  position?: 'center' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export class Modal extends Component<ModalProps> {
  constructor(props?: ModalProps);
}

export interface ButtonProps {
  ripple?: boolean;
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'light' | 'dark';
  fullWidth?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  floating?: boolean;
  disabled?: boolean;
  roundedFull?: boolean;
  uppercase?: boolean;
  className?: string;
  tag?: string;
  href?: string;
  active?: boolean;
}

export class Button extends Component<ButtonProps> {
  constructor(props?: ButtonProps);
}