const {TOURNAMENT_STEP} = require("./const");

class Store {
	constructor(props) {
		if (props) {
			this.store = props;
		} else {
			this.store=[
				{
					id:1,
					name:"트와이스",
					stage:0,
					use:false
				},
				{
					id:2,
					name:"여자친구",
					stage:0,
					use:false
				},
				{
					id:3,
					name:"손예진",
					stage:0,
					use:false
				},
				{
					id:4,
					name:"방탄소년단",
					stage:0,
					use:false
				},
				{
					id:5,
					name:"정우성",
					stage:0,
					use:false
				},

				{
					id:6,
					name:"레드벨벳",
					stage:0,
					use:false
				},
				{
					id:7,
					name:"오마이걸",
					stage:0,
					use:false
				},
				{
					id:8,
					name:"블랙핑크",
					stage:0,
					use:false
				},
				{
					id:9,
					name:"마마무",
					stage:0,
					use:false
				},
				{
					id:10,
					name:"에이핑크",
					stage:0,
					use:false
				},
				{
					id:11,
					name:"모모랜드",
					stage:0,
					use:false
				},
				{
					id:12,
					name:"신봉선",
					stage:0,
					use:false
				},
				{
					id:13,
					name:"김정은",
					stage:0,
					use:false
				},
				{
					id:14,
					name:"문재인",
					stage:0,
					use:false
				},
				{
					id:15,
					name:"홍준표",
					stage:0,
					use:false
				},
				{
					id:16,
					name:"남동훈",
					stage:0,
					use:false
				}
			];
		}
	}
	getContent() {
		return this.store;
	}
}


class NewStore {
	constructor(props) {
		if (props) {
			this.newStore = props;
		} else {
			this.newStore = [];
		}
	}
	addStore(data) {
		this.newStore.push(data);
	}
	removeStore() {
		this.newStore.pop();
	}
	reverseStore() {
		return this.newStore.reverse();
	}
	getContent() {
		return this.newStore;
	}
}

class HistoryStore {
	constructor(props) {
		if (props) {
			this.historyStore = props;
		} else {
			this.historyStore = [];
		}
	}
	addStore(data) {
		this.historyStore.push(data);
	}
	removeStore() {
		this.historyStore.pop();
	}
	reverseStore() {
		return this.historyStore.reverse();
	}
	getContent() {
		return this.historyStore;
	}
}


class Paging {
	constructor(props) {
		if(props) this.currentPaging=props;
	}
	getPaging() {
		return this.currentPaging;
	}
	forward() {
		if(this.currentPaging>0) this.currentPaging=this.currentPaging/TOURNAMENT_STEP;
	}
	backward() {

		if(this.currentPaging<16) this.currentPaging=this.currentPaging*TOURNAMENT_STEP;
	}
}


module.exports={
	Store,
	NewStore,
	HistoryStore,
	Paging
};
