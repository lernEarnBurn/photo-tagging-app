import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../css/gameplay.css'
import { Timer } from './timer';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'


export function Gameplay(props){
    function levelImagePath(){
        if(props.level === "level one"){
            return "/images/waldoLevel.jpg"
        }else if(props.level === "level two"){
            return "/images/waldoLevel2.jpg"
        }else if(props.level === "level three"){
            return "/images/waldoLevel3.jpg"
        }
    }

    const [data, setData] = useState([])
    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(getFirestore(), props.level));
            const snapshot = await getDocs(q)
            const response = snapshot.docs.map(doc => doc.data());
            setData(response);
          };
        fetchData();
        setDataFetched(true)
    }, [props.level])

    
       
    useEffect(() => {
        if(dataFetched && data.length > 0){
            document.addEventListener('mousedown', checkWin)
        }
    })
 
    const [win, setWin] = useState(false)

    function checkWin(event) {
        const x = event.clientX;
        const y = event.clientY;
        
        if(x >= data[0].start && x <= data[0].end && y >= data[1].start && y <= data[1].end){
            setWin(true)
        }
    }
      

    
    return (
        <>  
            <div className='top-bar'>
                <div className='waldo-icon'></div>
                {/* eslint-disable-next-line react/no-unescaped-entities*/}
                <h1><span style={{color: "#0498c6"}}>Where's</span><span style={{color: "#f23925"}}> Waldo</span></h1>
                <Timer/>
            </div>
            <img src={levelImagePath()} alt="level img"></img>
            {win ? (
                <div className='win-message'>
                  <h2>You found Waldo!</h2>
                  <button onClick={() => setWin(false)}>Play again</button>
                </div>
            ) : null}
        </>
    )
    
}

Gameplay.propTypes = {
    level: PropTypes.string.isRequired
}

