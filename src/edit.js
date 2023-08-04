// import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "./firebase";

// const EditBlog = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [allParagraphs, setAllParagraphs] = useState("");

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const blogRef = doc(db, "myblog", id);
//         const blogSnapshot = await getDoc(blogRef);
//         if (blogSnapshot.exists()) {
//           const blogData = blogSnapshot.data();
//           setTitle(blogData.title);
//           setContent(blogData.content);

//           // Assuming paragraphs is an array of strings in the document
//           if (Array.isArray(blogData.paragraphs)) {
//             const allParagraphsText = blogData.paragraphs.join("\n\n"); // Adding double line breaks for paragraph indentation
//             setAllParagraphs(allParagraphsText);
//           }
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlogData();
//   }, [id]);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const blogRef = doc(db, "myblog", id);

//       // Assuming paragraphs are separated by double line breaks in the input field
//       const updatedParagraphs = allParagraphs.split("\n\n");

//       const updatedBlogData = {
//         title,
//         content: allParagraphs.trim() !== '' ? allParagraphs : content, // Use allParagraphs if not empty, otherwise use content
//         paragraphs: updatedParagraphs,
//       };

//       await updateDoc(blogRef, updatedBlogData);

//       history.push("/blogwebsite");
//     } catch (error) {
//       console.error("Error updating blog:", error);
//     }
//   };

//   return (
//     <div className="create">
//       <h2><br />Edit Blog</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="content">Content:</label>
//             <textarea
//               name="content"
//               id="content"
//               cols="30"
//               rows="10"
//               placeholder="Enter Blog content"
//               value={allParagraphs}
//               onChange={(e) => setAllParagraphs(e.target.value)}
//             />
//           </div>
//           <button type="submit">Update Blog</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default EditBlog;






// import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "./firebase";

// const EditBlog = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [allParagraphs, setAllParagraphs] = useState("");

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const blogRef = doc(db, "myblog", id);
//         const blogSnapshot = await getDoc(blogRef);
//         if (blogSnapshot.exists()) {
//           const blogData = blogSnapshot.data();
//           setTitle(blogData.title);
//           setContent(blogData.content);

//           // Assuming paragraphs is an array of strings in the document
//           if (Array.isArray(blogData.paragraphs)) {
//             const allParagraphsText = blogData.paragraphs.join("\n\n"); // Adding double line breaks for paragraph indentation
//             setAllParagraphs(allParagraphsText);
//           }
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlogData();
//   }, [id]);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const blogRef = doc(db, "myblog", id);

//       // Assuming paragraphs are separated by double line breaks in the input field
//       const updatedParagraphs = allParagraphs.split("\n\n");

//       const updatedBlogData = {
//         title,
//         content: allParagraphs.trim() !== '' ? allParagraphs : content, // Use allParagraphs if not empty, otherwise use content
//         paragraphs: updatedParagraphs,
//         editedAt: serverTimestamp(), // Add the editedAt field with serverTimestamp()
//       };

//       await updateDoc(blogRef, updatedBlogData);

//       history.push("/blogwebsite");
//     } catch (error) {
//       console.error("Error updating blog:", error);
//     }
//   };

//   return (
//     <div className="create">
//       <h2><br />Edit Blog</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="content">Content:</label>
//             <textarea
//               name="content"
//               id="content"
//               cols="30"
//               rows="10"
//               placeholder="Enter Blog content"
//               value={allParagraphs}
//               onChange={(e) => setAllParagraphs(e.target.value)}
//             />
//           </div>
//           <button type="submit">Update Blog</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default EditBlog;


import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const EditBlog = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [allParagraphs, setAllParagraphs] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogRef = doc(db, "myblog", id);
        const blogSnapshot = await getDoc(blogRef);
        if (blogSnapshot.exists()) {
          const blogData = blogSnapshot.data();
          setTitle(blogData.title);
          setContent(blogData.content);

          // Assuming paragraphs is an array of strings in the document
          if (Array.isArray(blogData.paragraphs)) {
            const allParagraphsText = blogData.paragraphs.join("\n\n"); // Adding double line breaks for paragraph indentation
            setAllParagraphs(allParagraphsText);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogRef = doc(db, "myblog", id);

      // Assuming paragraphs are separated by double line breaks in the input field
      const updatedParagraphs = allParagraphs.split("\n\n");

      const updatedBlogData = {
        title,
        content: allParagraphs.trim() !== '' ? allParagraphs : content, // Use allParagraphs if not empty, otherwise use content
        paragraphs: updatedParagraphs,
        editedAt: new Date(), // Set editedAt to the current timestamp
      };

      await updateDoc(blogRef, updatedBlogData);

      history.push("/blogwebsite");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="create">
      <h2><br /> <br />Edit Blog</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title"style={{'fontWeight':'bolder'}}>Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content" style={{'fontWeight':'bolder'}}>Content:</label>
            <textarea style={{'fontWeight':'bolder'}}
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="Enter Blog content"
              value={allParagraphs}
              onChange={(e) => setAllParagraphs(e.target.value)}
            />
          </div>
          <button type="submit">Update Blog</button>
        </form>
      )}
    </div>
  );
};

export default EditBlog;
