import {action, computed, makeObservable, observable, autorun, runInAction} from 'mobx';

class ItemStore {

    Item={
        id:'',
        name:'',
        price:'',
        description:''
    }
    itemList = []

    constructor(){
        makeObservable(this,{
            Item:observable,
            itemList:observable,
            ItemDetails:computed,
            updateItem:action,
        });
    }

    get ItemListCount(){
        return this.itemList.length
    }

    addItem(item){
        return this.itemList.push(item);    
    }
}

export default ItemStore;