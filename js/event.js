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

			possibleTargets.forEach((possibleTarget,idx)=> {
				let el = target;

				while(el && el !== element) {
					if (el === possibleTarget) {
						setTimeout(() => {

							return fn.call(possibleTarget, event);
						},150);
					}

					el = el.parentNode;
				}
			})

		});
	}

	btnNext(state,callback) {
		let values=[];
		let names=[];
		let result=[];

		this.on(".container","click",".next",(e)=> {

			values=this.dc.querySelectorAll(".select-item input[type=radio]:checked");

			values.forEach((value)=> {
				names.push(value.getAttribute("value"));
			});

			result=this.manageState.selectItems(state,names);

			state.newStore.addStore(result[0]);
			state.historyStore.addStore(result[1]);

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
			if(state.paging.currentPaging===state.store.getContent().length*2) {
				alert("이상형 토너먼트를 다시 시작합니다.");

				callback("first");
				return;
			}

			callback("process");
			state.newStore.removeStore();
			state.historyStore.removeStore();
		});
	}
}

module.exports={
	Event
}
