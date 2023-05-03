import '../css/leaderboard.css'
import { useState } from 'react'
import PropTypes from 'prop-types';


export function Leaderboard(props){
        {/*have level as a collection or as a broader category to allow for each level
           to have a seperate leaderboard*/}
        const [leaders, setLeaders] = useState([{   
                                                    name: "moshe",
                                                    secondsTotal: 55,
                                                    secondsFormatted: "01:22",
                                                },
                                                {   
                                                    name: "pooopy",
                                                    secondsTotal: 99,
                                                    secondsFormatted: "02:55",
                                                },
                                                {   
                                                    name: "ido",
                                                    secondsTotal: 12,
                                                    secondsFormatted: "00:12",
                                                }])

    return (
        <>  
            <button onClick={() => {props.setStage(1)}} className='back-leader'>Back</button>
            <div className="page">
                <h1 className="title"><span style={{color: "#f23925"}}>Leader</span><span style={{color: "#0498c6"}}>board</span></h1>
                <ul className="leader-container">
                    {leaders.map((player, index) => {
                        return <li key={index}>
                                    <div className='beginning'>
                                        <div className='number'>{index + 1}.</div>
                                        <div className='name'>{player.name}</div>
                                    </div>
                                    <div className='time'>{player.secondsFormatted}</div>
                               </li>
                    })}
                </ul>
            </div>
        </>
    )
}

Leaderboard.propTypes = {
    setStage: PropTypes.func.isRequired
}