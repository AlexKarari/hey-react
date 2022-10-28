import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

// Introducing State
class App extends Component {
    //Objct 'state' contains everything we want stored in the state
    state = {
        characters: []
    }
    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            // testing an index vs. all the indices in the array
            // returning all but the one that is passed through.
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    // Submit data
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                 <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                 <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    } 
}

export default App