const {TOURNAMENT_STEP}  = require("../model/const");

class ManageState {
	constructor() {
		this.genNums=[];
	}
	inArray(array, el) {
		for(let i = 0 ; i < array.length; i++)
			if(array[i] == el) return true;
		return false;
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
		let tempStore=state.store.getContent();
		let result=[];
		let tempRand=[];
		const count=0;
		let newArray=[];

		/*
		16강:history에 값이 없다면 store의 16개 데이터를 랜덤으로 조합하여 history에 저장, history를 출력, 선택된 데이터는 newstore에 저장
		8강: 16강에서 선택된 값 newstore에서 랜덤으로 8개를 추출하여 history에 저장, history를 출력, 선택된 데이터는 newstore에 저장
		 */

		//이전 버튼 클릭 시 마지막으로 저장된 내용으로 되돌리기
		if(action==="prev") {
			result=state.historyStore.getContent()[state.historyStore.getContent().length-1];
			Object.assign(result, {paging: state.paging.getPaging()})

		} else {

			if(state.newStore.getContent().length>0) {
				tempStore=[];
				newArray=[];
				tempRand=[];
				tempStore=state.newStore.getContent()[state.newStore.getContent().length-1];

				for(let i = 0; i < (tempStore.length/2); i++) {
					newArray=this.getRand(tempStore).concat(this.getRand(tempStore));
					tempRand.push(newArray);
				}

			} else {
				for(let i = 0; i < tempStore.length; i++) tempRand.push(this.getRand(tempStore));
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
		let temp = JSON.parse(JSON.stringify(state.items));

		for(var i = 0; i < names.length; i++) {
			for(var j = 0; j < temp.length; j++) {

				selectIndex=temp[j].findIndex(x => x.name === names[i]);

				if(selectIndex>-1) {

					temp[j][selectIndex]['stage']=state.paging.currentPaging;
					temp[j][selectIndex]['use']=true;

					nonSelectIndex=(selectIndex===0) ? 1 : 0;
					temp[j][nonSelectIndex]['stage'] = state.paging.currentPaging;
					temp[j][nonSelectIndex]['use'] = false;
				}
			}
		}

		Object.assign(temp,{stage:state.paging.currentPaging});
		result=temp.map(data=> data.filter((x)=> x.use===true));

		return [result, temp]

	}
}

module.exports={
	ManageState
}
