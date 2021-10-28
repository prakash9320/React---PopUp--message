import React from 'react'

const AddUses = (props) => {
    return (
        <form>
            <label htmlFor="username">UserName</label>
            <input id="username" type ="text"/>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type ="number"/>
            <button type ="submit">Add User</button>
        </form>
    )
}

export default AddUses
