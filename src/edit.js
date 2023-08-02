
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

      const updatedBlogData = {
        title,
        content,
      };

      await updateDoc(blogRef, updatedBlogData);

      history.push("/blogwebsite");
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
