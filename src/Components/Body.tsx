import React from 'react'

interface Props  {
    children: React.ReactNode
}

const Body : React.FC<Props> = ({children}  : Props) => {
  return (
    <div className="flex justify-center items-center">{children}</div>
  )
}

export default Body