const ButtonCommon = ({ title, icon, className, fnHandler }) => {
  return (
    <button className={`inline-flex items-center justify-center gap-2 ${className}`} onClick={fnHandler}>
        {title}
        {icon}
    </button>
  )
}

export default ButtonCommon