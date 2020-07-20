import React from 'react';
import Club from './Club';

const ClubList = (props) => {
    return ( 
        <div className="clubs-list">
        {props.clubs ? 
        <>
        {props.clubs.map(club => 
            <Club key={club.id} club={club} onClubClick={props.onClubClick}/>
        )}
        </>
        : null}
        </div>
     );
}
 
export default ClubList;