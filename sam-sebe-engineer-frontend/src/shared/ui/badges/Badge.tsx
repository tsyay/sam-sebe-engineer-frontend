interface badgeProps {
    title: string
    color?: string
}

export const SmallBadge = ({title, color} : badgeProps) => {
    return (
        <div className={` py-1 px-2 rounded-full text-[12px] font-light ${color}`}>
            {title}
        </div>
    )
} 