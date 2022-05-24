import React from 'react'
import CardsMovies from './CardsMovies';
import propTypes from 'prop-types'


const ContentRowMovies = (props)=>{
    return (
        <>      
            {props.cards.map(card=>{
                return <CardsMovies name={card.name} icon={card.icon} color={card.color} />
            })}
        </>
		
    )
}
ContentRowMovies.propTypes  ={
    name:propTypes.string.isRequired,
    number:propTypes.number.isRequired,
    icon:propTypes.string.isRequired || propTypes.number.isRequired,
    color:propTypes.string.isRequired
}

// ContentRowMovies.defaultProps ={
//     name:'No se envio',
// 	number:21,
// 	icon:'fa-film',
// 	color:'success'
// }
 export default ContentRowMovies;