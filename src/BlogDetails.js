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
// //           <h2>{blog.title}</h2>
// //           <h3>Author: {blog.author.name}</h3>
// //           {blog.imageURL && <img src={blog.imageURL} alt="Blog"   style={{ maxWidth: '400px', maxHeight: '300px' }}
// //  />}
// //           <p>{blog.content}</p>
// //         </>
// //       ) : (
// //         <div>Loading...</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetails;

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
// //           <h2>{blog.title}</h2>
// //           <h3>Author: {blog.author.name}</h3>
// //           {blog.imageURL && (
// //             <img
// //               src={blog.imageURL}
// //               alt="Blog"
// //               style={{ maxWidth: '400px', maxHeight: '300px' }}
// //             />
// //           )}
// //           {blog.paragraphs.map((paragraph, index) => (
// //             <p key={index}>{paragraph} <br /><br /></p>
// //           ))}
// //         </>
// //       ) : (
// //         <div>Loading...</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetails;

// import { useEffect, useState } from 'react';
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
//           <h2  ><br />{blog.title}</h2>
//           <h3 >@{blog.author.name}</h3>
//           {blog.imageURL && (
//         <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>

//         <img
//           src={blog.imageURL}
//           alt="Blog"
//           style={{ maxWidth: '600px', maxHeight: '400px' }}

//         />

//       </div>
//           )}
//           <div style={{ textAlign: 'justify' }}>
//             {blog.paragraphs ? (
//               blog.paragraphs.map((paragraph, index) => (
//                 paragraph ? (
//                   <div style={{ paddingTop: '25px' }} key={index}>
//                     <p>{paragraph}</p>
//                   </div>
//                 ) : null
//               ))
//             ) : (
//               <p>{blog.content}</p>
//             )}
//           </div>

//         </>
//       ) : (
//         <div><br />Loading...</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
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
      } catch (error) {
        console.error("Error fetching blog:", error);
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

  return (
    <div className="blog-full-content">
      <div className="progress-line" style={{ width: `${progress}%` }}></div>
      {blog ? (
        <>
          <h2>
            <br />
            {blog.title}
          </h2>
          <h3>@{blog.author.name}</h3>
          {blog.imageURL && (
            <div
              style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <img
                src={blog.imageURL}
                alt="Blog"
                style={{ maxWidth: "600px", maxHeight: "400px" }}
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
        </>
      ) : (
        <div>
          <br />
          Loading...
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
