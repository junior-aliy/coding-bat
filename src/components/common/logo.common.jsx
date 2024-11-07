const LogoCommon = ({ fnHandler }) => {
  return (
    <h3 className="font-medium uppercase text-2xl cursor-pointer" onClick={fnHandler}>Coding <span className="px-1 rounded-sm bg-white text-tahiti">bat</span> js</h3>
  )
}

export default LogoCommon