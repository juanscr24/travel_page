import { FC } from 'react'
import { IButton } from './type'
import Image from 'next/image'

const Button: FC<IButton> = ({ type, title, icon, variant, full }) => {
    return (
        <button className={`flex justify-center items-center gap-3 rounded-full border ${variant} ${full && 'w-full'}`} type={type}>
            {icon && <Image src={icon} alt={title} height={24} width={24} />}
            <label className='font-bold whitespace-nowrap'>{title}</label>
        </button>
    )
}

export default Button