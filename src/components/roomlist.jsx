import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
class RoomList extends Component {
    constructor(props) {
    super(props);
    this.state = {
     items: []
    };
  }

  add_item(item){
    let rooms = this.state.items
    this.state.items = rooms.push(item);
  }

  render() {
    let rooms = this.state.items
      return (
      <div className="rooms">
       {rooms.map((item, index) => (
             item.name
            ))}
   
      </div>
    );
  }
}



export default RoomList;
