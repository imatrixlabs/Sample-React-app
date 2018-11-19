import React, { Component } from 'react';
import RoomList from './roomlist';
import add_item from './roomlist';
// import logo from './logo.svg';
import '../styles/App.css';
class RoomForm extends Component {
   constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      allrooms: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.createRoom(this.state.name);
    this.setState({ name: ""});
  }
  createRoom(name){
   this.state.allrooms.push({name: name});
   RoomList.add_item({name: name})
  }
  render() {
      let  name  = this.state.name;
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={name} onChange={this.changeName} />
          <input type="submit" />
        </form>
      );
    }
}
export default RoomForm;

