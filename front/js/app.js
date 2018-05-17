require('babel-register');
const Controller = require("../controller/controller").default;
const template = require("../template/tournament");
const event = require("./event").Event;
const {Store,NewStore,Paging} = require("../model/store");

const store=new Store();
const newStore=new NewStore();
const paging=new Paging(store.getContent().length);
let controller=new Controller('body',template.tournaments);

document.addEventListener("DOMContentLoaded", function() {

    let pageEvent=new event();

    controller.parseView({store:store,newStore:newStore,paging:paging},null,null,null,() => {

        pageEvent.btnNext({store:store,newStore:newStore,paging:paging},(check)=> {
            if(check==="last") {
				controller.parseView({store:store,newStore:newStore,paging:paging},template.final,null,null,() => {
				});
            } else {
				paging.forward();
				controller.parseView({store:store,newStore:newStore,paging:paging},null,null,null,() => {
				});
            }

        });

		pageEvent.btnPrev({store:store,newStore:newStore,paging:paging},(check)=> {
			if(check!=="first") {
				paging.backward();
				controller.parseView({store:store,newStore:newStore,paging:paging},null,null,null,() => {
				});
			}

		});

    });
});
