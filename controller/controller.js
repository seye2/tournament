require('babel-register');
const View = require("../view/view").default;

class Controller {
    constructor() {
        this.view=new View(arguments[0],arguments[1]);
    }

    /**
     * call model and view
     * @param state store data
     * @param changeTemplate select template
     * @param changeTarget insert tag target
     * @param flag innerHTML or replace img src
     * @param callback invoke function after complete template parsing
     */
    parseView(state,changeTemplate,changeTarget,flag,callback) {

        try {
            //view, model 연결
            this.view.observe(state,changeTemplate,changeTarget,flag);

            if(typeof callback === 'function') {

                callback();
            }
        }
        catch(e) { throw e }
    }
}

module.exports.default=Controller
