import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
    editItem = (e) => {
      let location = prompt("Please enter the new location")
      this.props.store.editItem(e.target.value, location)
    }
    deleteItem = (e) => {
      this.props.store.deleteItem(e.target.value)
    }
    render() {
      const item = this.props.item
        return (
            <div className = {item.completed ? "crossed" : null}>
              <input type="checkbox" name={item.name} onClick={this.checkItem} value={item.name}/>
              <label for={item.name}>{item.name} </label>
              <span>({item.location})</span>
              <button onClick={this.editItem} value={item.name}>Edit</button>
              <button onClick={this.deleteItem} value={item.name}>Delete</button>
            </div>)
    }
}

export default Item