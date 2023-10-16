import React from "react"

const Trash=(props)=>{
    return( 
        
<div className='relative' onClick={props.onClick}>
    <div className='after:content-["delete"] after:absolute hover:after:block max-md:after:!hidden after:hidden after:bottom-9 after:text-sm  after:max-lg:hidden after:bg-orange-600 after:text-white after:p-1 after:py-[0.1rem] after:rounded-md'>
        <svg  width={'40px'}  cursor={'pointer'} enableBackground="new 0 0 96 96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="Delete"><g  fill="#456173"><path d="m58 74h-20c-5.514 0-10-4.486-10-10v-32h4v32c0 3.309 2.691 6 6 6h20c3.309 0 6-2.691 6-6v-32h4v32c0 5.514-4.486 10-10 10z" fill="#456173"  style={{fill:"black"}}></path><path d="m42 32h-4v-4c0-3.309 2.691-6 6-6h8c3.309 0 6 2.691 6 6v3.667h-4v-3.667c0-1.103-.896-2-2-2h-8c-1.104 0-2 .897-2 2z" fill="#456173"   style={{fill:"black"}}></path><path d="m70 34h-44c-1.105 0-2-.896-2-2s.895-2 2-2h44c1.105 0 2 .896 2 2s-.895 2-2 2z"  style={{fill:"black"}}></path></g><path d="m48 62c-1.105 0-2-.896-2-2v-16c0-1.104.895-2 2-2s2 .896 2 2v16c0 1.104-.895 2-2 2z" fill="#f76262"  style={{fill:"black"}}></path><path d="m40 62c-1.105 0-2-.896-2-2v-16c0-1.104.895-2 2-2s2 .896 2 2v16c0 1.104-.895 2-2 2z" fill="#f76262"  style={{fill:"black"}}></path><path d="m56 62c-1.105 0-2-.896-2-2v-16c0-1.104.895-2 2-2s2 .896 2 2v16c0 1.104-.895 2-2 2z" fill="black"  style={{fill:"black"}}></path></g></svg>
    </div>
        </div>
    )
}
export default Trash