import type { ReactNode } from "react"
import { Link } from "react-router"

interface CardProps {
    title?: string,
    to?: string,
    children?: ReactNode,
    className?: string,
    actionSlot?: () => void
}

export const Card = ({title, to = '', children, className, actionSlot}:CardProps) => {  
    return (
        <Link to={to} className={`w-full h-full flex-1 rounded-[30px] flex flex-col p-6 pb-0 ${className}`}>
            <h3 className="text-white font-normal text-[48px] leading-none flex-1">{title}</h3>
            {children}
        </Link>
    )

}