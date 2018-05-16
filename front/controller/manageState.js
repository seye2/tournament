class ManageState {
	constructor() {

	}
	getRandom(length) {
		return Math.floor(Math.random()*length);
	}
	getRandomItems(data,newStore) {
		let length=data.length;
		let tempStore=data;
		let toDelete=[];
		let result=[];
		let rand=this.getRandom(length);
		let newStoreNames=[];
		//
		// newStore=[
		// 	{
		// 		id:2,
		// 		name:"여자친구",
		// 		use:false
		// 	}
		// ];

		if(newStore.length<1) {
			result.push(data[rand]);
		} else {
			//선택했던 배열 이름 저장
			for(let i = 0; i < newStore.length; i++) {
				newStoreNames.push(newStore[i].name);
			}

			//선택했던 배열 이름을 사용하여 기존 데이터 중복 삭제
			toDelete = new Set(newStoreNames);
			tempStore = data.filter(obj => !toDelete.has(obj.name));

			//중복 데이터 삭제 후 배열 개수 계산, 저장
			length=tempStore.length;
			result.push(tempStore[rand]);
		}

		for(;;) {
			rand=this.getRandom(length);
			if(result[0].name!==tempStore[rand].name) {
				result.push(tempStore[rand]);
				return result;
			}
		}

	}
}

module.exports={
	ManageState
}
