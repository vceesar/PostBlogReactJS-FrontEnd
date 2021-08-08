import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

function Home() {
    const [listofPosts, setListofPosts] = useState([]);
    let history = useHistory();
    useEffect( () => {
      axios.get("https://postblogjs.herokuapp.com/posts").then( (response) => {
        setListofPosts(response.data);
      });
    }, []);

    return (
        <div>
            {listofPosts.map((value,key)=>{
             return (
            <div className="post" onClick={() => {history.push(`/post/${value.id}`)}}> 
                <div className="title"> {value.title} </div>
                <div className="body"> {value.createdAt} </div>
                <div className="footer"><div className="tag">{value.tags} </div> </div>
            </div> 
            );
        })}
        </div>
    )
}

export default Home
