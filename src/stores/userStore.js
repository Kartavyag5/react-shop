import {action, computed, makeObservable, observable, autorun, runInAction} from 'mobx';

class UserStore {

    userInfo={
        id:'',
        name:'',
        password:'',
        cart:[]
    }

    constructor(){
        makeObservable(this,{
            userInfo:observable,
            Itemcount:computed,
            updateCart:action,
        });
    }
    
    get Itemcount(){
        return this.userInfo.cart.length;
    }

    updateCart(cart){
        return this.userInfo.cart.push(cart);    

    }
}

export default UserStore;