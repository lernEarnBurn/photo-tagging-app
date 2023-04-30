import PropTypes from 'prop-types';
import '../css/gameplay.css'
import { Timer } from './timer';

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
    
    return (
        <>
            <div className='top-bar'>
                <div className='waldo-icon'></div>
                {/* eslint-disable-next-line react/no-unescaped-entities*/}
                <h1><span style={{color: "#0498c6"}}>Where's</span><span style={{color: "#f23925"}}> Waldo</span></h1>
                {/*make it its own component */}
                <Timer/>
            </div>
            <img src={levelImagePath()} alt="level img"></img>
        </>
    )
    
}

Gameplay.propTypes = {
    stage: PropTypes.number.isRequired,
    setStage: PropTypes.func.isRequired,
    level: PropTypes.string.isRequired
}