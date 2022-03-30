import React from "react";

const Form = (props) => {

    const doChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const submitForm = event => {
        event.preventDefault();
        props.submit();
    }
    return (
        <form onSubmit={submitForm}>
            <label> Name: 
            <input
                placeholder="Enter your name"
                type="text"
                value={props.member.name}
                name="name"
                onChange={doChange}
                />
            </label>
            <label> Email:
                    <input
                        placeholder="Enter your email"
                        type="text"
                        value={props.member.email}
                        name="email"
                        onChange={doChange}
                    />
            </label>
            <label> Role: 
                    <input
                        placeholder="Enter your role"
                        type="text"
                        value={props.member.role}
                        name="role"
                        onChange={doChange}
                    />
            </label>
            <input type="submit" value="Add to team!"/>
        </form>
    )
}

export default Form;