import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const CommentItem = ({ comment }: { comment: CommentsWithUser }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingLeft: "8px",
        borderLeft: "1px solid #ccc",
        ml: 4,
        borderRadius: 0,
        background: "transparent",
        color: "black",
        mb: 2,
        mt: 3,
      }}
    >
      <Box
        sx={{
          marginRight: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img
          src={comment.profiles.avatar_url}
          alt="User avatar_url"
          style={{ width: "3%", borderRadius: "50%" }}
        />
        <Typography variant="subtitle1">{comment.profiles.username}</Typography>
        <Typography variant="caption">
          {new Date(comment.created_at).toUTCString()}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, mt: 1 }}>
        <Typography>{comment.payload}</Typography>
      </Box>
    </Paper>
  );
};

export default CommentItem;
