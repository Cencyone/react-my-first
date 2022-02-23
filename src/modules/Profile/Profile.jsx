import React from "react"
import classes from "./Profile.module.css"
import MyPosts from "./Posts/MyPosts"
const Profile = () => {
return <div className={classes.wrapper}>
        <div>
          <img src="https://funart.pro/uploads/posts/2021-03/1617102579_5-p-oboi-krasivii-vid-6.jpg"></img>
        </div>
      
      <div>Ava + Description</div>
      <MyPosts />
      </div>
    }
 export default Profile