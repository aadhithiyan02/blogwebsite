// // // import { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { getDoc, doc } from 'firebase/firestore';
// // // import { db } from './firebase';

// // // const BlogDetails = () => {
// // //   const { id } = useParams();
// // //   const [blog, setBlog] = useState(null);

// // //   useEffect(() => {
// // //     const fetchBlog = async () => {
// // //       try {
// // //         const blogDocRef = doc(db, 'myblog', id);
// // //         const docSnap = await getDoc(blogDocRef);
// // //         if (docSnap.exists()) {
// // //           const blogData = { id: docSnap.id, ...docSnap.data() };
// // //           setBlog(blogData);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching blog:', error);
// // //       }
// // //     };
// // //     fetchBlog();
// // //   }, [id]);

// // //   return (
// // //     <div className="blog-full-content">
// // //       {blog ? (
// // //         <>
// // //           <h2>{blog.title}</h2>
// // //           <h3>Author: {blog.author.name}</h3>
// // //           {blog.imageURL && <img src={blog.imageURL} alt="Blog"   style={{ maxWidth: '400px', maxHeight: '300px' }}
// // //  />}
// // //           <p>{blog.content}</p>
// // //         </>
// // //       ) : (
// // //         <div>Loading...</div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default BlogDetails;

// // // import { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { getDoc, doc } from 'firebase/firestore';
// // // import { db } from './firebase';

// // // const BlogDetails = () => {
// // //   const { id } = useParams();
// // //   const [blog, setBlog] = useState(null);

// // //   useEffect(() => {
// // //     const fetchBlog = async () => {
// // //       try {
// // //         const blogDocRef = doc(db, 'myblog', id);
// // //         const docSnap = await getDoc(blogDocRef);
// // //         if (docSnap.exists()) {
// // //           const blogData = { id: docSnap.id, ...docSnap.data() };
// // //           setBlog(blogData);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching blog:', error);
// // //       }
// // //     };
// // //     fetchBlog();
// // //   }, [id]);

// // //   return (
// // //     <div className="blog-full-content">
// // //       {blog ? (
// // //         <>
// // //           <h2>{blog.title}</h2>
// // //           <h3>Author: {blog.author.name}</h3>
// // //           {blog.imageURL && (
// // //             <img
// // //               src={blog.imageURL}
// // //               alt="Blog"
// // //               style={{ maxWidth: '400px', maxHeight: '300px' }}
// // //             />
// // //           )}
// // //           {blog.paragraphs.map((paragraph, index) => (
// // //             <p key={index}>{paragraph} <br /><br /></p>
// // //           ))}
// // //         </>
// // //       ) : (
// // //         <div>Loading...</div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default BlogDetails;

// // import { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { getDoc, doc } from 'firebase/firestore';
// // import { db } from './firebase';

// // const BlogDetails = () => {
// //   const { id } = useParams();
// //   const [blog, setBlog] = useState(null);

// //   useEffect(() => {
// //     const fetchBlog = async () => {
// //       try {
// //         const blogDocRef = doc(db, 'myblog', id);
// //         const docSnap = await getDoc(blogDocRef);
// //         if (docSnap.exists()) {
// //           const blogData = { id: docSnap.id, ...docSnap.data() };
// //           setBlog(blogData);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching blog:', error);
// //       }
// //     };
// //     fetchBlog();
// //   }, [id]);

// //   return (
// //     <div className="blog-full-content">
// //       {blog ? (
// //         <>
// //           <h2  ><br />{blog.title}</h2>
// //           <h3 >@{blog.author.name}</h3>
// //           {blog.imageURL && (
// //         <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>

// //         <img
// //           src={blog.imageURL}
// //           alt="Blog"
// //           style={{ maxWidth: '600px', maxHeight: '400px' }}

// //         />

// //       </div>
// //           )}
// //           <div style={{ textAlign: 'justify' }}>
// //             {blog.paragraphs ? (
// //               blog.paragraphs.map((paragraph, index) => (
// //                 paragraph ? (
// //                   <div style={{ paddingTop: '25px' }} key={index}>
// //                     <p>{paragraph}</p>
// //                   </div>
// //                 ) : null
// //               ))
// //             ) : (
// //               <p>{blog.content}</p>
// //             )}
// //           </div>

// //         </>
// //       ) : (
// //         <div><br />Loading...</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetails;

// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { getDoc, doc } from "firebase/firestore";
// // import { db } from "./firebase";

// // const BlogDetails = () => {
// //   const { id } = useParams();
// //   const [blog, setBlog] = useState(null);
// //   const [progress, setProgress] = useState(0);

// //   useEffect(() => {
// //     const fetchBlog = async () => {
// //       try {
// //         const blogDocRef = doc(db, "myblog", id);
// //         const docSnap = await getDoc(blogDocRef);
// //         if (docSnap.exists()) {
// //           const blogData = { id: docSnap.id, ...docSnap.data() };
// //           setBlog(blogData);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching blog:", error);
// //       }
// //     };
// //     fetchBlog();

// //     const handleScroll = () => {
// //       const scrollHeight = document.documentElement.scrollHeight;
// //       const clientHeight = document.documentElement.clientHeight;
// //       const scrollTop = document.documentElement.scrollTop;
// //       const windowHeight = scrollHeight - clientHeight;
// //       const progress = (scrollTop / windowHeight) * 100;
// //       setProgress(progress);
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [id]);

// //   return (
// //     <div className="blog-full-content">
// //       <div className="progress-line" style={{ width: `${progress}%` }}></div>
// //       {blog ? (
// //         <>
// //           <h2 style={{"color":"#5680E9"}}>
// //             <br />
// //             {blog.title}
// //           </h2>
// //           <h3>@{blog.author.name}</h3>
// //           {blog.imageURL && (
// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 paddingTop: "20px",
// //                 paddingBottom: "20px",
// //               }}
// //             >
// //               <img
// //                 src={blog.imageURL}
// //                 alt="Blog"
// //                 style={{ maxWidth: "600px", maxHeight: "400px", }}
// //               />
// //             </div>
// //           )}
// //           <div style={{ textAlign: "justify" }}>
// //             {blog.paragraphs ? (
// //               blog.paragraphs.map((paragraph, index) =>
// //                 paragraph ? (
// //                   <div style={{ paddingTop: "25px" }} key={index}>
// //                     <p>{paragraph}</p>
// //                   </div>
// //                 ) : null
// //               )
// //             ) : (
// //               <p>{blog.content}</p>
// //             )}
// //           </div>
// //         </>
// //       ) : (
// //         <div>
// //           <br />
// //           Loading...
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDoc, doc } from 'firebase/firestore';
// import { db } from './firebase';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, 'myblog', id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   return (
//     <div className="blog-full-content">
//       {blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           <h3>@{blog.author.name}</h3>
//           {blog.imageURL && (
//             <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: '100%', /* Set the maximum width to fill the container */
//                   height: 'auto', /* Maintain the aspect ratio of the image */
//                   maxHeight: '400px', /* Set a maximum height to avoid excessive height */
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: 'justify' }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: '25px' }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//         </>
//       ) : (
//         <div><br /> <br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDoc, doc } from 'firebase/firestore';
// import { db } from './firebase';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, 'myblog', id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   return (
//     <div className="blog-full-content">
//       {blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           <div className="blog-info">
//             <p>Published on: {blog.timestamp?.toDate().toLocaleString()}</p>
//             {blog.timestamp && blog.timestamp !== blog.updatedTimestamp && (
//               <p>Updated on: {blog.updatedTimestamp?.toDate().toLocaleString()}</p>
//             )}
//           </div>
//           <h3>@{blog.author.name}</h3>
//           {blog.imageURL && (
//             <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: '100%', /* Set the maximum width to fill the container */
//                   height: 'auto', /* Maintain the aspect ratio of the image */
//                   maxHeight: '400px', /* Set a maximum height to avoid excessive height */
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: 'justify' }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: '25px' }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//         </>
//       ) : (
//         <div><br /> <br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "./firebase";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, "myblog", id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   return (
//     <div className="blog-full-content">
//       {blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           <h3>@{blog.author.name}</h3>
//           {blog.imageURL && (
//             <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: "600px",
//                   maxHeight: "400px",
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: "justify" }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: "25px" }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//           {blog.editedAt && ( // Show "Updated on" only if editedAt exists
//             <div>
//               <p>Updated on: {blog.editedAt.toDate().toLocaleString()}</p>
//             </div>
//           )}
//         </>
//       ) : (
//         <div><br /> <br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "./firebase";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, "myblog", id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     };
//     fetchBlog();

//     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = document.documentElement.clientHeight;
//       const scrollTop = document.documentElement.scrollTop;
//       const windowHeight = scrollHeight - clientHeight;
//       const progress = (scrollTop / windowHeight) * 100;
//       setProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [id]);

//   return (
//     <div className="blog-full-content">
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       {blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           <h3>@{blog.author.name}</h3>
//           {blog.imageURL && (
//             <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: "600px",
//                   maxHeight: "400px",
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: "justify" }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: "25px" }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//           {blog.editedAt && ( // Show "Updated on" only if editedAt exists
//             <div>
//               <p>Updated on: {blog.editedAt.toDate().toLocaleString()}</p>
//             </div>
//           )}
//         </>
//       ) : (
//         <div><br /> <br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getDoc, doc ,deleteDoc} from "firebase/firestore";
// import { db } from "./firebase";
// import { getStorage,ref, getDownloadURL,deleteObject } from "firebase/storage";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, "myblog", id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     };
//     fetchBlog();

//     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = document.documentElement.clientHeight;
//       const scrollTop = document.documentElement.scrollTop;
//       const windowHeight = scrollHeight - clientHeight;
//       const progress = (scrollTop / windowHeight) * 100;
//       setProgress(progress);


//     };
//     const deleteblog = async (id, imageURL) => {
//       try {
//         if (imageURL) {
//           const storage = getStorage();
//           const imageRef = ref(storage, imageURL);
  
//           const imageExists = await getDownloadURL(imageRef)
//             .then(() => true)
//             .catch(() => false);
  
//           if (imageExists) {
//             await deleteObject(imageRef);
//           }
//         }
  
//         const blogdoc = doc(db, 'myblog', id);
//         await deleteDoc(blogdoc);
  
//         fetchBlog();
//       } catch (error) {
//         console.error('Error deleting blog:', error);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [id]);

//   return (
//     <div className="blog-full-content">
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       {blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           <button onClick={() => deleteblog(post.id, post.imageURL)}>
//                 &#128465;
//               </button>
         
//           <h3>@{blog.author.name}</h3>
//           {blog.imageURL && (
//             <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: "600px",
//                   maxHeight: "400px",
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: "justify" }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: "25px" }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//           {blog.editedAt && ( // Show "Updated on" only if editedAt exists
//             <div>
//               <p>Updated on: {blog.editedAt.toDate().toLocaleString()}</p>
//             </div>
//           )}
//         </>
//       ) : (
//         <div><br /> <br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getDoc, doc, deleteDoc } from "firebase/firestore";
// import { db, auth } from "./firebase";
// import { getStorage, ref, getDownloadURL, deleteObject } from "firebase/storage";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const blogDocRef = doc(db, "myblog", id);
//         const docSnap = await getDoc(blogDocRef);
//         if (docSnap.exists()) {
//           const blogData = { id: docSnap.id, ...docSnap.data() };
//           setBlog(blogData);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         setLoading(false);
//       }
//     };
//     fetchBlog();

//     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = document.documentElement.clientHeight;
//       const scrollTop = document.documentElement.scrollTop;
//       const windowHeight = scrollHeight - clientHeight;
//       const progress = (scrollTop / windowHeight) * 100;
//       setProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [id]);

//   const deleteBlog = async (id, imageURL) => {
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

//       const blogDoc = doc(db, 'myblog', id);
//       await deleteDoc(blogDoc);

//       setBlog(null);
//       window.location.replace("/blogwebsite"); 
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   };

//   return (
//     <div className="blog-full-content">
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       {loading ? (
//         <div><br /><br />Loading...</div>
//       ) : blog ? (
//         <>
//           <h2><br />{blog.title}</h2>
//           {blog.author && (
//             <h3>@{blog.author.name}</h3>
//           )}
//           <div className="buttons">
//             {blog.author && (
//               blog.author.id === auth.currentUser?.uid && (
//                 <>
//                   <button onClick={() => deleteBlog(blog.id, blog.imageURL)}>
//                     &#128465; Delete
//                   </button> &nbsp;&nbsp;&nbsp;
//                   <Link to={`/EditBlog/${blog.id}`}>
//                     <button>&#9998; Edit</button>
//                   </Link>
//                 </>
//               )
//             )}
//           </div>
//           {blog.imageURL && (
//             <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
//               <img
//                 src={blog.imageURL}
//                 alt="Blog"
//                 style={{
//                   maxWidth: "600px",
//                   maxHeight: "400px",
//                 }}
//               />
//             </div>
//           )}
//           <div style={{ textAlign: "justify" }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) =>
//                 paragraph ? (
//                   <div style={{ paddingTop: "25px" }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               )
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>
//           <div>
//             <br /> <br />
//             <p>Published on: {blog.createdAt?.toDate().toLocaleString()}</p>
//           </div>
//           {blog.editedAt && (
//             <div>
//               <p>Updated on: {blog.editedAt.toDate().toLocaleString()}</p>
//             </div>
//           )}
//         </>
//       ) : (
//         <div><br /><br />Blog not found.</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { getStorage, ref, getDownloadURL, deleteObject } from "firebase/storage";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDocRef = doc(db, "myblog", id);
        const docSnap = await getDoc(blogDocRef);
        if (docSnap.exists()) {
          const blogData = { id: docSnap.id, ...docSnap.data() };
          setBlog(blogData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };
    fetchBlog();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = scrollHeight - clientHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  const deleteBlog = async (id, imageURL) => {
    try {
      if (imageURL) {
        const storage = getStorage();
        const imageRef = ref(storage, imageURL);

        const imageExists = await getDownloadURL(imageRef)
          .then(() => true)
          .catch(() => false);

        if (imageExists) {
          await deleteObject(imageRef);
        }
      }

      const blogDoc = doc(db, 'myblog', id);
      await deleteDoc(blogDoc);

      setBlog(null);
      window.location.replace("/blogwebsite"); 
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="blog-full-content">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      {loading ? (
        <div><br /><br />Loading...</div>
      ) : blog ? (
        <>
          <h2><br />{blog.title}</h2>
          {blog.author && (
            <h3>@{blog.author.name}</h3>
          )}
          <div className="buttons">
            {blog.author && (
              blog.author.id === auth.currentUser?.uid && (
                <>
                  <button onClick={() => deleteBlog(blog.id, blog.imageURL)}>
                    &#128465; Delete
                  </button> &nbsp;&nbsp;&nbsp;
                  <Link to={`/EditBlog/${blog.id}`}>
                    <button>&#9998; Edit</button>
                  </Link>
                </>
              )
            )}
          </div>
          {blog.imageURL && (
            <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
              <img
                src={blog.imageURL}
                alt="Blog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "400px", // Set a max height to control image size
                }}
              />
            </div>
          )}
          <div style={{ textAlign: "justify" }}>
            {blog.paragraphs ? (
              blog.paragraphs.map((paragraph, index) =>
                paragraph ? (
                  <div style={{ paddingTop: "25px" }} key={index}>
                    <p>{paragraph}</p>
                  </div>
                ) : null
              )
            ) : (
              <p>{blog.content}</p>
            )}
          </div>
          <div>
            <br /> <br />
            <p>Published on: {blog.createdAt?.toDate().toLocaleString()}</p>
          </div>
          {blog.editedAt && (
            <div>
              <p>Updated on: {blog.editedAt.toDate().toLocaleString()}</p>
            </div>
          )}
        </>
      ) : (
        <div><br /><br />Blog not found.</div>
      )}
    </div>
  );
};

export default BlogDetails;
