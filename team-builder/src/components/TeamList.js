import React from 'react';

const TeamList = props =>{
  console.log(props);
  return(
    <div className="team-list">
      {props.teamList.map(team =>{
        return(
          <div className="team" key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.email}</p>
            <p>{team.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TeamList;