require('babel-register');
const Controller = require("../controller/controller").default;
const template = require("../template/tournament");
const event = require("./event").Event;
const {Store,NewStore,Paging,HistoryStore} = require("../model/store");
const {ManageState}= require("../controller/manageState");

const store=new Store();
const newStore=new NewStore();
const historyStore=new HistoryStore();
const manageState=new ManageState();
const paging=new Paging(store.getContent().length);
let controller=new Controller('.container',template.tournaments);

document.addEventListener("DOMContentLoaded", function() {

    let pageEvent=new event();
    const storeObject={
		store:store,
        newStore:newStore,
        paging:paging,
        historyStore:historyStore
    }

    Object.assign(storeObject,{items:manageState.getRandomItems(storeObject)});

    controller.parseView(storeObject,null,null,null,() => {

        pageEvent.btnNext(storeObject,(check)=> {
            if(check==="last") {
				controller.parseView(storeObject,template.final,null,null,() => {
				});
            } else {
				paging.forward();
				Object.assign(storeObject,{items:manageState.getRandomItems(storeObject)});
				controller.parseView(storeObject,null,null,null,() => {
				});
            }

        });

		pageEvent.btnPrev(storeObject,(check)=> {
			if(check!=="first") {
				paging.backward();
				Object.assign(storeObject,{items:manageState.getRandomItems(storeObject)});
				controller.parseView(storeObject,null,null,null,() => {
				});
			}

		});

    });
});
