import '../css/gamestart.css'
import PropTypes from 'prop-types';  


export function Gamestart(props){

    function startGame(event){
        props.setStage(2)
        props.getLevel(event.target.className)
    }

    return(
        <>  
            {/*May remove being as i dont like how it looks, but for now helps dev process*/}
            <button className='leaderboard-start' onClick={() => {props.setStage(3)}}>Leaderboard</button>
            <div className="background">
                <div className="level-container">
                    <div className='level one' onClick={(event) => startGame(event)}>
                        <div className='text-background'>
                            <p>Level 1</p>
                        </div>
                    </div>
                    <div className='level two' onClick={(event) => startGame(event)}>
                        <div className='text-background'>
                            <p>Level 2</p>
                        </div>
                    </div>
                    <div className='level three' onClick={(event) => startGame(event)}>
                        <div className='text-background'>
                            <p>Level 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Gamestart.propTypes = {
    setStage: PropTypes.func.isRequired,
    getLevel: PropTypes.func.isRequired
}