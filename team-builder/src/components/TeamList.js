import React from 'react';
import styled from 'styled-components';

const TeamList = props =>{
  console.log(props);
  return(
    <StyledDiv>
    <div className="team-list">
      {props.teamList.map(team =>{
        return(
            <div className="team" key={team.id}>
              <h3>{team.name}</h3>
              <p>Email: {team.email}</p>
              <p>Role: {team.role}</p>
            </div>
        )
      })}
    </div>
    </StyledDiv>
  )
}
export default TeamList;

const StyledDiv = styled.div `
 margin: auto;
 padding: 1%;
 display: flex;
 justify-items: space-evenly;

 .team{
   border: 2px solid #72d4e8;
   border-radius: 10px;
   width: 35%; 
   margin: 5%;
   padding: 2%;
   text-align: center;


 }

 h3{
   text-align: center;
 }
`;