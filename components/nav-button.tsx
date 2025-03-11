import { Link } from "react-router";

interface Props{
    to: string
    target?: string
    children?: React.ReactNode
}

export function NavButton({to,target, children}:Props){
    return <Link className="no-underline hover:underline" to={to} target={target}>{children}</Link>
}
