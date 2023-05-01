import {useState, useEffect } from 'react'
import '../css/gameplay.css'


export function Timer(){
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60


    return (
        <h1 style={{fontFamily: "digital",
                    position: "absolute", 
                    right: "10vw",}}>{minutes.toString().padStart(2, '0')}:{remainingSeconds.toString().padStart(2, '0')}</h1>
    )
}