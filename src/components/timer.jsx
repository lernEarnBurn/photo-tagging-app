import {useState, useEffect } from 'react'
import '../css/gameplay.css'
import PropTypes from 'prop-types';


export function Timer(props){
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(props.win === false){
                setSeconds(seconds => seconds + 1)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [props.win])

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60


    return (
        <h1 style={{fontFamily: "digital",
                    position: "absolute", 
                    right: "10vw",}}>{minutes.toString().padStart(2, '0')}:{remainingSeconds.toString().padStart(2, '0')}</h1>
    )
}


Timer.propTypes = {
    win: PropTypes.bool.isRequired
}