import React from "react";

function ProfilePic (props){
    const profilePicStyle ={ width: 100, height: 170 };
    return(
        <img src={props.children} style={profilePicStyle}/>
    )
}
export default ProfilePic