// // // import { useState } from "react";
// // // import { addDoc, collection } from "firebase/firestore";
// // // import { useHistory } from "react-router-dom";
// // // import { db, auth, storage } from "./firebase";
// // // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// // // const NewBlog = () => {
// // //   const [title, setTitle] = useState("");
// // //   const [content, setContent] = useState("");
// // //   const [image, setImage] = useState(null);
// // //   const blogCollection = collection(db, "myblog");
// // //   const history = useHistory();

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     setImage(file);
// // //   };

// // //   const uploadImage = async () => {
// // //     try {
// // //       if (!image) return null;
// // //       const storageRef = ref(storage, `blog_images/${image.name}`);
// // //       await uploadBytes(storageRef, image);
// // //       const downloadURL = await getDownloadURL(storageRef);
// // //       return downloadURL;
// // //     } catch (error) {
// // //       console.error("Error uploading image:", error);
// // //       return null;
// // //     }
// // //   };

// // //   const newBlog = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       let imageURL = null;

// // //       if (image) {
// // //         imageURL = await uploadImage();
// // //       }

// // //       const blogData = {
// // //         title,
// // //         content,
// // //         author: {
// // //           name: auth.currentUser.displayName,
// // //           id: auth.currentUser.uid,
// // //         },
// // //       };

// // //       if (imageURL) {
// // //         blogData.imageURL = imageURL;
// // //       }

// // //       await addDoc(blogCollection, blogData);

// // //       history.push("/blogwebsite");
// // //     } catch (error) {
// // //       console.error("Error adding new blog:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="create">
// // //       <h2>Add New Blog</h2>
// // //       <div className="container"></div>
// // //       <form onSubmit={newBlog}>
// // //         <div className="input">
// // //           <label>Blog Title:</label>
// // //           <input
// // //             type="text"
// // //             placeholder="Blog Title"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //           />
// // //         </div>
// // //         <div className="input">
// // //           <label>Blog Content:</label>
// // //           <textarea
// // //             name=""
// // //             id=""
// // //             cols="30"
// // //             rows="10"
// // //             placeholder="Enter Blog content"
// // //             value={content}
// // //             onChange={(e) => setContent(e.target.value)}
// // //           ></textarea>
// // //         </div>
// // //         <div className="input">
// // //           <input type="file" onChange={handleImageChange} />
// // //         </div>

// // //         <button type="submit">Submit Blog</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default NewBlog;


// // import { useState } from "react";
// // import { addDoc, collection } from "firebase/firestore";
// // import { useHistory } from "react-router-dom";
// // import { db, auth, storage } from "./firebase";
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// // const NewBlog = () => {
// //   const [title, setTitle] = useState("");
// //   const [content, setContent] = useState("");
// //   const [image, setImage] = useState(null);
// //   const blogCollection = collection(db, "myblog");
// //   const history = useHistory();

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setImage(file);
// //   };

// //   const uploadImage = async () => {
// //     try {
// //       if (!image) return null;
// //       const storageRef = ref(storage, `blog_images/${image.name}`);
// //       await uploadBytes(storageRef, image);
// //       const downloadURL = await getDownloadURL(storageRef);
// //       return downloadURL;
// //     } catch (error) {
// //       console.error("Error uploading image:", error);
// //       return null;
// //     }
// //   };

// //   const newBlog = async (e) => {
// //     e.preventDefault();
// //     try {
// //       let imageURL = null;

// //       if (image) {
// //         imageURL = await uploadImage();
// //       }

// //       // Split content into paragraphs
// //       const paragraphs = content.split("\n");
      
// //       const blogData = {
// //         title,
// //         paragraphs, // Save the paragraphs array instead of the entire content
// //         author: {
// //           name: auth.currentUser.displayName,
// //           id: auth.currentUser.uid,
// //         },
// //       };

// //       if (imageURL) {
// //         blogData.imageURL = imageURL;
// //       }

// //       await addDoc(blogCollection, blogData);

// //       history.push("/blogwebsite");
// //     } catch (error) {
// //       console.error("Error adding new blog:", error);
// //     }
// //   };

// //   return (
// //     <div className="create">
// //       <h2> <br />Add New Blog</h2>
// //       <form onSubmit={newBlog}>
// //         <div className="input">
// //           <label>Blog Title:</label>
// //           <input
// //             type="text"
// //             placeholder="Blog Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //           />
// //         </div>
// //         <div className="input">
// //           <label>Blog Content:</label>
// //           <textarea
// //             name=""
// //             id=""
// //             cols="30"
// //             rows="10"
// //             placeholder="Enter Blog content"
// //             value={content}
// //             onChange={(e) => setContent(e.target.value)}
// //           ></textarea>
// //         </div>
// //         <div className="input">
// //           <input type="file" onChange={handleImageChange} />
// //         </div>

// //         <button type="submit">Submit Blog</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default NewBlog;

// import { useState } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { useHistory } from "react-router-dom";
// import { db, auth, storage } from "./firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const NewBlog = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const blogCollection = collection(db, "myblog");
//   const history = useHistory();

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

//   const newBlog = async (e) => {
//     e.preventDefault();
//     try {
//       let imageURL = null;

//       if (image) {
//         imageURL = await uploadImage();
//       }

//       // Split content into paragraphs
//       const paragraphs = content.split("\n");
      
//       const blogData = {
//         title,
//         paragraphs, // Save the paragraphs array instead of the entire content
//         author: {
//           name: auth.currentUser.displayName,
//           id: auth.currentUser.uid,
//         },
//         timestamp: serverTimestamp(), // Add the timestamp field with serverTimestamp()
//       };

//       if (imageURL) {
//         blogData.imageURL = imageURL;
//       }

//       await addDoc(blogCollection, blogData);

//       history.push("/blogwebsite");
//     } catch (error) {
//       console.error("Error adding new blog:", error);
//     }
//   };

//   return (
//     <div className="create">
//       <h2> <br /> <br />Add New Blog</h2>
//       <form onSubmit={newBlog}>
//         <div className="input">
//           <label style={{'fontWeight':'bolder'}}>Blog Title:</label>
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <label style={{'fontWeight':'bolder'}}> Blog Content:</label>
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

//         <button type="submit">Submit Blog</button>
//       </form>
//     </div>
//   );
// };

// export default NewBlog;


import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { db, auth, storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const blogCollection = collection(db, "myblog");
  const history = useHistory();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    try {
      if (!image) return null;
      const storageRef = ref(storage, `blog_images/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const newBlog = async (e) => {
    e.preventDefault();
    try {
      let imageURL = null;

      if (image) {
        imageURL = await uploadImage();
      }

      // Split content into paragraphs
      const paragraphs = content.split("\n");
      
      const blogData = {
        title,
        paragraphs, // Save the paragraphs array instead of the entire content
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        createdAt: serverTimestamp(), // Add the createdAt field with serverTimestamp()
      };

      if (imageURL) {
        blogData.imageURL = imageURL;
      }

      await addDoc(blogCollection, blogData);

      history.push("/blogwebsite");
    } catch (error) {
      console.error("Error adding new blog:", error);
    }
  };

  return (
    <div className="create">
      <h2> <br /> <br />Add New Blog</h2>
      <form onSubmit={newBlog}>
        <div className="input">
          <label style={{'fontWeight':'bolder'}}>Blog Title:</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
          <label style={{'fontWeight':'bolder'}}> Blog Content:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Blog content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input">
          <input type="file" onChange={handleImageChange} />
        </div>

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
