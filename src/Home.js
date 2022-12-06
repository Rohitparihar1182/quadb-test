import React, { useState } from 'react'
import Show from './Show';

export default function Home() {
    const [data, setData] = useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const responseData = await response.json();
            setData(responseData);
            console.log(responseData);
        }
        fetchData();
    }, [])
    return (
        <div className="home">
            {data && data.map((show, idx) => <Show key={idx} show={show.show}/>)}
        </div>
    )
}
