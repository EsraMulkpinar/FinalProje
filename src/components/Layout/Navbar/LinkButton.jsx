import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const LinkButton = ({to,title}) => {
  const {pathname} = useLocation()
  console.log(pathname, to)
  return (
    <Link to={to}>
        <div className={`hover:text-red-600 hover:underline underline-offset-8 ${pathname === to && 'text-red-600 text-2xl'}`}>
        {title}
        </div>
    </Link>
  )
}

export default LinkButton