const manageState= require("../controller/manageState").ManageState;
const {Store,NewStore} = require("../model/store");

class View {
    constructor() {
        this.el=arguments[0];
        this.template=arguments[1];
        this.manageState=new manageState();
    }

    /**
     * parsing template and data
     * @param model api date
     * @param changeTemplate view template
     * @param changeTarget insert tag target
     * @param flag insert html or image replace
     */
    observe(changeTemplate,changeTarget,flag) {
        let _el=(changeTarget) ?  changeTarget : this.el;
        let _template=(changeTemplate) ? changeTemplate : this.template;
        console.log(this.template);
		const store=new Store().getContent();
		const newStore=new NewStore().getContent();

        if(flag!=='replace') {
            const info=`
                ${_template(this.manageState.getRandomItems(store,newStore))}
            `;
            document.querySelector(`${_el}`).innerHTML=info;
        } else {

        }
    }
}

module.exports.default=View
