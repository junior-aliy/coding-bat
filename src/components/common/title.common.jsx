const TitleCommon = ({ title, fnHandler }) => {
  return (
    <h3 className="text-2xl font-medium" onClick={fnHandler}>{title}</h3>
  )
}

export default TitleCommon