require('babel-register');
const Controller = require("../controller/controller").default;
const Template = require("../template/tournament");
const event = require("./event").Event;
const {Store,NewStore,Paging,HistoryStore} = require("../model/store");
const {ManageState}= require("../controller/manageState");

const store=new Store();
const newStore=new NewStore();
const historyStore=new HistoryStore();
const manageState=new ManageState();
const paging=new Paging({totalCount:store.getContent().length*2});
const template=new Template();
let controller=new Controller('.container',template.getTournamentTemplate);

document.addEventListener("DOMContentLoaded", function() {

    let pageEvent=new event();

    const storeObject={
		store:store,
        newStore:newStore,
        paging:paging,
        historyStore:historyStore
    }

    Object.assign(storeObject,{items:manageState.getItems(storeObject)});

    controller.parseView(storeObject,null,null,null,() => {

        pageEvent.btnNext(storeObject,(check)=> {
            if(check==="last") {
				controller.parseView(storeObject,template.getFinalTemplate,null,null,null);
            } else {
				paging.forward();
				Object.assign(storeObject,{items:manageState.getItems(storeObject)});
				controller.parseView(storeObject,null,null,null,null);
            }

        });

		pageEvent.btnPrev(storeObject,(check)=> {
			if(check!=="first") {
				paging.backward();
				Object.assign(storeObject,{items:manageState.getItems(storeObject,"prev")});
				controller.parseView(storeObject,null,null,null,null);
			}

		});

    });
});
