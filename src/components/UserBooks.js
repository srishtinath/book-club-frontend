import React, { Component } from 'react';
import UserBook from './UserBooks'

class UserBooks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
       
        }
    }

    render() {
        console.log(this.props.users)
    return ( 
        <div>
            {/* {this.props.users[0] ? 
            <div>
            {this.props.users[0].books.map((book) => 
            <UserBook key={book.id} book={book} user={this.props.users}/>)}
            </div>
            : null} */}
        </div>
     );
    }
}
 
export default UserBooks;