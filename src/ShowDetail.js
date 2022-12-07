import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShowDetail() {
    const [show, setShow] = React.useState({});
    const params = useParams();
    React.useEffect(() => {
        async function fetchData(){
            const res = await fetch(`https://api.tvmaze.com/shows/${params.id.substring(1)}`);
            const data = await res.json();
            console.log(data)
            setShow(data);
        }
        fetchData();
    }, [params.id])
    return (
        <div className='show-detail'>
            <img src={show?.image?.original} alt="show-img" />
            <div className="show-desc">
                <h2>{show?.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: show?.summary }}/>
                <span className="fa fa-star checked">&nbsp;&nbsp;{show?.rating?.average}</span>
                <div className="show-genre">
                    {show?.genres?.map((genre, idx) => <span key={idx}>{genre}</span>)}
                </div>
                <span>
                    <a target='_blank' rel="noreferrer" className='view-btn' href={show.url}>View</a>
                </span>
            </div>
        </div>
    )
}
