require('babel-register');
const Controller = require("../controller/controller").default;
const template = require("../template/tournament");
const event = require("./event").Event;
const {Paging} = require("../model/store");

const paging=new Paging();
let controller=new Controller('body',template.tournaments);

document.addEventListener("DOMContentLoaded", function() {

    const pageEvent=new event();
    controller.parseView(null,null,null,() => {

        pageEvent.btnNext(()=> {
			controller.parseView(null,null,null,() => {});
        });


    });
});
