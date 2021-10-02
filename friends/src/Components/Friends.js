import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Friends extends React.Component {
    state = {
        friends: [],
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(response => {
            console.log(response);
            this.setState({
                friends: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.friends.map((friend) => {
                        return(
                            <>
                                <h2>{friend.name}</h2>
                                <h3>{friend.age}</h3>
                                <h3>{friend.email}</h3>
                            </>
                        )
                    })
                    
                }
            </div>
        )
    }
}
export default Friends