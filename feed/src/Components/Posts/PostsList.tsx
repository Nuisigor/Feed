import { useEffect, useState } from "react";
import { post } from "../../data/@types/Post";
import ModalImage from "react-modal-image";
import "./PostList.css";
import { Paper } from "@mui/material";

interface Posts {
  posts: post[];
}

export default function PostList(props: Posts) {
  return (
    <>
      {props.posts.map((postData) => (
        <Paper elevation={6} variant="outlined" className="Post">
          <div class="Info">
            <div class="Infoimg">
              <img src="https://avatars.githubusercontent.com/u/50688059?v=4"></img>
            </div>
            <div class="Infodata">
              <p class="autor">{postData.autor}</p>
              <p class="date">{postData.date}</p>
            </div>
          </div>
          <p class="Data">{postData.data}</p>
          <div class="PostImage">
            {postData.image.map((image) => (
              <ModalImage
                className="Image"
                hideZoom={true}
                hideDownload={true}
                small={image}
                large={image}
              />
            ))}
          </div>
        </Paper>
      ))}
    </>
  );
}
