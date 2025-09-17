import type { ReactNode } from "react"

interface ContainerProps{
    children: ReactNode,
    className?: string
}

export const Container = ({children, className = ''} : ContainerProps) => {
    return (
        <>
            <div className={`max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
                {children}
            </div>
        </>
    )
}