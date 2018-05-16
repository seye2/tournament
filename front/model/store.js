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
					use:false
				},
				{
					id:3,
					name:"손예진",
					use:false
				},
				{
					id:4,
					name:"방탄소년단",
					use:false
				},
				{
					id:5,
					name:"정우성",
					use:false
				},

				{
					id:6,
					name:"레드벨벳",
					use:false
				},
				{
					id:7,
					name:"오마이걸",
					use:false
				},
				{
					id:8,
					name:"블랙핑크",
					use:false
				},
				{
					id:9,
					name:"마마무",
					use:false
				},
				{
					id:10,
					name:"에이핑크",
					use:false
				},
				{
					id:11,
					name:"모모랜드",
					use:false
				},
				{
					id:12,
					name:"신봉선",
					use:false
				},
				{
					id:13,
					name:"김정은",
					use:false
				},
				{
					id:14,
					name:"문재인",
					use:false
				},
				{
					id:15,
					name:"홍준표",
					use:false
				},
				{
					id:16,
					name:"남동훈",
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
		this.paging=0;
	}
}


module.exports={
	Store,
	NewStore,
	Paging
};
