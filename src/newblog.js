import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { useHistory } from "react-router-dom"
import { db, auth } from "./firebase"

const NewBlog = () => {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const blogcollection = collection(db, 'myblog');
  let history = useHistory();

  const newblog = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      await addDoc(blogcollection, { title, content, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
      // Redirect to the home page after successfully adding the blog
      history.push('/');
    } catch (error) {
      console.error('Error adding new blog:', error);
    }
  }

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <div className="container"></div>
      <form onSubmit={newblog}>
        <div className="input">
          <label>Blog Title:</label>
          <input type="text" placeholder='Blog Title' value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
        <div className="input">
          <label>Blog Content:</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Enter Blog content' value={content} onChange={(e) => setcontent(e.target.value)}></textarea>
        </div>

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
}

export default NewBlog;
