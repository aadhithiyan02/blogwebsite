import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDocRef = doc(db, 'myblog', id);
        const docSnap = await getDoc(blogDocRef);
        if (docSnap.exists()) {
          const blogData = { id: docSnap.id, ...docSnap.data() };
          setBlog(blogData);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <h3>Author: {blog.author.name}</h3>
          {blog.imageURL && <img src={blog.imageURL} alt="Blog" style={{ maxWidth: '400px', maxHeight: '300px' }}/>}
          <p>{blog.content}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    
  );
};

export default BlogDetails;
