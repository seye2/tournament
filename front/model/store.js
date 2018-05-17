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
					use:false
				},
				{
					id:2,
					name:"여자친구",
					state:0,
					use:false
				},
				{
					id:3,
					name:"손예진",
					state:0,
					use:false
				},
				{
					id:4,
					name:"방탄소년단",
					state:0,
					use:false
				},
				{
					id:5,
					name:"정우성",
					state:0,
					use:false
				},

				{
					id:6,
					name:"레드벨벳",
					state:0,
					use:false
				},
				{
					id:7,
					name:"오마이걸",
					state:0,
					use:false
				},
				{
					id:8,
					name:"블랙핑크",
					state:0,
					use:false
				},
				{
					id:9,
					name:"마마무",
					state:0,
					use:false
				},
				{
					id:10,
					name:"에이핑크",
					state:0,
					use:false
				},
				{
					id:11,
					name:"모모랜드",
					state:0,
					use:false
				},
				{
					id:12,
					name:"신봉선",
					state:0,
					use:false
				},
				{
					id:13,
					name:"김정은",
					state:0,
					use:false
				},
				{
					id:14,
					name:"문재인",
					state:0,
					use:false
				},
				{
					id:15,
					name:"홍준표",
					state:0,
					use:false
				},
				{
					id:16,
					name:"남동훈",
					state:0,
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
			this.store = props;
		} else {
			this.store = [];
		}
	}
	addStore(data) {
		this.store.push(data);
	}
	removeStore() {
		this.store.pop();
	}
	reverseStore() {
		return this.store.reverse();
	}
	getContent() {
		return this.store;
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
	Paging
};
