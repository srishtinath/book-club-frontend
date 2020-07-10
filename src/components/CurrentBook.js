import React from 'react';

const CurrentBook = (props) => {
    return ( 
        <div>
            {
                props.activeBook ?
                <div>
                    <h4>Currently reading: </h4> <p><b>{props.activeBook.title}</b></p>
                    <img src={props.activeBook.image} alt={props.activeBook.title} className="current-reading"/>
                    <p>{props.activeBook.description}</p>
                </div>
                :
                null
            }
            
        </div>
     );
}
 
export default CurrentBook;