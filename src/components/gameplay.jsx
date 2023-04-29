import PropTypes from 'prop-types';

export function Gameplay(props){

    return(
        <>
            <div>{props.level}</div>
        </>
    )
}

Gameplay.propTypes = {
    stage: PropTypes.number.isRequired,
    setStage: PropTypes.func.isRequired,
    level: PropTypes.string.isRequired
}