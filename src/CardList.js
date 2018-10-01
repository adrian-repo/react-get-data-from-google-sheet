import React from 'react';
import Card from './Card';



const CardList = ({ BlogSource }) => {

    return (
        <div className='tc'>
            {
                BlogSource.map((blog,i) =>{
                    return (
                        <Card 
                            key={i} 
                            title={BlogSource[i].title.slice(0,70)+'...'} 
                            excerpt={BlogSource[i].content.slice(0,250)+'...'}
                            content={BlogSource[i].content}
                        /> 
                    );
                })
            }
        </div>
    );

}

export default CardList;