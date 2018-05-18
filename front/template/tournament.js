const util= require("../js/utility");


/**
 * banner data, view template parsing
 * @param res banner data
 * @returns {string} es6 template + data
 */
const final=(data) => {
    str=util.html`
        <section id="section-tournament">
            <div class="final">
            	<div class="winner">${data.newStore.getContent()[data.newStore.getContent().length-1][0].name}</div>
                ${
                    data.historyStore.getContent().reverse().map((list) => `
						<div class="stage">${list.stage}</div>
                     	<div class="item-wrap ${list.stage}">
						${
                            list.map((d)=> 
                                `<div>${d.name}(${d.stage}-${d.use})</div>`
                            )
                        }
						</div>
                    `)

				}
            </div>
        </section>
    `;
	return str.trim();
}

const tournaments=(data) => {

    let str='';
    str=util.html`
        <section id="section-tournament">
            <div class="">${data.items.paging}강</div>
            <div><button class="prev">이전</button></div>
            <div><button class="next">다음</button></div>
            
            <fieldset>
                <div class="select-item first">
                    <dl>
                        <dt><label for="favorite1">${data.items[0].name}</label></dt>
                        <dd><input id="favorite1" checked="checked" name="choose" type="radio" value="${data.items[0].name}" /></dd>
                    </dl>
                </div>
                <div class="">vs</div>
                <div class="select-item last">
                
                    <dl>
                        <dt><label for="favorite2">${data.items[1].name}</label></dt>
                        <dd><input id="favorite2" name="choose" type="radio" value="${data.items[1].name}" /></dd>
                    </dl>
                </div>
            </fieldset>
        </section>
    `

    return str.trim();
}

module.exports={
	tournaments,
    final
}
