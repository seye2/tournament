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
						},100);
					}

					el = el.parentNode;
				}
			}
		});
	}
	btnNext(state,callback) {
		let name="";
		let result=[];

		this.on("body","click",".next",(e)=> {
			if(state.paging.currentPaging<4) {
				alert("이상형을 다 선택하셨습니다.");

				callback("last");
				return;
			}

			name=this.dc.querySelector(".select-item input[name=choose]:checked").getAttribute("value");
			result=state.store.getContent().filter(x => x.name === name)[0];
			result.stage=state.paging.currentPaging;
			state.newStore.addStore(result);

			callback("process");
		});
	}
	btnPrev(state,callback) {

		this.on("body","click",".prev",(e)=> {
			if(state.paging.currentPaging===16) {
				alert("이상형 토너먼트를 다시 시작합니다.");

				callback("first");
				return;
			}

			name=this.dc.querySelector(".select-item input[name=choose]:checked").getAttribute("value");
			result=state.store.getContent().filter(x => x.name === name)[0];
			result.stage=state.paging.currentPaging;
			state.newStore.removeStore(result);

			callback("process");
		});
	}
}

module.exports={
	Event
}
