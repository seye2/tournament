const util= require("../js/utility");


/**
 * banner data, view template parsing
 * @param res store data
 * @returns {string} es6 template + data
 */
const final=(data) => {
	let str="";

    str=util.html`
        <section id="section-tournament">
            <div class="final">
            	<div class="winner">우승 : ${data.newStore.getContent()[data.items.paging][0][0].name}</div>
				<hr />
                ${
                    data.historyStore.getContent().reverse().map((list) => `
						<div class="item-wrap">
							<div class="stage">${list.stage}강</div>
							<div class="item stage${list.stage}">
							${
								list.map((data)=>
									data.map((result)=>
									`<div class="box box${result.use ? "_active" : ""}">${result.name}</div>`
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

const tournaments=(data) => {
    let str="";
// console.log(data);
    str=util.html`
        <section id="section-tournament">
			<div class="tournament stage${data.items.paging}">
				<h2>${data.items.paging}강</h2>
				
				<div class="btn-wrap">
					<div class="button btn-prev"><button class="prev">이전</button></div>
					<div class="button btn-next"><button class="next">다음</button></div>
				</div>
				
				
                ${
					data.items.map((list, idx) => `
						<fieldset>
							<div class="select-item-wrap">
								<div class="select-item first">
									<dl>
										<dt><label for="favorite${idx}">${list[0].name}</label></dt>
										<dd><input id="favorite${idx}" checked="checked" name="choose${idx}" type="radio" value="${list[0].name}" /></dd>
									</dl>
								</div>
								<div class="vs">vs</div>
								<div class="select-item last">
								
									<dl>
										<dt><label for="favorite${idx}">${list[1].name}</label></dt>
										<dd><input id="favorite${idx}" name="choose${idx}" type="radio" value="${list[1].name}" /></dd>
									</dl>
								</div>
							</div>
						</fieldset>
					`)
				}
            </div>
        </section>
    `

    return str.trim();
}

module.exports={
	tournaments,
    final
}
