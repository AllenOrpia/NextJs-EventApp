import Link from "next/link"




const Header = () => {
  return (
    <header>
        <div>
            <Link href='/'>NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header