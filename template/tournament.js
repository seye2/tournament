const util= require("../js/utility");


/**
 * banner data, view template parsing
 * @param res banner data
 * @returns {string} es6 template + data
 */
const final=(data) => {
	let str="";

    str=util.html`
        <section id="section-tournament">
            <div class="final">
            	<div class="winner">우승 : ${data.newStore.getContent()[data.newStore.getContent().length-1][0].name}</div>
				<hr />
                ${
                    data.historyStore.getContent().reverse().map((list) => `
						<div class="item-wrap">
							<div class="stage">${list.stage}강</div>
							<div class="item stage${list.stage}">
							${
								list.map((d)=> 
									`<div class="box box${d.use ? "_active" : ""}">${d.name}</div>`
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
    str=util.html`
        <section id="section-tournament">
			<div class="tournament">
				<h2>${data.items.paging}강</h2>
				
				<div class="btn-wrap">
					<div class="button btn-prev"><button class="prev">이전</button></div>
					<div class="button btn-next"><button class="next">다음</button></div>
				</div>
				
				<fieldset>
					<div class="select-item first">
						<dl>
							<dt><label for="favorite1">${data.items[0].name}</label></dt>
							<dd><input id="favorite1" checked="checked" name="choose" type="radio" value="${data.items[0].name}" /></dd>
						</dl>
					</div>
					<div class="vs">vs</div>
					<div class="select-item last">
					
						<dl>
							<dt><label for="favorite2">${data.items[1].name}</label></dt>
							<dd><input id="favorite2" name="choose" type="radio" value="${data.items[1].name}" /></dd>
						</dl>
					</div>
				</fieldset>
            </div>
        </section>
    `

    return str.trim();
}

module.exports={
	tournaments,
    final
}
