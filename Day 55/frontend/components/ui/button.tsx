export function Button({
    children,
    onClick,
    className,
    variant = "solid",
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "solid" | "outline";
  }) {
    const baseClass =
      "text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition";
    const solidClass = "bg-green-600 hover:bg-green-500";
    const outlineClass = "border border-green-600 text-green-600 hover:bg-green-100";
  
    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${variant === "solid" ? solidClass : outlineClass} ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export default Button;  