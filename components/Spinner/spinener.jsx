import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from "./Spinner.module.css";

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  console.log("test spinner")

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  if (!loading) {
    return null
  }

  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingIndicator