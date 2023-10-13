import React from 'react'

export default function PlusIcon(props) {
    const{className}=props
  return (
    <div>
        <svg className={`w-[20px] ${className}`} id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 480c-123.514 0-224-100.486-224-224s100.486-224 224-224 224 100.486 224 224-100.486 224-224 224zm163.601-224c0 8.837-7.163 16-16 16h-131.601v131.601c0 8.837-7.163 16-16 16s-16-7.163-16-16v-131.601h-131.602c-8.837 0-16-7.163-16-16s7.163-16 16-16h131.602v-131.601c0-8.837 7.163-16 16-16s16 7.163 16 16v131.601h131.601c8.837 0 16 7.163 16 16z"></path></svg>
    </div>
  )
}
