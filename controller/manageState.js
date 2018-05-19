class ManageState {
	constructor() {

	}
	getRandom(length) {
		return Math.floor(Math.random()*length);
	}
	getRandomItems(state,action) {
		let tempStore=state.store.getContent();
		let length=tempStore.length;
		let newStore=state.newStore.getContent();
		let historyStore=state.historyStore.getContent();
		let toDelete=[];
		let result=[];
		let rand=this.getRandom(length);
		let newStoreNames=[];

		if(state.newStore.getContent().length<1) {
			result.push(tempStore[rand]);
		} else {
			result.push(newStore[newStore.length-1][0]);

		}

		//중복 제거
		historyStore.map((list)=> {
			list.map((data)=> {

				newStoreNames.push(data.name);
			})
		});

		//선택했던 배열 이름을 사용하여 기존 데이터 중복 삭제
		toDelete = new Set(newStoreNames);
		tempStore = tempStore.filter(obj => !toDelete.has(obj.name));

		tempStore = tempStore.filter((obj) => obj.name!==result[0].name);

		rand = this.getRandom(tempStore.length);
		result.push(tempStore[rand]);

		result = Object.assign(result, {paging: state.paging.getPaging(),newStore:state.newStore});

		//이전 버튼 클릭 시 마지막으로 저장된 내용으로 되돌리기
		if(action==="prev") {
			result = Object.assign(state.historyStore.getContent()[state.historyStore.getContent().length-1], {paging: state.paging.getPaging(),newStore:state.newStore});
		}

		return result;

	}
	selectItems(state,name) {

		let selectIndex=0;
		let nonSelectIndex=0;
		let result=[];

		// deep copy
		let items = Array.prototype.slice.call(state.items);

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
}

module.exports={
	ManageState
}
