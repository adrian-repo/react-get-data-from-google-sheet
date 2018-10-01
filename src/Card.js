import React from 'react';
import 'tachyons';
import './Card.css';


const Card = ( {title, excerpt, content} ) => {

       return (
            <div className="w-25 w-100-m bg-light-blue dib pa3 ma2 br3 grow bw2 shadow-5">
                <div>
                    <h2> {title}</h2>                   
                    <p> {excerpt} </p>
                </div>
                    <button className="br4 bg-light-gray">Read More</button>                     
                
            </div>

    );
}

export default Card;