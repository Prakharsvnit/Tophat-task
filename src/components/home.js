import * as React from "react";
import UserComments from "./userCommnets";
import UserPosts from "./userPosts";
import { Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/home.module.css";

const Home = () => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState("");
  const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState({});

  useEffect(() => {
    const getUser = async (user) => {
      const userResp = await axios.get(baseURL + "/users");
      const postResp = await axios.get(baseURL + "/posts");
      const commentResp = await axios.get(baseURL + "/comments");
      const userData = userResp.data.find((obj) => obj.name === user);
      const user_id = userData.id;
      setPostData(postResp.data.find((obj) => obj.id === user_id));
      setCommentData(commentResp.data.find((obj) => obj.id === user_id));
    };
    getUser(user);
  }, [user]);

  return (
    <div className={styles.mainDiv}>
      <Typography variant="h5" gutterBottom>
        Enter Name
      </Typography>
      <TextField
        id="outlined-basic"
        label="User"
        variant="outlined"
        onChange={(e) => setUser(e.target.value)}
      />
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      {<UserPosts postData={postData} />}
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      {<UserComments commentData={commentData} />}
    </div>
  );
};

export default Home;
