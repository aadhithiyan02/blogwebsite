import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const fetchComments = async () => {
    try {
      const commentsQuery = query(
        collection(db, "comments"),
        where("blogId", "==", id),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(commentsQuery);
      const commentsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setComments(commentsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchBlog = async () => {
    try {
      const blogDocRef = doc(db, "myblog", id);
      const docSnap = await getDoc(blogDocRef);
      if (docSnap.exists()) {
        const blogData = { id: docSnap.id, ...docSnap.data() };
        setBlog(blogData);
        fetchComments(); // Call fetchComments here to get comments after fetching the blog
      } else {
        setLoading(false); // If blog not found, set loading to false
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
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
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (!auth.currentUser) {
      // Redirect user to login page or show a message to log in.
      return;
    }

    if (!comment.trim()) {
      // Handle empty comments
      return;
    }

    try {
      const commentsCollectionRef = collection(db, "comments");
      const commentData = {
        blogId: id,
        content: comment,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        createdAt: serverTimestamp(),
      };

      await addDoc(commentsCollectionRef, commentData);
      setComment(""); // Clear the comment input after adding a comment.
      updateBlogUpdatedAt(); // Update the "Last Updated On" timestamp
      fetchComments(); // Fetch comments again to include the newly added comment
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteBlog = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this blog?")) {
        const blogDocRef = doc(db, "myblog", id);
        await deleteDoc(blogDocRef);
        // Redirect to home after successful deletion
        window.location.replace("/blogwebsite");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEditBlog = async () => {
    // Redirect to the edit page
    window.location.replace(`/editblog/${id}`);
  };

  const updateBlogUpdatedAt = async () => {
    try {
      const blogDocRef = doc(db, "myblog", id);
      await updateDoc(blogDocRef, {
        editedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating blog editedAt:", error);
    }
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    setComments((prevComments) =>
      prevComments.map((c) => {
        if (c.id === commentId) {
          return { ...c, editing: true, updatedContent: commentToEdit.content };
        }
        return c;
      })
    );
  };

  const handleSaveComment = async (commentId) => {
    try {
      const commentToEdit = comments.find(
        (comment) => comment.id === commentId
      );
      await updateDoc(doc(db, "comments", commentId), {
        content: commentToEdit.updatedContent,
      });
      setComments((prevComments) =>
        prevComments.map((c) => {
          if (c.id === commentId) {
            return { ...c, editing: false };
          }
          return c;
        })
      );
      fetchComments(); // Fetch comments again to update the comment list
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(db, "comments", commentId));
      fetchComments(); // Fetch comments again to update the comment list
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const fetchLikes = async () => {
    try {
      const likeRef = doc(db, "likes", id);
      const likeSnap = await getDoc(likeRef);
      if (likeSnap.exists()) {
        const likeData = likeSnap.data();
        setLikeCount(likeData.likes.length);
        if (auth.currentUser && likeData.likes.includes(auth.currentUser.uid)) {
          setLiked(true);
        }
      }
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchComments();
    fetchLikes();
  }, [id]);

  const handleLike = async () => {
    if (!auth.currentUser) {
      return;
    }

    try {
      const likeRef = doc(db, "likes", id);
      const likeSnap = await getDoc(likeRef);

      if (likeSnap.exists()) {
        const likeData = likeSnap.data();
        const updatedLikes = likeData.likes.includes(auth.currentUser.uid)
          ? likeData.likes.filter((uid) => uid !== auth.currentUser.uid)
          : [...likeData.likes, auth.currentUser.uid];

        await updateDoc(likeRef, { likes: updatedLikes });
        setLiked(!liked);
        setLikeCount(updatedLikes.length);
      } else {
        const newLikeData = { likes: [auth.currentUser.uid] };
        await setDoc(likeRef, newLikeData);
        setLiked(true);
        setLikeCount(1);
      }
    } catch (error) {
      console.error("Error adding/removing like:", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = timestamp?.toDate();
    if (!date) return "";

    return date.toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="blog-full-content">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          {blog && (
            <div className="blog-details">
               <h2><br />{blog.title}</h2>
              {blog.imageURL && (
                <img
                  src={blog.imageURL}
                  alt={blog.title}
                  style={{
                    maxWidth: "600px",
                    width: "100%",
                    height: "auto",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              )}
             
              {blog.author && (
                <div>
                  <h3>
                   @{blog.author.name}
                  </h3>
                  <small className="timestamp">
                    Published on: {formatDate(blog.createdAt)}
                  </small>
                  <br />
                  {blog.editedAt && (
                    <small className="timestamp">
                      Last Updated on: {formatDate(blog.editedAt)}
                    </small>
                  )}
                </div>
              )}
              <div className="like-section">
                <button
                  onClick={handleLike}
                  className={`like-button ${liked ? "liked" : ""}`}
                >
                  {liked ? (
                    <FontAwesomeIcon icon={solidHeart} />
                  ) : (
                    <FontAwesomeIcon icon={regularHeart} />
                  )}
                  <span className="like-count">{likeCount}</span>
                </button>
              </div>
              {auth.currentUser && (
                <div className="edit-delete-buttons">
                  <button onClick={handleEditBlog} className="action-button">
                    Edit
                  </button>
                  <button onClick={handleDeleteBlog} className="action-button">
                    Delete
                  </button>
                </div>
              )}
              <div className="blog-content">
                {blog.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
          )}

          <div className="comments-section">
            <h3>Comments:</h3>
            {auth.currentUser && (
              <div className="comment-input">
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="5"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment..."
                />
                <button onClick={handleAddComment} className="action-button">
                  Post
                </button>
              </div>
            )}

            <div className="comments-list">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`comment-card ${comment.editing ? "editing" : ""}`}
                >
                  {comment.editing ? (
                    <>
                      <textarea
                        value={comment.updatedContent}
                        onChange={(e) =>
                          setComments((prevComments) =>
                            prevComments.map((c) => {
                              if (c.id === comment.id) {
                                return { ...c, updatedContent: e.target.value };
                              }
                              return c;
                            })
                          )
                        }
                      />
                      <button
                        onClick={() => handleSaveComment(comment.id)}
                        className="action-button"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{comment.content}</p>
                      <div className="comment-details">
                        <small>
                          <span>{comment.author.name}</span>
                          <span>{formatDate(comment.createdAt)}</span>
                        </small>
                        {auth.currentUser &&
                          auth.currentUser.uid === comment.author.id && (
                            <div className="comment-buttons">
                              <button
                                onClick={() => handleEditComment(comment.id)}
                                className="action-button edit-button"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="action-button delete-button"
                              >
                                🗑️
                              </button>
                            </div>
                          )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
