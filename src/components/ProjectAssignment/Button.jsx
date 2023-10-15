const Button=(props)=>{

    const{children,onClick,type,className,textclassName,disabled}=props

    return <button className={`${className} select-none text-white bg-gray-600 text-sm p-2 rounded-md outline-none border-2 font-bold hover:bg-gray-800 disabled:bg-orange-200 disabled:cursor-not-allowed disabled:border-none`} onClick={onClick} type={type || 'button'} disabled={disabled}><div className={textclassName}>{children}</div></button>
}

export default Button