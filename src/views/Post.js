import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Post() {
    let {id} = useParams() ;
    const [postObject, setPostObject] = useState({});
    let history = useHistory();

    useEffect(()=> {
        axios.get(`https://postblogjs.herokuapp.com/posts/byId/${id}`).then( (response) => {
            setPostObject(response.data);
        });

    })

    const deletePost = (id) => {
        axios.delete(`https://postblogjs.herokuapp.com/posts/${id}`).then(() => {
            history.push("/");
        })
    }
    const routeChange = () =>{ 
        let path = "/editpost"; 
        history.push(path);
      }
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                <div className="title">{postObject.title}  <div className="button"> <EditIcon onClick={routeChange} /></div> </div>
               
                <div className="body">{postObject.content}</div>
                <div className="footer">
                    {postObject.tags} 
                <div className="button">
                <DeleteIcon onClick={() => { deletePost(postObject.id);}}
                />

                </div>  
                    
                </div>

                </div>
               

            </div>
            
            
        </div>
    )
}

export default Post
