import '../css/App.css';
import UserCard from './UserCard';
import messImage from '../media/messi-1.jpg'

function App() {
  return (
    <div className='cards'>
      <UserCard style = {{"border-radius": "10px"}} name='Messi' desc='The G.O.A.T.' img = {messImage}/>
      <UserCard name='Messi bro' desc='The G.O.A.T. again' img = {messImage}/>
      <UserCard name='Messi Magic' desc='The G.O.A.T. always' img = {messImage}/>
    </div>
  );
}

export default App;
