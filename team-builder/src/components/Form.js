import React, {useState} from 'react';

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
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Type name here"
        value={team.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Type email here"
        value={team.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Name</label>
      <input
        type="text"
        name="role"
        placeholder="Type role here"
        value={team.role}
        onChange={changeHandler}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};
export default Form;