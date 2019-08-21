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
              <input
                type="text"
                name="role"
                placeholder="Type role here"
                value={team.role}
                onChange={changeHandler}
              />
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
  align-items: center;
  font-size: 1.5rem;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding: 0 5%;

  .form{
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .formComponent{
    margin: 10% 0%;
    display: flex;
    justify-content: space-evenly;

    label{
      margin: 0 10%;
    }
    input{
      font-size: 1rem;
    }
  }

  .button{
    margin: 0 10%;

    button{
      border-radius: 10px;
      padding: 3%;
      font-size: 1.5rem;
      background-color: #72d4e8;
    }
  }
`;

