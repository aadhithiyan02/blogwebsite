


// import { useEffect, useState } from 'react';
// import { getDocs, collection, deleteDoc,doc } from 'firebase/firestore';
// import { db, auth } from './firebase';
// import { Link } from 'react-router-dom';
// import { getStorage, ref, getDownloadURL, deleteObject } from 'firebase/storage';

// const Home = () => {
//   const [postlist, setPostlist] = useState([]);

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
//     getPosts();
//   }, []);
//   const deleteblog = async (id, imageURL) => {
//     try {
//       if (imageURL) {
//         const storage = getStorage();
//         const imageRef = ref(storage, imageURL);
  
//         // Check if the image exists in Firebase Storage before attempting to delete
//         const imageExists = await getDownloadURL(imageRef).then(() => true).catch(() => false);
  
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
  
  

//   return (
//     <div className="home">
//       <div className="blog-list">
//         {postlist.map((post) => (
//           <div className="blog-preview" key={post.id}>
//             <h2>Title: {post.title}</h2>
//             {auth && post.author.id === auth?.currentUser?.uid && (
//               <button onClick={() => deleteblog(post.id, post.imageURL)}>
//                 &#128465;
//               </button>
//             )}
//             &nbsp;&nbsp;&nbsp;
//             <button>&#9998;</button>
//             {post.imageURL && (
//               <img
//                 src={post.imageURL}
//                 alt="Blog"
//                 style={{ maxWidth: '300px', maxHeight: '200px' }}
//               />
//             )}
//             <h3>Author: {post.author.name}</h3>
//             <p>{post.content}</p>
//             <Link to={`/blog/${post.id}`}>Read more</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


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

//         // Check if the image exists in Firebase Storage before attempting to delete
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

//   return (
//     <div className="home">
//       <div className="blog-list">
//         {postlist.map((post) => (
//           <div className="blog-preview" key={post.id}>
//             <h2>Title: {post.title}</h2>
//             {authInitialized && auth.currentUser && post.author.id === auth.currentUser.uid && (
//               <button onClick={() => deleteblog(post.id, post.imageURL)}>
//                 &#128465;
//               </button>
//             )}
//             &nbsp;&nbsp;&nbsp;
//             <button>&#9998;</button>
           
//             <h3>Author: {post.author.name}</h3>
//             <Link to={`/blog/${post.id}`}>Read more</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL, deleteObject } from 'firebase/storage';

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

  const deleteblog = async (id, imageURL) => {
    try {
      if (imageURL) {
        const storage = getStorage();
        const imageRef = ref(storage, imageURL);

        // Check if the image exists in Firebase Storage before attempting to delete
        const imageExists = await getDownloadURL(imageRef)
          .then(() => true)
          .catch(() => false);

        if (imageExists) {
          await deleteObject(imageRef);
        }
      }

      const blogdoc = doc(db, 'myblog', id);
      await deleteDoc(blogdoc);

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
            {authInitialized && auth.currentUser && post.author.id === auth.currentUser.uid && (
              <button onClick={() => deleteblog(post.id, post.imageURL)}>
                &#128465;
              </button>
            )}
            &nbsp;&nbsp;&nbsp;
            <button>&#9998;</button>
            
            <h3>Author: {post.author.name}</h3>
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
