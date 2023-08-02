import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ auth, setauth }) => {
  let history = useHistory();
  const authInstance = getAuth();

  const handleSignout = () => {
    signOut(authInstance)
      .then(() => {
        localStorage.clear();
        setauth(false);
        history.push("/Login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="navbar">
      <h1>Aadhi Blogs</h1>
      <div className="links">
        <Link to="/blogpage" className="create">
          Home
        </Link>

        {!auth ? (
          <Link to="/Login" className="login">
            Login
          </Link>
        ) : (
          <>
            <Link to="/newblog" className="create">
              New Blog
            </Link>
            <button onClick={handleSignout}>Signout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
