import React from 'react'

interface Props  {
    children: React.ReactNode
}

const Body : React.FC<Props> = ({children}  : Props) => {
  return (
    <div>{children}</div>
  )
}

export default Body