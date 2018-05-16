const util= require("../js/utility");
const cVariable= require("../model/const");

/**
 * banner data, view template parsing
 * @param res banner data
 * @returns {string} es6 template + data
 */
const final=() => {
    str=util.html`
        <section id="section-tournament">
            <div class="main">
                
            </div>
        </section>
    `;
	return str.trim();
}

const tournaments=(data) => {
    let str='';

    //data가 없는 경우
    if(data.length<0) {
        str=util.html`

            <section id="section-tournament">
                empty
            </section>
        `;
    } else {

        str=util.html`
            <section id="section-tournament">
                <div class="">${cVariable.TOURNAMENT_TOTAL_COUNT}강</div>
                <button class="next">다음</button>
                
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
    }

    return str.trim();
}

module.exports={
	tournaments,
    final
}
