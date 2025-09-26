interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'solid' | 'transparent';
}

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  variant = 'solid'
}: ButtonProps) => {
  
  const baseStyles = `
    px-8 py-4 rounded-[30px] font-bold text-base
    transition-all duration-200 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    solid: `bg-white text-[#2555BF] hover:bg-gray-100 border border-gray-200`,
    transparent: `bg-transparent text-white hover:bg-white/10`
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};