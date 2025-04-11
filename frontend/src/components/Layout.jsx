import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#EDF2F7] backdrop-blur-md">
            {children}
        </div>
    )
}

export default Layout
