

import Link from "next/link"
const Button = (props) => {
    if (props.link) {
        return (
            <Link href={props.link} className="p-2 bg-blue-500 rounded-lg text-white text-lg font-bold"> {props.children}</Link>
        )
    }

    return <button type="submit" onClick={props.onClick} className="p-2 bg-blue-500 rounded-lg text-white text-lg font-bold">{props.children}</button>

}

export default Button