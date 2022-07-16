import React, {useState} from 'react';
import axios from 'axios';

const Counter = () =>{
    const [data, setData] = useState([])
    const fetchData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            const result = res.data.slice(0,10)
            setData([...data, result])
        })
    }
    return(
        <>
            <div>halo counterr</div>
            <button onClick={fetchData}>Fetch Data</button>
            {data.length > 0 &&
                <div style={{
                marginTop:'30px'
            }}>
                {data.map(item =>{
                    return(
                        <div>{item.title}</div>
                    )
                })}

            </div>
            }
        </>
    )
}

export default Counter