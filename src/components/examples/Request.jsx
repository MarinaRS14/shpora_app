import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Request() {
    let url = "https://jsonplaceholder.typicode.com/posts";

    const [message, setMessage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
          .then((result) => {
              setIsLoaded(true);
              setMessage(result.data);
          },
          (error) => {
              setIsLoaded(true);
              setError(error)
          }
          )
    }, [])

    if(error) {
        return <div>Ошибка: {error.message}</div>
    }
    else if(!isLoaded) {
        return <div>Загрузка...</div>
    }
    else {
        return (
            <ol>
                {message.slice(0,10).map(item => <li key={item.id}>{item.body}</li>)}
            </ol>
        )
    }

}

export default Request;
