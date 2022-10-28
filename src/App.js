import './App.css';
import Profile from './profile/Profile';
import souheil from './souheil.jpg'
import ProfilePic from './profile/ProfilePic'

function App() {
  const handleName = profile => alert(profile);
  const profileStyle ={color:"blue", textAlign:"center"};
  
  return (
    <div>
      <h1 style={profileStyle}>Hello!</h1>
      <ProfilePic>{souheil}</ProfilePic>
      <br></br>
      <Profile handleName={handleName}/>
    </div>
  );
}

export default App;
