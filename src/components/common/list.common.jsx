import { useState } from "react"
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi"

const ListCommon = ({ title, fnHandler }) => {
    const [isChecked, setChecked] = useState(false)
  return (
    <li onClick={fnHandler}>
        <span>{ isChecked ? <BiCheckbox /> : <BiCheckboxChecked /> }</span>
        <span>{title}</span>
    </li>
  )
}

export default ListCommon