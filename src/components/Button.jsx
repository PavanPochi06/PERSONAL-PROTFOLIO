export const Button = ({className="", size="default", children}) => {
  const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary-foreground hover:bg-primary/90 bg-blue-400";

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return <button className={classes}>
    <span className="relative flex items-center justify-center gap-2">{children}</span>
  </button>
}