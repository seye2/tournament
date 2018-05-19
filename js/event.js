const {TOURNAMENT_TOTAL_COUNT} = require("../model/const");
const {ManageState}= require("../controller/manageState");

class Event {
	constructor(props) {
		this.dc=document;
		this.manageState=new ManageState();
	}
	on(elSelector, eventName, selector, fn) {
		const element = document.querySelector(elSelector);

		element.addEventListener(eventName, function(event) {
			const possibleTargets = element.querySelectorAll(selector);
			const target = event.target;

			for (let i = 0, l = possibleTargets.length; i < l; i++) {
				let el = target;
				let p = possibleTargets[i];

				while(el && el !== element) {
					if (el === p) {
						setTimeout(() => {

							return fn.call(p, event);
						},200);
					}

					el = el.parentNode;
				}
			}
		});
	}

	btnNext(state,callback) {
		let name="";
		let result=[];

		this.on(".container","click",".next",(e)=> {

			name=this.dc.querySelector(".select-item input[name=choose]:checked").getAttribute("value");

			result=this.manageState.selectItems(state,name);

			state.newStore.addStore(result.newStore);
			state.historyStore.addStore(result.historyStore);

			if(state.paging.currentPaging<4) {
				alert("이상형을 다 선택하셨습니다.");

				callback("last");
				return;
			}


			callback("process");
		});
	}
	btnPrev(state,callback) {

		this.on(".container","click",".prev",(e)=> {

			if(state.paging.currentPaging===TOURNAMENT_TOTAL_COUNT) {
				alert("이상형 토너먼트를 다시 시작합니다.");

				callback("first");
				return;
			}

			callback("process");
			state.newStore.removeStore();
			state.historyStore.removeStore();
		});

		// this.on(".container","click",".prev",(e)=> {
		//
		// 	callback("process");
		//
		// 	state.newStore.removeStore();
		// 	state.historyStore.removeStore();
		//
		// 	if(state.paging.currentPaging===16) {
		//
		// 		return;
		// 	}
		// });
	}
}

module.exports={
	Event
}
