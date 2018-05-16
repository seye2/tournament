require('babel-register');
const View = require("../view/view").default;

class Controller {
    constructor() {
        this.view=new View(arguments[0],arguments[1]);
    }

    /**
     * call model and view
     * @param type 'desktop' or 'mobile'
     * @param count banner count : maxmum value is 3
     * @param changeTemplate select template
     * @param changeTarget insert tag target
     * @param flag innerHTML or replace img src
     * @param callback invoke function after complete template parsing
     */
    parseView(changeTemplate,changeTarget,flag,callback) {
        let _self=this;

        try {
            //view, model 연결
            _self.view.observe(changeTemplate,changeTarget,flag);

            if(typeof callback === 'function') {

                callback();
            }
        }
        catch(e) { throw e }
    }
}

module.exports.default=Controller
