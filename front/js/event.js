const {Store,NewStore} = require("../model/store");

class Event {
	constructor(props) {
		this.dc=document;
		this.store=new Store().getContent();
		this.newStore=new NewStore();
	}
	btnNext(callback) {
		let name="";
		let result=[];
		this.dc.querySelector("#section-tournament .next").addEventListener("click",(e)=> {
			name=this.dc.querySelector(".select-item input[name=choose]:checked").getAttribute("value");
			result=this.store.filter(x => x.name === name)[0];
			this.newStore.addStore(result);

			callback();
		})
	}
	btnPrev() {

	}
}

module.exports={
	Event
}
