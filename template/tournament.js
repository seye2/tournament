const {Utility} = require("../js/utility");

const utility = new Utility();
/**
 * data, view template parsing
 * @param res store data
 * @returns {string} es6 template + data
 */

class Template {
	constructor(){}
	getFinalTemplate(data) {

		let str="";

		str=utility.getParseHTML`
			<section id="section-tournament">
				<div class="final">
					<div class="winner">우승 : ${data.newStore.getContent()[data.newStore.getContent().length-1][0][0].name}</div>
					<hr />
					${
				data.historyStore.getContent().reverse().map((list) => `
							<div class="item-wrap">
								<div class="stage">${list.stage}강</div>
								<div class="item stage${list.stage}">
								${
					list.map((data)=>
						data.map((result)=>
							`<div class="box box${result.use ? `_active active_${result.stage}` : ""}">${result.name}</div>`
						)
					)
					}
								</div>
							</div>
							<hr />
						`)
	
				}
				</div>
			</section>
		`;
		return str.trim();
	}
	getTournamentTemplate(data) {
		let str="";

		str=utility.getParseHTML`
			<section id="section-tournament">
				<div class="tournament stage${data.items.paging}">
					<h2>${data.items.paging}강</h2>
					
					<div class="btn-wrap">
						<div class="button btn-prev"><button class="prev">이전</button></div>
						<div class="button btn-next"><button class="next">다음</button></div>
					</div>
					
					
					${
				data.items.map((list, idx) => {
						let checked=[];
	
						if(!list[0].use&&!list[1].use) {
							checked=[
								true,false
							]
						} else if(list[0].use&&list[1].use) {
	
							checked=[
								true,false
							]
						} else {
	
							checked=[
								list[0].use,list[1].use
							]
						}
	
						checked[0]=checked[0]===true? "checked=checked" : "";
						checked[1]=checked[1]===true? "checked=checked" : "";
	
						return (`
								<fieldset>
									<div class="select-item-wrap">
										<div class="select-item first">
											<dl>
												<dt><label for="favorite${list[0].id}">${list[0].name}</label></dt>
												<dd><input id="favorite${list[0].id}" ${checked[0]} name="choose${idx}" type="radio" value="${list[0].name}" /></dd>
											</dl>
										</div>
										<div class="vs">vs</div>
										<div class="select-item last">
										
											<dl>
												<dt><label for="favorite${list[1].id}">${list[1].name}</label></dt>
												<dd><input id="favorite${list[1].id}" ${checked[1]} name="choose${idx}" type="radio" value="${list[1].name}" /></dd>
											</dl>
										</div>
									</div>
								</fieldset>
							`)
					}
				)
				}
				</div>
			</section>
		`;

		return str.trim();
	}
}


module.exports=Template;
