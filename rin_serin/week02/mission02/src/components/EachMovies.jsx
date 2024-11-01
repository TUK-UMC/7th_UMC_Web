import { useState } from "react";
import { MOVIES } from "./Movies";

function EachMovie (){
    const datas = MOVIES;
    const dataCharts = datas.results;
    // const dataImg = dataCharts.poster_path;
    // console.log(dataCharts);

    const [hoverOn, setHoveron] = useState(null);
    console.log(hoverOn);

    return(
        <>
            {dataCharts.map((movie, index)=>(
                <div 
                    key={index} 
                    style={{width: '200px', height: '300px', margin: '10px'}}
                    onMouseEnter={() => setHoveron(index)}
                    onMouseLeave={() => setHoveron()}>
                    <img 
                    src={"https://image.tmdb.org/t/p/original" +movie.poster_path} 
                    style={{ width: '200px', height: '300px', margin: '10px', 
                        borderRadius:'12px', transition: 'opacity 0.3s ease-in-out', 
                    }}
                    /> 
                    {hoverOn === index && (
                        <div
                            style={{
                                position:'relative',
                                top:'-315px',
                                left:'10px',
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#212121',
                                opacity: 0.5,
                                borderRadius: '12px',
                                zIndex: 1
                            }}
                        ></div>
                    )}
                </div>
            ))}
        </>
    )
};

export default EachMovie;