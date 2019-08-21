import React, {useState} from 'react';
import styled from 'styled-components';

const Form = props =>{
  const [team, setTeam] = useState({
    name: "",
    email: "",
    role: ""
  });
  const changeHandler = event =>{
    setTeam({...team, [event.target.name]: event.target.value });
  };
  const submitForm = event =>{
    event.preventDefault();
    const newTeam = {
      ...team, 
      ide: Date.now()
    };
    props.addNewTeam(newTeam);
    setTeam({ name: "", email: "", role: ""});
  };

  return(
    <form onSubmit = {submitForm}>
      <StyledDiv>
        <div>
          <div className="form">
            <div className="formComponent">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type name here"
                value={team.name}
                onChange={changeHandler}
              />
            </div>
            <div className="formComponent">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type email here"
                value={team.email}
                onChange={changeHandler}
              />
            </div>
            <div className="formComponent">
              <label htmlFor="role">Role</label>
              <select
                type="text"
                name="role"
                placeholder="Type role here"
                value={team.role}
                onChange={changeHandler}>
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Team Lead">Team Lead</option>
              </select>
            </div>
          </div>
        </div>
      <div className="button">
        <button type="submit">Add Team Member</button>
      </div>
    </StyledDiv>
  </form>

  );
};
export default Form;

const StyledDiv = styled.div `
  margin: auto;  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  .form{
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .formComponent{
    margin: 10% 0%;
    display: flex;
    justify-content: space-between;

    label{
      margin: 0 10%;
      border: 2px solid white;
      border-radius: 5px;
      background-color: #72d4e8;
      padding: 2%;
    }
    input{
      font-size: 1rem;
      border-radius: 5px;
    }
    select{
      width: 100%;
      font-size: 1rem;
      border-radius: 5px;
      text-align: center;
    }
  }

  .button{
    margin: 0 10%;

    button{
      border-radius: 10px;
      border: 2px solid white;
      padding: 3%;
      font-size: 1.5rem;
      background-color: #72d4e8;
    }
  }
`;

