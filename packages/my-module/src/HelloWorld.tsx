import React from "react";

interface ButtonProps {
  onClick(): any;
  children?: React.ReactNode;
  props?: any;
}

/**
 * MyButton.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.FC<ButtonProps>} Button.
 */
export const HelloWorld: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  );
};
