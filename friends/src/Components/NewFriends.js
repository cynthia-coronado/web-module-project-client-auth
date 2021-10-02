import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class NewFriend extends React.Component {
    state = {
        friend: {
            id: Date.now,
            name: '',
            age: '',
            email: '',
        }
    }
    handleChange = event => {
        this.setState ({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value,
            }
        })
    }
    addFriend = event => {
        event.preventDefault()
        axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return(
            <div>
                <form onSubmit = {this.addFriend}>
                    <label>Name</label>
                    <input 
                    type = 'text'
                    name = 'name'
                    onChange = {this.handleChange}
                    value = {this.state.friend.name}
                    />
                    <label>Age</label>
                    <input 
                    type = 'text'
                    name = 'age'
                    onChange = {this.handleChange}
                    value = {this.state.friend.age}
                    />
                    <label>Email</label>
                    <input 
                    type = 'text'
                    name = 'email'
                    onChange = {this.handleChange}
                    value = {this.state.friend.email}
                    />
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}
export default NewFriend