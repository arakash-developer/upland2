import React from 'react'

const NavbarContainer = ({children,className}) => {
  return (
    <div className={`max-w-[1780px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default NavbarContainer