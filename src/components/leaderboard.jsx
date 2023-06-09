import '../css/leaderboard.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getFirestore, collection,  orderBy, limit, onSnapshot, query } from 'firebase/firestore'


export function Leaderboard(props){
        
    const [winners, setWinners] = useState([]);

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        let q 

        if(props.level !== 'none'){
            q = query(collection(getFirestore(), `${props.level}_winners`), orderBy("secondsTotal", "asc"), limit(16));
        }else{
            q = query(collection(getFirestore(), 'level one_winners'), orderBy("secondsTotal", "asc"), limit(16));
        }
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            setWinners(data);
            setLoaded(true)
        });

        

        return () => unsubscribe();
    }, [props.level]);
        
    
                        

    return (
        <>  
            <button onClick={() => {props.setStage(1)}} className='back-leader'>Back</button>
            <div className="page">
                <h1 className="title"><span style={{color: "#f23925"}}>Leader</span><span style={{color: "#0498c6"}}>board</span></h1>
                {loaded ? (
                    <ul className="leader-container">
                        {winners.map((player, index) => {
                            return <li key={index}>
                                        <div className='beginning'>
                                            <div className='number'>{index + 1}.</div>
                                            <div className='name'>{player.name}</div>
                                        </div>
                                        <div className='time'>{player.secondsFormatted}</div>
                                   </li>
                        })}
                    </ul>
                    ) : (
                        <div style={{fontSize: "8vh", color: "aliceblue", marginLeft: "22.5vw", marginTop: "23vh"}}>Loading...</div>
                    )}
            </div>
        </>
    )
}

Leaderboard.propTypes = {
    setStage: PropTypes.func.isRequired,
    level: PropTypes.string.isRequired
}