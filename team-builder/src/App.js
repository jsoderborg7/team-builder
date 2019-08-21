import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
import data from './data';

function App() {
  const [teams, setTeams] = useState(data);
  const addNewTeam = team =>{
    setTeams([...teams, team]);
  };
  return(
    <div className='app'>
      <h1>My Team</h1>
      <Form addNewTeam={addNewTeam} />
      <TeamList teamList={teams} />
    </div>
  );
};

export default App;
