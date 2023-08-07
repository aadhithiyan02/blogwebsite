


import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from './firebase';
import { Link } from 'react-router-dom';

const Home = () => {
  const [postlist, setPostlist] = useState([]);
  const [authInitialized, setAuthInitialized] = useState(false);

  const getPosts = async () => {
    try {
      const blogCollection = collection(db, 'myblog');
      const data = await getDocs(blogCollection);
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log('Fetched posts:', posts);

      setPostlist(posts);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Function to format Firestore timestamp to a readable date
  const formatDate = (timestamp) => {
    const date = timestamp?.toDate();
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authInitialized) {
      getPosts();
    }
  }, [authInitialized]);

  return (
    <div className="home">
      <br />
      <div className="blog-list">
        {postlist.map((post) => (
          <div className="blog-preview" key={post.id}>
            <Link to={`/blog/${post.id}`} className="card-link">
              <div className="card">
                <div className="card-header">
                  {post.imageURL && <img src={post.imageURL} alt={post.title} />}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  {post.author && (
                    <div>
                      <h3>@{post.author.name} &nbsp;
                      <small className="timestamp">
                      {formatDate(post.createdAt)}
                      </small>
                      
                      </h3>
                     
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
