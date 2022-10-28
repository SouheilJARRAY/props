import React from "react";


function Profile (props){
    const buttonSize={color:'red', textAlign:'center', fontSize:'20px', margin: '4px 2px',width:'10%'}
    return (
        <>
        <button onClick={() => props.handleName(props.fullName)} style={buttonSize}> who am I?</button>
        <br></br>
        <button onClick={() => props.handleName(props.bio)} style={buttonSize}> bio</button>
        <br></br>
        <button onClick={() => props.handleName(props.profession)} style={buttonSize}> profession</button>
        
        </>
    )
}
export default Profile