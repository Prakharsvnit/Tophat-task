import * as React from "react";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async (user) => {
      const userResp = await axios.get(baseURL + "/users");
      const postResp = await axios.get(baseURL + "/posts");
      const commentResp = await axios.get(baseURL + "/comments");
      const userData = userResp.data.find((obj) => obj.name === user);
      //   const user_id = userData.id;
      return userData.id;
      //   const postData = postResp.data.find((obj) => obj.id === user_id);
      //   const commentData = commentResp.data.find((obj) => obj.id === user_id);
    };
    getUser(user);
  }, [user]);

  return (
    <>
      <TextField id="outlined-basic" label="User" variant="outlined" />
      <TextField label="User" type="search" variant="filled" />
    </>
  );
};

export default Home;
