import { useEffect } from 'react'

const useDisableScroll = (isActive) => {
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isActive])
}

export default useDisableScroll
