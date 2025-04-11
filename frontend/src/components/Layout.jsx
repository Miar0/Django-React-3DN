import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#EDF2F7] dark:bg-dark-fond backdrop-blur-md">
            {children}
        </div>
    )
}

export default Layout
