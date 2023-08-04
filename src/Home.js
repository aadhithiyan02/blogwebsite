


// import { useEffect, useState } from 'react';
// import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
// import { db, auth } from './firebase';
// import { Link } from 'react-router-dom';
// import { getStorage, ref, getDownloadURL, deleteObject } from 'firebase/storage';

// const Home = () => {
//   const [postlist, setPostlist] = useState([]);
//   const [authInitialized, setAuthInitialized] = useState(false);

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
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setAuthInitialized(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (authInitialized) {
//       getPosts();
//     }
//   }, [authInitialized]);

//   const deleteblog = async (id, imageURL) => {
//     try {
//       if (imageURL) {
//         const storage = getStorage();
//         const imageRef = ref(storage, imageURL);

//         const imageExists = await getDownloadURL(imageRef)
//           .then(() => true)
//           .catch(() => false);

//         if (imageExists) {
//           await deleteObject(imageRef);
//         }
//       }

//       const blogdoc = doc(db, 'myblog', id);
//       await deleteDoc(blogdoc);

//       getPosts();
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   };


// return (
//   <div className="home">
//     <br /><br />
//     <div className="blog-list">
//       {postlist.map((post) => (
//         <div className="blog-preview" key={post.id}>
//            <Link to={`/blog/${post.id}`}>
//           <h2> {post.title}</h2>
//           {authInitialized && auth.currentUser && post.author.id === auth.currentUser.uid && (
//             <>
//               <button onClick={() => deleteblog(post.id, post.imageURL)}>
//                 &#128465;
//               </button>
//               &nbsp;&nbsp;&nbsp;
//               <Link to={`/EditBlog/${post.id}`}>
//                 <button>&#9998;</button>
//               </Link>
//             </>
//           )}
//           <h3>@{post.author.name}</h3>
         
//             {/* <div className="read"> <h4>Read more</h4></div> */}
//             </Link>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// };

// export default Home;




// Home.js
// import React, { useEffect, useState } from 'react';
// import { getDocs, collection } from 'firebase/firestore';
// import { db, auth } from './firebase';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [postlist, setPostlist] = useState([]);
//   const [authInitialized, setAuthInitialized] = useState(false);

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
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setAuthInitialized(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (authInitialized) {
//       getPosts();
//     }
//   }, [authInitialized]);

//   return (
//     <div className="home">
//       <br /><br />
//       <div className="blog-list">
//         {postlist.map((post) => (
//           <div className="blog-preview" key={post.id}>
//             <Link to={`/blog/${post.id}`}>
//               <div className="card">
//                 <div className="card-header">
//                   {post.imageURL && <img src={post.imageURL} alt={post.title} />}
//                 </div>
//                 <div className="card-body">
//                   <h2>{post.title}</h2>
//                   {post.author && (
//                     <h3>@{post.author.name}</h3>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { getDocs, collection } from 'firebase/firestore';
// import { db, auth } from './firebase';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [postlist, setPostlist] = useState([]);
//   const [authInitialized, setAuthInitialized] = useState(false);

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

//   // Function to format Firestore timestamp to a readable date
//   const formatDate = (timestamp) => {
//     const date = timestamp?.toDate();
//     if (!date) return '';

//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString(undefined, options);
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setAuthInitialized(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (authInitialized) {
//       getPosts();
//     }
//   }, [authInitialized]);

//   return (
//     <div className="home">
//       <br />
//       <div className="blog-list">
//         {postlist.map((post) => (
//           <div className="blog-preview" key={post.id}>
//             <Link to={`/blog/${post.id}`} className="card-link">
//               <div className="card">
//                 <div className="card-header">
//                   {post.imageURL && <img src={post.imageURL} alt={post.title} />}
//                 </div>
//                 <div className="card-body">
//                   <h2 className="card-title">{post.title}</h2>
//                   {post.author && (
//                     <div>
//                       <h3>@{post.author.name} &nbsp;
//                       <small className="timestamp">
//                       {formatDate(post.timestamp)}
//                       </small>
                      
//                       </h3>
                     
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from './firebase';
import { Link } from 'react-router-dom';

const Home = () => {
  const [postlist, setPostlist] = useState([]);
  const [authInitialized, setAuthInitialized] = useState(false);

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

  // Function to format Firestore timestamp to a readable date
  const formatDate = (timestamp) => {
    const date = timestamp?.toDate();
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authInitialized) {
      getPosts();
    }
  }, [authInitialized]);

  return (
    <div className="home">
      <br />
      <div className="blog-list">
        {postlist.map((post) => (
          <div className="blog-preview" key={post.id}>
            <Link to={`/blog/${post.id}`} className="card-link">
              <div className="card">
                <div className="card-header">
                  {post.imageURL && <img src={post.imageURL} alt={post.title} />}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  {post.author && (
                    <div>
                      <h3>@{post.author.name} &nbsp;
                      <small className="timestamp">
                      {formatDate(post.createdAt)}
                      </small>
                      
                      </h3>
                     
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
