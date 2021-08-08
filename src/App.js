import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Home from "./views/Home";
import CreatePost from "./views/CreatePost";
import Post from "./views/Post";
import EditPost from "./views/EditPost";
import './App.css';


function App() { 
    return (   
    <div className="App">
      
      <Router>

        <div className="titulo"><h1>BLOGPOST</h1></div>
        <div className="navbar">
          <Link to="/">Voltar para a Home</Link>
          <Link to="/createpost">Criar um novo Post</Link> 
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/createpost" exact component={CreatePost}/>
          <Route path="/post/:id" exact component={Post}/>
          <Route path="/editpost" exact component={EditPost}/>
        
        </Switch>
      </Router>   

      
         
      </div>
    );  
}

export default App;
