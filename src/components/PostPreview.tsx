import {
  ButtonBase,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { Post } from "../API";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
interface Props {
  post: Post;
}
export default function PostPreview({ post }: Props): ReactElement {
  return (
    <Paper elevation={3}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        wrap="nowrap"
        spacing={3}
        style={{ padding: 12, marginTop: 24 }}
      >
        {/* Upvote / votes / downvote */}
        <Grid item style={{ maxWidth: 128 }}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              {/* <IconButton color="inherit" onClick={() => addVote("upvote")}> */}
              <IconButton color="inherit">
                <ArrowUpwardIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" direction="column">
                <Grid item>
                  {/* <Typography variant="h6">{upvotes - downvotes}</Typography> */}
                </Grid>
                <Grid item>
                  <Typography variant="body2">votes</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <IconButton color="inherit" onClick={() => addVote("downvote")}> */}
              <IconButton color="inherit">
                <ArrowDownwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* <ButtonBase onClick={() => router.push(`/post/${post.id}`)}> */}
          <ButtonBase>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item>
                <Typography variant="body1">
                  {/* Posted by <b>{post.owner}</b>{" "} */}
                  {/* {formatDatePosted(post.createdAt)} hours ago */}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">{post.title}</Typography>
              </Grid>
              <Grid
                item
                style={{
                  maxHeight: 32,
                  overflowY: "hidden",
                  overflowX: "hidden",
                }}
              >
                <Typography variant="body1">{post.contents}</Typography>
              </Grid>
              {/* {post.image && postImage && (
                <Grid item>
                  <Image
                    src={postImage}
                    height={540}
                    width={980}
                    layout="intrinsic"
                  />
                </Grid>
              )} */}
            </Grid>
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>
  );
}
