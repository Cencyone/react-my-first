import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = () => {
  return <div>My posts
    <div className={classes.newPost}>
      <textarea>New posts</textarea>
      <button>submit</button>
    </div>
    <div className={classes.items}>
      <Post message="Hey, how a you ?" like="18" /> 
      <Post message="it's a one of my firts post" like="20" /> 
      <Post message="Firs POST" like="15" /> 
    </div>
  </div>
}
 export default MyPosts