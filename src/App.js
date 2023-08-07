import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import NewBlog from "./newblog";
import BlogDetails from "./BlogDetails";
import NotFound from "./notfound";
import Login from "./login";
import { useEffect, useState } from "react";
import EditBlog from "./edit";


function App() {
  const [auth, setAuth] = useState(false);


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Navbar auth={auth} setauth={setAuth} />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/blogwebsite">
                <Home auth={auth} />
              </Route>
              <Route path="/newblog">
                <NewBlog auth={auth} />
              </Route>
              <Route path="/blog/:id">
                <BlogDetails />
              </Route>
              <Route path="/Login">
                <Login setauth={setAuth} />
              </Route>

              <Route path="/EditBlog/:id" component={EditBlog} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
