import React, { Component } from "react";
import User from "./User";
import "./css/Users.css"
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
    this.deleteUser = this.deleteUser.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.restoreUsers = this.restoreUsers.bind(this);
  }


  componentDidMount() {
    // AJAX-запрос
    this.fetchUsers()
  }
  render() {
    return (
      <div>
          <button onClick={this.restoreUsers}>Restore users</button>
        <ul>
          {this.state.users.map((user, i) => (
            <li key={user.id} className="userCard">{<User deleteUser={()=>this.deleteUser(user.id)} defaultOpen={i === 0} {...user}/>}</li>
          ))}
        </ul>
      </div>
    );
  }

  fetchUsers(){
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => {
      this.setState({users: json})
      console.log(json);
    })
    .catch((err) => (console.log(err.message)));
  }

  deleteUser(id){
      this.setState(prevState =>({users: prevState.users.filter(el=> el.id !== id)}))
  }

  restoreUsers(){
    this.fetchUsers()
  }
}
