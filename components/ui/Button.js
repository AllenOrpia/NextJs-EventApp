

import Link from "next/link"
const Button = (props) => {
    return (
        <Link href={props.link} className="p-2 bg-blue-500 rounded-lg text-white text-lg font-bold"> {props.children}</Link>
    )
}

export default Button