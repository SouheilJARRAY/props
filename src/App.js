import './App.css';
import Profile from './profile/Profile';
import souheil from './souheil.jpg'
import ProfilePic from './profile/ProfilePic'
import anonymous from './anonymous.jpg'

function App() {
  const handleName = profile => alert(profile);
  const profileStyle ={color:"blue", textAlign:"center"};
  const profilePerson ={fullName:"Souheil JARRAY", bio:"Java developer, 2 years of experience", profession:"engineer"};
  
  return (
    <>
      {profilePerson.fullName==="Souheil JARRAY" ?
      (<div>
        <h1 style={profileStyle}>Hello!</h1>
        <ProfilePic>{souheil}</ProfilePic>
        <br></br>
        <Profile {...profilePerson} handleName={handleName}/>
        </div>) : (
        <div>
          <h1 style={profileStyle}>Hello!</h1>
          <ProfilePic>{anonymous}</ProfilePic>
          <br></br>
          <Profile handleName={handleName}/>
        </div>)
      }
    </>
  );
}

export default App;
