import React from 'react';
import { useNavigate } from 'react-router-dom';

function editSummary(summary){
    return summary.substring(0, 150)+'...';
}

export default function Show({ show }) {
    const navigator = useNavigate();
    function visitPage(){
        navigator(`/show/:${show.id}`);
    }
    return (
        <div className='show' onClick={visitPage}>
            <img loading='lazy' src={show.image.original} alt="show-img" />
            <div className="show-content">
                <div className="border-solid">
                    <h2>{show.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: editSummary(show.summary) }}/>
                    <span className="fa fa-star checked">&nbsp;&nbsp;{show?.rating?.average}</span>
                    <div className="show-genre">
                        {show.genres.map((genre, idx) => <span key={idx}>{genre}</span>)}
                    </div>

                </div>
            </div>
        </div>
    )
}
