import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

const userPosts = (posts) => {
  return (
    <div style={{ display: "flex", marginTop: "40px", alignItems: "left" }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "200px" }}>
          <Typography variant="h5" gutterBottom>
            Title :
          </Typography>
          <Typography variant="body" gutterBottom>
            {posts.postData.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Body :
          </Typography>
          <Typography variant="body" gutterBottom>
            {posts.postData.body}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default userPosts;
