// import React, { useState, useEffect } from "react";
// import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
// import { useHistory } from "react-router-dom";
// import { db, auth, storage } from "./firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const EditBlog = ({ blogId }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const blogCollection = collection(db, "myblog");
//   const history = useHistory();

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const blogDoc = doc(blogCollection, blogId);
//         const blogSnapshot = await getDoc(blogDoc);
//         const blogData = blogSnapshot.data();

//         if (blogData) {
//           setTitle(blogData.title);
//           setContent(blogData.content);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlogData();
//   }, [blogCollection, blogId]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const uploadImage = async () => {
//     try {
//       if (!image) return null;
//       const storageRef = ref(storage, `blog_images/${image.name}`);
//       await uploadBytes(storageRef, image);
//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       return null;
//     }
//   };

//   const editBlog = async (e) => {
//     e.preventDefault();
//     try {
//       let imageURL = null;

//       if (image) {
//         imageURL = await uploadImage();
//       }

//       const blogDoc = doc(blogCollection, blogId);

//       const updatedBlogData = {
//         title,
//         content,
//         author: {
//           name: auth.currentUser.displayName,
//           id: auth.currentUser.uid,
//         },
//       };

//       if (imageURL) {
//         updatedBlogData.imageURL = imageURL;
//       }

//       await updateDoc(blogDoc, updatedBlogData);

//       history.push("/blogpage");
//     } catch (error) {
//       console.error("Error updating blog:", error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="edit">
//       <h2>Edit Blog</h2>
//       <div className="container"></div>
//       <form onSubmit={editBlog}>
//         <div className="input">
//           <label>Blog Title:</label>
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <label>Blog Content:</label>
//           <textarea
//             name=""
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Enter Blog content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="input">
//           <input type="file" onChange={handleImageChange} />
//         </div>

//         <button type="submit">Update Blog</button>
//       </form>
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

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogRef = doc(db, "myblog", id);
        const blogSnapshot = await getDoc(blogRef);
        if (blogSnapshot.exists()) {
          const blogData = blogSnapshot.data();
          setTitle(blogData.title);
          setContent(blogData.content);
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

      // Update blog data with the new values from the form
      const updatedBlogData = {
        title,
        content,
        // You can add other fields here as needed
      };

      await updateDoc(blogRef, updatedBlogData);

      history.push("/blogpage");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="create">
      <h2>Edit Blog</h2>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="input">
            <label>Blog Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Blog Content:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Update Blog</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
