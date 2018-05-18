
class Event {
	constructor(props) {
		this.dc=document;
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
	selectItems(state,name) {

		let selectIndex=0;
		let nonSelectIndex=0;
		let result=[];

		// shallow copy
		let items = JSON.parse(JSON.stringify(state.items));

		selectIndex=items.findIndex(x => x.name === name);
		items[selectIndex]['stage']=state.paging.currentPaging;
		items[selectIndex]['use']=true;


		nonSelectIndex=items.findIndex(x => x.name !== name);
		items[nonSelectIndex]['stage']=state.paging.currentPaging;
		items[nonSelectIndex]['use']=false;

		Object.assign(items,{stage:state.paging.currentPaging});

		result=items.filter(x => x.name === name);
		result['stage']=state.paging.currentPaging;
		result['use']=true;

		return {
			newStore:result,
			historyStore:items
		}

	}
	btnNext(state,callback) {
		let name="";
		let result=[];

		this.on(".container","click",".next",(e)=> {

			name=this.dc.querySelector(".select-item input[name=choose]:checked").getAttribute("value");

			result=this.selectItems(state,name);

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
			state.newStore.removeStore();
			state.historyStore.removeStore();

			if(state.paging.currentPaging===16) {
				alert("이상형 토너먼트를 다시 시작합니다.");

				callback("first");
				return;
			}

			callback("process");
		});
	}
}

module.exports={
	Event
}
