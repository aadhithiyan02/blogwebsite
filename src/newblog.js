

import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { useHistory } from "react-router-dom";
import { db, auth, storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const blogCollection = collection(db, 'myblog');
  const history = useHistory();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    try {
      if (!image) return; // No image selected
      const storageRef = ref(storage, `blog_images/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const newBlog = async (e) => {
    e.preventDefault();
    try {
      const imageURL = await uploadImage();
      const blogData = {
        title,
        content,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        },
        imageURL // Add the image URL to the blog data
      };

      await addDoc(blogCollection, blogData);
      history.push('/');
    } catch (error) {
      console.error('Error adding new blog:', error);
    }
  };

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <div className="container"></div>
      <form onSubmit={newBlog}>
        <div className="input">
          <label>Blog Title:</label>
          <input
            type="text"
            placeholder='Blog Title'
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
            placeholder='Enter Blog content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className='input'>
          <input type="file" onChange={handleImageChange} />
        </div>

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;

