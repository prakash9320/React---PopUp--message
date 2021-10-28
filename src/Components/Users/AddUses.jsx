import React from 'react'
import Card from '../UI/Card';
import classes from './AddUser.Module.css';
import Button from '../UI/Button';
const AddUses = (props) => {
 const addUserHandler = (event) =>{
       event.preventDefault();

 }

    


    return (
       <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type ="text"/>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type ="number"/>
         <Button type = "onSubmit"> Add User</Button>
        </form>
       </Card>
    )
}

export default AddUses
