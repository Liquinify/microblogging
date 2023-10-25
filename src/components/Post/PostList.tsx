"use client";

import React, { FC } from "react";
import PostItem from "./PostItem";
import { Posts } from "@/models/Posts";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getPosts } from "@/api/getPosts";

type Props = {
  data: Posts;
};

const PostList: FC<Props> = ({ userData }) => {
  const { data: postData, isError } = useQuery("posts", getPosts);

  return (
    <Box sx={{ mt: 10 }}>
      {postData?.map((post: Posts) => (
        <PostItem post={post} key={post.id} userData={userData} />
      ))}
      {isError && <p>Failed to fetch posts...</p>}
    </Box>
  );
};

export default PostList;
