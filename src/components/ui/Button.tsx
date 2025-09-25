import clsx from 'clsx'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

type ButtonProps = {
    label: string
    color?: 'white' | 'theme'
    backgroundColor?: 'theme'
    onClick?: () => void
    className?: string
    href?: string
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = '',
    color,
    backgroundColor,
    href,
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
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            className={clsx(
                'relative flex w-full min-w-50 items-center h-13 px-10 rounded-full transition-all duration-300 text-left text-lg font-bold cursor-pointer group',
                colorStyles,
                className
            )}
            onClick={onClick}
        >
            {label}
            <span className={iconStyles}>
                <FaChevronRight />
            </span>
        </a>
    )
}


export default Button
