import listInterface from "../interface/IListCtrl";

export default class ListController implements listInterface {
    constructor() {
        
    }
    
    load(page: number, config: object) {
        const me = this;
        const params = (config && config.params) || {};
        // params.whereSql = this.getWhereSqls(params.whereSql || '');
        // this.store.loadPage(page, {
        //   params,
        //   callback: (data) => {
        //     me.data = me.store.data;
        //     config && config.callback && config.callback(data);
        //     this._action.load.call(this);
        //   },
        // });
    }
}
