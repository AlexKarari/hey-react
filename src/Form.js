import React, { Component } from 'react'

// goal for this form:
// 1. to update the state of Form every time a field is changed in the form
// 2. when submitted, all that data will pass to the App state, which will then update the Table.
class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    // function that runs every time a change is made to an input
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    // calling the handleSubmit function in App.js
    submitForm = () => {
        this.props.handleSubmit(this.state) // pass the Form state through as the character parameter
        this.setState(this.initialState) // reset the state to the initial state, to clear the form after submit.
    }

    render() {
        const { name, job } = this.state;
        
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
                
            </form>
        );

    }
}

export default Form;