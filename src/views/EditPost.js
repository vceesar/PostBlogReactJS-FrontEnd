import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from "axios";
/* import { useParams } from 'react-router-dom'; */
import { useHistory } from 'react-router-dom';


function EditPost() {
    /* let {id} = useParams() ; */
    const initialValues = {
        title: "",
        content: "",
        tags:"",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(5).max(100).required(),
        content: Yup.string().min(100).required(),
        tags: Yup.string().min(1).max(10)
    });

    const updatePost = (id) => {
        axios.put(`https://postblogjs.herokuapp.com/posts/${id}`).then( (response) => {
            console.log("Dados editados e adicionados no Post");
            history.push("/");
          });
    };

    

    let history = useHistory();
    return (
        <div className="createPostPage">
        

       
        <Formik initialValues={initialValues} onSubmit={updatePost}  validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Titulo: </label>
                <ErrorMessage name="title" component="span" />
                <Field id="inputCreatePost" name="title" placeholder="Escreva o novo título do post " />
                
                <label>Conteúdo: </label>
                <ErrorMessage name="content" component="span" />
                <Field id="inputCreatePost" name="content" placeholder="Escreva o novo conteúdo do post " />

                <label>Tags: </label>
                <ErrorMessage name="tags" component="span" />
                <Field id="inputCreatePost" name="tags" placeholder="Escreva a nova tag do post (Opcional)" />

                <button type="submit"> Salvar o Post </button>

            </Form>     
             
        </Formik>   
        </div>
    )
}




export default EditPost;