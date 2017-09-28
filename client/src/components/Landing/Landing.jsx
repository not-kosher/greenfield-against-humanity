import Login from './Login';
import Signup from './Signup';

const Landing = (props) => {
  return (
    <div>
      <div className='Logo'>Greenfield Against Humanity</div>
      <div className='landingContent'> 
        <div className='Title'>Welcome, Dregs of Humanity</div>
        <div>
          <Login login={props.login} />
          <Signup signup={props.signup} />
        </div>
      </div>
    </div>
  );
};

export default Landing;