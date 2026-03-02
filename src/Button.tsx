import type { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode; 
  variant?: 'primary' | 'danger'; 
}

export const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {children}
    </button>
  );
};