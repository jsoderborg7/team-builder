import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
import data from './data';
import styled from 'styled-components';

function App() {
  const [teams, setTeams] = useState(data);
  const addNewTeam = team =>{
    setTeams([...teams, team]);
  };
  return(
    <StyledDiv>
      <div className='app'>
        <h1>My Team</h1>
        <Form addNewTeam={addNewTeam} />
        <h2>Current Team Members</h2>
        <div className="memberCards">
          <TeamList teamList={teams} />
        </div>
      </div>
    </StyledDiv>
  );
};
export default App;

const StyledDiv = styled.div `
  width: 100%;

  h1{
    text-align: center;
    text-decoration: underline;
  }
  h2{
    text-align: center;
    text-decoration: underline;
  }

  .team-list{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;