import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }
    @action editItem = (name, location) => {
        let item = this.list.find(i => i.name === name)
        item.location = location
    }
    @action deleteItem = (name) => {
        let delIndex = this.list.findIndex(i => i.name === name)
        this.list.splice(delIndex, 1)
    } 
}

