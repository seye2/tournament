const {TOURNAMENT_STEP}  = require("../model/const");

class ManageState {
	constructor() {
		this.genNums=[];
	}
	inArray(arrays, el) {
		let isArray=false;

		isArray=arrays.find((array)=> {
			return array==el;
		});

		return isArray;

	}
	getRand(array) {
		let rand = array[Math.floor(Math.random()*array.length)];
		if(!this.inArray(this.genNums, rand)) {
			this.genNums.push(rand);
			return rand;
		}
		return this.getRand(array);
	}

	getItems(state,action) {
		const count=0;

		let tempStores=state.store.getContent();
		let result=[];
		let tempRand=[];
		let newArray=[];

		//이전 버튼 클릭 시 마지막으로 저장된 내용으로 되돌리기
		if(action==="prev") {
			result=state.historyStore.getContent()[state.historyStore.getContent().length-1];
			Object.assign(result, {paging: state.paging.getPaging()})

		} else {

			if(state.newStore.getContent().length>0) {
				tempStores=[];
				newArray=[];
				tempRand=[];
				tempStores=state.newStore.getContent()[state.newStore.getContent().length-1];

				for(let i = 0; i < (tempStores.length/2); i++) {
					newArray=this.getRand(tempStores).concat(this.getRand(tempStores));
					tempRand.push(newArray);
				}

			} else {
				tempStores.map((tempStore)=> {
					tempRand.push(this.getRand(tempStores));
				})
			}

			result = Object.assign(tempRand, {paging: state.paging.getPaging()});
		}

		return result;

	}
	selectItems(state,names) {

		let selectIndex=0;
		let nonSelectIndex=0;
		let result=[];
		let items={};

		// deep copy
		let temps = JSON.parse(JSON.stringify(state.items));

		names.map((name)=> {
			temps.map((temp)=> {
				selectIndex=temp.findIndex(x => x.name === name);

				if(selectIndex>-1) {

					temp[selectIndex]['stage']=state.paging.currentPaging;
					temp[selectIndex]['use']=true;

					nonSelectIndex=(selectIndex===0) ? 1 : 0;
					temp[nonSelectIndex]['stage'] = state.paging.currentPaging;
					temp[nonSelectIndex]['use'] = false;
				}
			})
		});

		Object.assign(temps,{stage:state.paging.currentPaging});
		result=temps.map(temp=> temp.filter((x)=> x.use===true));

		return [result, temps]

	}
}

module.exports={
	ManageState
}
