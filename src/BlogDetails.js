import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const BlogDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const blogPostRef = doc(db, 'myblog', postId);
        const postDoc = await getDoc(blogPostRef);
        if (postDoc.exists()) {
          const postData = postDoc.data();
          setPost({ ...postData, id: postDoc.id });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog post data: ', error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [postId]);

  return (
    <div className="blog-details">
      {loading ? (
        <p>Loading the blog...</p>
      ) : post ? (
        <>
          <h2>Title: {post.title}</h2>
          <button>Delete Blog</button>

          <p>Author: {post.author.name}</p>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Blog not found!</p>
      )}
    </div>
  );
};

export default BlogDetails;
