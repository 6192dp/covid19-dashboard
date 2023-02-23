import React from 'react';

const Prasen = () => {
    return (
        <div>
            <div>Click the button to download calender for the events</div>
            <button onClick={()=>{window.open('https://d204n24jryx6nr.cloudfront.net/Gundvarams-Wedding.ics')}}>Download!</button>
        </div>
    )
}

export default Prasen;