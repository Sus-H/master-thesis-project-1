import { Link } from "react-router";

interface Props{
    to: string
    target?: string
    children?: React.ReactNode
}

export function NavButton({to,target, children}:Props){
    return <Link className="border  no-underline hover:underline hover:bg-amber-600" to={to} target={target}>{children}</Link>
}
