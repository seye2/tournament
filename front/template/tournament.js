const util= require("../js/utility");


/**
 * banner data, view template parsing
 * @param res banner data
 * @returns {string} es6 template + data
 */
const final=() => {
    str=util.html`
        <section id="section-tournament">
            <div class="final">
                final
            </div>
        </section>
    `;
	return str.trim();
}

const tournaments=(data) => {

    let str='';

    str=util.html`
        <section id="section-tournament">
            <div class="">${data.paging}강</div>
            <div><button class="prev">이전</button></div>
            <div><button class="next">다음</button></div>
            
            <fieldset>
                <div class="select-item first">
                    <dl>
                        <dt><label for="favorite1">${data[0].name}</label></dt>
                        <dd><input id="favorite1" checked="checked" name="choose" type="radio" value="${data[0].name}" /></dd>
                    </dl>
                </div>
                <div class="">vs</div>
                <div class="select-item last">
                
                    <dl>
                        <dt><label for="favorite2">${data[1].name}</label></dt>
                        <dd><input id="favorite2" name="choose" type="radio" value="${data[1].name}" /></dd>
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
