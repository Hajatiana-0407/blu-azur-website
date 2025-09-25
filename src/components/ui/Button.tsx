import clsx from 'clsx'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

type ButtonProps = {
    label: string
    color?: 'white' | 'theme'
    backgroundColor?: 'theme'
    onClick?: () => void
    className?: string
    href?: string;
    size?: "sm" | "normal"
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = '',
    color,
    backgroundColor,
    href,
    size
}) => {
    const colorStyles = clsx({
        'border border-white text-white hover:bg-white hover:text-black': color === 'white',
        'border border-theme text-theme hover:bg-theme hover:text-white': color === 'theme',
        'bg-theme text-white border border-transparent': backgroundColor === 'theme' && !color,
    })

    const iconStyles = clsx(
        'absolute p-1 border rounded-full right-6 top-1/2 -translate-y-1/2 transition-all duration-300',
        {
            'border border-white group-hover:text-black': color === 'white',
            'border border-theme group-hover:text-white': color === 'theme',
            'border border-white': backgroundColor === 'theme' && !color,
        }
    )

    return (
        <a
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className={clsx(
                { "text-base px-5 h-10": size === "sm" },
                { "text-lg px-10 h-13": size !== "sm" },
                "relative flex w-full min-w-50 items-center rounded-full transition-all duration-300 text-left font-bold cursor-pointer group",
                colorStyles,
                className
            )}
            onClick={onClick}
        >
            <span className="truncate max-w-[80%]">{label}</span>
            <span className={iconStyles}>
                <FaChevronRight />
            </span>
        </a>

    )
}


export default Button
