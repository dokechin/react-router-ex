"use strict";
import UserAction from "./actions/UserAction.js"
import UserStore from "./stores/UserStore.js"
import {Context} from "material-flux"

export default class UserContext extends Context {
    constructor() {
        super();
        this.userAction = new UserAction(this);
        this.userStore = new UserStore(this);
    }
}

