import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from "axios";
import { useHistory } from 'react-router-dom';

function CreatePost() {
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

    const onSubmit = (data) => {
        axios.post("https://postblogjs.herokuapp.com/posts", data).then( (response) => {
            console.log("Dados adicionados no novo Post");
            history.push("/");
          });
    };

    let history = useHistory();
    return (
        <div className="createPostPage">
        
        <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Titulo: </label>
                <ErrorMessage name="title" component="span" />
                <Field id="inputCreatePost" name="title" placeholder="Escreva o título do post " />
                
                <label>Conteúdo: </label>
                <ErrorMessage name="content" component="span" />
                <Field id="inputCreatePost" name="content" placeholder="Escreva o conteúdo do post " />

                <label>Tags: </label>
                <ErrorMessage name="tags" component="span" />
                <Field id="inputCreatePost" name="tags" placeholder="Escreva a tag do post (Opcional) " />

                <button type="submit"> Criar o Post </button>

            </Form>     
             
        </Formik>   
        </div>
    )
}

export default CreatePost;
