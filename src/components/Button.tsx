interface buttonProps {
  label: string
  className?: string
  icon?: any
}

const Button: React.FC<buttonProps> = ({ label, className, icon }) => {
  return (
    <button className={`px-20 py-2 flex  items-center gap-2 ${className}`}>
      {label}
      {icon}
    </button>
  )
}

export default Button
