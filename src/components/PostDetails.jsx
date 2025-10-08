import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const navigator = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response error");
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          navigator("/not-found");
        } else {
          setPost(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  if (!post) {
    return (
      <div>
        {/* prettier-ignore */}
        <video src="public\Hailuo_Video_looped loading 5seconds video_432413505543970823.mp4" loop muted autoPlay style={{width:"200px", height:"200px"}}></video>
      </div>
    );
  }
  return (
    <>
      {
        <motion.span
          initial={{ color: "#d80d65ff" }}
          animate={{
            color: [
              "rgba(140, 255, 0, 1)",
              "rgba(0, 47, 255, 1)",
              "#d80d65ff",
              "#cad80dff",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <h1>{post.title}</h1>
        </motion.span>
      }
      {post.body}
    </>
  );
};

export default PostDetails;
