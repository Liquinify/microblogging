"use client";

import { supabase } from "@/lib/client";
import { Posts } from "@/models/Posts";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  data: Posts;
};

const PostForm: FC<Props> = ({ data }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const createPost: SubmitHandler<FieldValues> = async (formData) => {
    const { error } = await supabase.from("posts").upsert({
      post: formData.post,
      username: data.user.user_metadata.username,
      avatar: data.user.user_metadata.avatar,
    });
    if (!error) {
      reset();
    }
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(createPost)}>
        <TextField
          margin="normal"
          multiline
          label="What are you up to?"
          id="post"
          {...register("post", { required: true, maxLength: 100 })}
          sx={{ display: "flex", width: "50rem", margin: "auto", mt: 5 }}
          inputProps={{
            style: {
              height: "100px",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ ml: 157, mt: 2, backgroundColor: "blue", color: "white" }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default PostForm;
