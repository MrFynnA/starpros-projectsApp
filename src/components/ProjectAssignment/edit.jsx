import React from 'react'

export default function Edit(props) {
  const {onClick}=props
  return (
    <div className='relative' onClick={onClick}>
    <div className='after:content-["edit"] after:absolute hover:after:block max-md:after:!hidden after:hidden after:bottom-9 after:text-sm  after:max-lg:hidden after:bg-orange-600 after:text-white after:p-1 after:py-[0.1rem] after:rounded-md'>
        <svg width={'24px'}  cursor={'pointer'} className='' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 370.939 370.939" style={{enableBackground:"new 0 0 370.939 370.939"}} ><g><g><g><path d="M306.155,48.588c0.134-12.106-4.567-23.765-13.061-32.392c-8.637-8.542-20.245-13.41-32.392-13.584 c-11.936-0.052-23.403,4.647-31.869,13.061l64.261,64.784C301.714,72.129,306.451,60.57,306.155,48.588z"></path><rect x="126.446" y="32.118" transform="matrix(0.7071 0.7071 -0.7071 0.7071 147.5037 -81.2968)" width="90.879" height="210.574"></rect><polygon points="56.947,200.621 42.318,266.972 108.669,252.343 "></polygon><path d="M360.49,347.429H10.449C4.678,347.429,0,352.107,0,357.878s4.678,10.449,10.449,10.449H360.49 c5.771,0,10.449-4.678,10.449-10.449S366.261,347.429,360.49,347.429z"></path></g></g></g></svg>
    </div>
    </div>
  )
}
