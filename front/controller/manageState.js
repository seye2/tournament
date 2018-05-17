class ManageState {
	constructor() {

	}
	getRandom(length) {
		return Math.floor(Math.random()*length);
	}
	getRandomItems(state) {
		let tempStore=state.store.getContent();
		let length=tempStore.length;
		let newStore=state.newStore.getContent();
		let toDelete=[];
		let result=[];
		let rand=this.getRandom(length);
		let newStoreNames=[];

		if(state.newStore.getContent().length<1) {
			result.push(tempStore[rand]);
		} else {
			//선택했던 배열 이름 저장
			for(let i = 0; i < newStore.length; i++) {
				newStoreNames.push(newStore[i].name);
			}

			//선택했던 배열 이름을 사용하여 기존 데이터 중복 삭제
			toDelete = new Set(newStoreNames);
			tempStore = state.store.getContent().filter(obj => !toDelete.has(obj.name));

			//중복 데이터 삭제 후 배열 개수 계산, 저장
			length=tempStore.length;

			rand = this.getRandom(length);
			result.push(tempStore[rand]);

		}

		//중복 제거
		tempStore = tempStore.filter((obj) => obj.name!==result[0].name);
		rand = this.getRandom(tempStore.length);

		result.push(tempStore[rand]);
		result = Object.assign(result, {paging: state.paging.getPaging()});

		return result;

	}
}

module.exports={
	ManageState
}
