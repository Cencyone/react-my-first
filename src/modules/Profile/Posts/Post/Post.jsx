import React from "react"
import classes from "./Post.module.css"
const Post = (props) => {
  return <div className={classes.item}>
        <img src="https://lastfm.freetls.fastly.net/i/u/ar0/2927339877ec5a9031455d8b3d50cbe9"></img>
    {props.message}
    <br></br><span>{props.like} Like </span>
  </div>
}
 export default Post