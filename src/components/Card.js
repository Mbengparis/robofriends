import React from 'react';

const Card = (props) =>{

    return (
        <div className='bg-light-green dib pa0 ma3 br3 grow bw2 shadow-5'>
            <img alt = 'robots' src ={`https://robohash.org/${props.id}?150x150`} />
            <div className='tc'>
                <h2>{props.name}</h2>
                 <p>{props.email}</p>
            </div>  
        </div>
       
    )
}

export default Card;