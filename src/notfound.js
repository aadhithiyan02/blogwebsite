import { Link } from "react-router-dom"


const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The page is not found</p>

            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;