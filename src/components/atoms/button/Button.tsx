import { HTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

function Button({
  children,
  color = 'primary',
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      style={{
        padding: '1rem 2.5rem',
        borderRadius: '0.375rem',
        fontWeight: 500,
        backgroundColor: color === 'primary' ? '#2563eb' : '#a855f7',
      }}
      {...rest}>
      {children}
    </button>
  );
}

export default Button;
