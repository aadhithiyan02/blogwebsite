
// // // import { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { getDocs, collection ,doc,deleteDoc} from 'firebase/firestore';
// // // import { db } from './firebase';

// // // const Home = (auth) => {
// // //   const [postlist, setPostlist] = useState([]);

// // //   useEffect(() => {
// // //     const getPosts = async () => {
// // //       try {
// // //         const blogCollection = collection(db, 'myblog');
// // //         const data = await getDocs(blogCollection);
// // //         const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// // //         console.log('Fetched posts:', posts);
// // //         setPostlist(posts);
// // //       } catch (error) {
// // //         console.error('Error fetching data: ', error);
// // //       }
// // //     };

// // //     getPosts();
// // //   }, []);
// // // const deleteblog = async(id) => {
// // //     const blogdoc=doc(db,"myblog",id)
// // //     await deleteDoc(blogdoc)
    
// // // }
// // //   return (
// // //     <div className="home">
// // //       <div className="blog-list">
// // //         {postlist.map((post) => (
// // //           <div className="blog-preview" key={post.id}>
           
// // //               <h2>Title: {post.title}</h2>
// // //               {auth&&post.author.id===auth.currentUser.uid&&<button onClick={()=>{deleteblog(post.id)}}>&#128465;</button>}
// // //               <h3>Author: {post.author.name}</h3>
// // //               <p>{post.content}</p>
            
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;



// // // import { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// // // import { db} from './firebase';


// // // const Home = ({ auth }) => {
// // //   const [postlist, setPostlist] = useState([]);

// // //   useEffect(() => {
// // //     const getPosts = async () => {
// // //       try {
// // //         const blogCollection = collection(db, 'myblog');
// // //         const data = await getDocs(blogCollection);
// // //         const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// // //         console.log('Fetched posts:', posts);

// // //         setPostlist(posts);
// // //       } catch (error) {
// // //         console.error('Error fetching data: ', error);
// // //       }
// // //     };

// // //     getPosts();
// // //   }, []);

// // //   const deleteblog = async (id) => {
// // //     const blogdoc = doc(db, 'myblog', id);
// // //     await deleteDoc(blogdoc);
// // //   };

// // //   return (
// // //     <div className="home">
// // //       <div className="blog-list">
// // //         {postlist.map((post) => (
// // //           <div className="blog-preview" key={post.id}>
// // //             <h2>Title: {post.title}</h2>
// // //             {console.log('post.author.id:', post.author.id)} {/* Log post author id */}
// // //             {console.log('auth.currentUser.uid:', auth?.currentUser?.uid)} {/* Log auth current user id */}
        
// // //               <button onClick={() => deleteblog(post.id)}>&#128465;</button>
            
// // //             <h3>Author: {post.author.name}</h3>
// // //             <p>{post.content}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // // import { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// // // import { db } from './firebase';

// // // const Home = ({ auth }) => {
// // //   const [postlist, setPostlist] = useState([]);

// // //   useEffect(() => {
// // //     const getPosts = async () => {
// // //       try {
// // //         const blogCollection = collection(db, 'myblog');
// // //         const data = await getDocs(blogCollection);
// // //         const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// // //         console.log('Fetched posts:', posts);

// // //         setPostlist(posts);
// // //       } catch (error) {
// // //         console.error('Error fetching data: ', error);
// // //       }
// // //     };

// // //     getPosts();
// // //   }, []);

// // //   const deleteblog = async (id) => {
// // //     try {
// // //       const blogdoc = doc(db, 'myblog', id);
// // //       await deleteDoc(blogdoc);

// // //       // Refresh the postlist after a blog is deleted
// // //       getPosts();
// // //     } catch (error) {
// // //       console.error('Error deleting blog:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="home">
// // //       <div className="blog-list">
// // //         {postlist.map((post) => (
// // //           <div className="blog-preview" key={post.id}>
// // //             <h2>Title: {post.title}</h2>
// // //             {post.author.id === auth?.currentUser?.uid && ( // Show delete button only for the author
// // //               <button onClick={() => deleteblog(post.id)}>&#128465;</button>
// // //             )}
// // //             <h3>Author: {post.author.name}</h3>
// // //             <p>{post.content}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// // import { db } from './firebase';
// // import { auth } from "./firebase";

// // const Home = () => {
// //   const [postlist, setPostlist] = useState([]);

// //   // Define getPosts function outside of the useEffect hook
// //   const getPosts = async () => {
// //     try {
// //       const blogCollection = collection(db, 'myblog');
// //       const data = await getDocs(blogCollection);
// //       const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// //       console.log('Fetched posts:', posts);

// //       setPostlist(posts);
// //     } catch (error) {
// //       console.error('Error fetching data: ', error);
// //     }
// //   };

// //   useEffect(() => {
// //     // Call getPosts function inside the useEffect hook
// //     getPosts();
// //   }, []);

// //   const deleteblog = async (id) => {
// //     try {
// //       const blogdoc = doc(db, 'myblog', id);
// //       await deleteDoc(blogdoc);

// //       // Refresh the postlist after a blog is deleted
// //       getPosts();
// //     } catch (error) {
// //       console.error('Error deleting blog:', error);
// //     }
// //   };

// //   return (
// //     <div className="home">
// //       <div className="blog-list">
// //         {postlist.map((post) => (
// //           <div className="blog-preview" key={post.id}>
// //             <h2>Title: {post.title}</h2>
// //             {console.log(post.author.id,auth?.currentUser?.uid)}
// //             {auth&&post.author.id === auth?.currentUser?.uid && ( // Show delete button only for the author
// //               <button onClick={() => deleteblog(post.id)}>&#128465;</button>
// //             )}
// //             &nbsp;&nbsp;&nbsp;<button>&#9998;</button>
// //             <h3>Author: {post.author.name}</h3>
// //             <p>{post.content}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// import { db } from './firebase';
// import { auth } from './firebase';

// const Home = () => {
//   const [postlist, setPostlist] = useState([]);

//   // Define getPosts function outside of the useEffect hook
//   const getPosts = async () => {
//     try {
//       const blogCollection = collection(db, 'myblog');
//       const data = await getDocs(blogCollection);
//       const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//       console.log('Fetched posts:', posts);

//       setPostlist(posts);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     // Call getPosts function inside the useEffect hook
//     getPosts();
//   }, []);

//   const deleteblog = async (id) => {
//     try {
//       const blogdoc = doc(db, 'myblog', id);
//       await deleteDoc(blogdoc);

//       // Refresh the postlist after a blog is deleted
//       getPosts();
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   };

//   return (
//     <div className="home">
//       <div className="blog-list">
//         {postlist.map((post) => (
//           <div className="blog-preview" key={post.id}>
//             <h2>Title: {post.title}</h2>
//             {console.log(post.author.id, auth?.currentUser?.uid)}
//             {auth && post.author.id === auth?.currentUser?.uid && (
//               <button onClick={() => deleteblog(post.id)}>&#128465;</button>
//             )}
//             &nbsp;&nbsp;&nbsp;
//             <button>&#9998;</button>
//             {post.imageURL && (
//               <img
//                 src={post.imageURL}
//                 alt="Blog"
//                 style={{ maxWidth: '300px', maxHeight: '200px' }} // Set the maximum width and height
//               />
//             )}
//             <h3>Author: {post.author.name}</h3>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db, storage } from './firebase';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

const Home = () => {
  const [postlist, setPostlist] = useState([]);

  const getPosts = async () => {
    try {
      const blogCollection = collection(db, 'myblog');
      const data = await getDocs(blogCollection);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log('Fetched posts:', posts);

      setPostlist(posts);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  const deleteblog = async (id, imageURL) => {
    try {
      // Delete the image from Firebase Storage if it exists
      if (imageURL) {
        const storageRef = storage.getStorage();
        const imageRef = storage.refFromURL(imageURL);
        await storage.deleteObject(imageRef);
      }
  
      // Delete the blog post from Firestore
      const blogdoc = doc(db, 'myblog', id);
      await deleteDoc(blogdoc);
  
      // Refresh the postlist after a blog is deleted
      getPosts();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  
  

  return (
    <div className="home">
      <div className="blog-list">
        {postlist.map((post) => (
          <div className="blog-preview" key={post.id}>
            <h2>Title: {post.title}</h2>
            {console.log(post.author.id, auth?.currentUser?.uid)}
            {auth && post.author.id === auth?.currentUser?.uid && (
              <button onClick={() => deleteblog(post.id, post.imageURL)}>&#128465;</button>
            )}
            &nbsp;&nbsp;&nbsp;
            <button>&#9998;</button>
            
            <h3>Author: {post.author.name}</h3>
            
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
