import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
      editItem = () => {
        //your code here
      }
      deleteItem = () => {
        //your code here
      }
    render() {
      const item = this.props.item
        return (
            <div className = {this.props.item.completed ? "crossed" : null}>
              <input type="checkbox" name={item.name}/>
              <label for={item.name}>{item.name}</label>
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}

export default Item