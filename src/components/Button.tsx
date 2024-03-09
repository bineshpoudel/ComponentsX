interface buttonProps {
  label: string
  className?: string
  icon?: any
  onClick?: () => void
}

const Button: React.FC<buttonProps> = ({ label, className, icon, onClick }) => {
  return (
    <button
      className={`px-20 py-2 flex  items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  )
}

export default Button
