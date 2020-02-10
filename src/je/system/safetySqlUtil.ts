/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/16 15:20
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/16 15:20
 * @Description sql构建器
 * */

export enum EXP_TYPE {
  in = "in",
  inSelect = "inSelect",
  notIn = "notIn",
  notInSelect = "notInSelect",
  notNull = "noNull",
  isNull = "isNull",
  between = "between",
  ne = "!=",
  gt = ">",
  ge = ">=",
  lt = "<",
  le = "<=",
  likeLeft = "%like",
  likeRight = "like%",
  like = "like",
  eq = "=",
  and = "and",
  or = "or"
}
export enum ORDER_TYPE {
  asc = "ASC",
  desc = "DESC"
}
export enum FORM_DATA_TYPE {
  select = "select",
  child = "child"
}

function validator(types, type) {
  // if (!types.hasOwnProperty(type)) {
  //   console.error(`type【${type}】不符合要求，请检查`);
  //   return;
  // }
  return true;
}

/**
 * 构建用户自定义sql
 * @param code
 * @param type
 * @param value
 * @param cn
 * @constructor
 */
function CustomSql({ code, type, value, cn = "and", _value }) {
  this.code = code;
  this.type = type;
  this.cn = cn;
  this.value = value;

  if (type === EXP_TYPE.between) {
    this._value = _value;
  }
}

/**
 * orderSql
 * @param type DESC ASC
 * @param code
 * @constructor
 */
function OrderSql({ type, code }) {
  this.type = type;
  this.code = code;
}

/**
 * 构建FormData
 * @param type 类型 child 或者 select
 * @param fieldId
 * @param mainFuncId
 * @param childFuncId
 * @param fields
 * @constructor
 */
function FormDataSql({ type, fieldId, mainFuncId, childFuncId, ...fields }) {
  this.__type = type;
  this.__fieldId = fieldId;
  this.__mainFuncId = mainFuncId;
  this.__childFuncId = childFuncId;
  Object.assign(this, fields);
}

/**
 * 构建select notInSelect对象
 * @param table
 * @param code
 * @param conditions
 * @constructor
 */
function ChildCustomSql({ table, code, conditions }) {
  this.talbe = table;
  this.code = code;
  this.conditions = conditions;
}

const safetySqlUtil = {
  EXP_TYPE,
  ORDER_TYPE,
  FORM_DATA_TYPE,
  /**
   * 构建sql的方法
   * @param{*} tree-左侧字典树(现有逻辑)
   * @param{*}   quick  -快速查询(现有逻辑)
   * @param{*}   group  -高级查询(现有逻辑)
   * @param{Array}   order  -字段排序(现有逻辑)
   * @param{*}   mark  -标记(现有逻辑)
   * @param{*}   column  -字段查询条件(现有逻辑)
   * @param{Array}   custom  -js中自定义条件
   * @param{Object}   formData  -子功能或查询选需要用到的字段值
   * @param{string}   strategyId  -查询策略ID
   * @param{Array}   strategy  -js脚本类型查询策略的执行结果
   * @param{*}   replace  -优先级规则
   * @param{number}   coverOrder   1：覆盖，0：不覆盖
   * @param{number}   coverWhere   1：覆盖，0：不覆盖
   */
  buildSqls({
    tree,
    quick,
    group,
    order,
    mark,
    column,
    custom,
    formData,
    strategyId,
    strategy,
    replace,
    coverOrder,
    coverWhere,
  } = {}) {
    return {
      j_query: JSON.stringify({
        custom,
        formData,
        strategyId,
        strategy,
        order,
      }),
    };
  },

  /**
   * 构建用户sql
   * @param code
   * @param type
   * @param cn
   * @param  { Array } value 在 type为[in/notIn]的时候 value为数组 [value1,value2]
   * @param  { Array }  value 在 type为[inSelect/notInSelect]的时候 value为 childCustomSql
   * @param  { Array }  value 在type其余时候 value均为字符串
   * @return {CustomSql}
   */
  buildCustomSql({ code, type, cn, value, _value }) {
    const params = {
      code,
      type,
      cn,
      value,
      _value,
    };
    if (type === EXP_TYPE.between && JE.isEmpty(params._value)) {
      console.error(`type为【${EXP_TYPE.between}】时候必须传_value属性`);
      return;
    }
    if ([EXP_TYPE.in, EXP_TYPE.notIn].includes(type) && !Array.isArray(value)) {
      console.error(
        `type为【${EXP_TYPE.in},${EXP_TYPE.notIn}】时value类型为数组`
      );
      return;
    }
    if (
      [EXP_TYPE.inSelect, EXP_TYPE.notInSelect].includes(type) &&
      !(value instanceof ChildCustomSql)
    ) {
      console.error(
        `type为【${EXP_TYPE.inSelect},${EXP_TYPE.notInSelect}】时value类型为ChildCustomSql`
      );
      return;
    }

    if (validator(EXP_TYPE, type)) {
      return new CustomSql(params);
    }
  },

  /**
   * 构建查询中包含查询条件的值
   */
  buildChildCustomSql({ table, code, conditions }) {
    if (!Array.isArray(conditions)) {
      console.error("conditions属性必须为Custom类型的数组");
    }
    return new ChildCustomSql(...arguments);
  },

  /**
   * 构建ordersql
   * @param type
   * @param code
   */
  buildOrderSql({ type, code }) {
    if (validator(ORDER_TYPE, type)) {
      return new OrderSql(...arguments);
    }
  },

  /**
   * 构建formData
   */
  buildFormData({ type, fieldId, mainFuncId, childFuncId, ...fields }) {
    if (validator(FORM_DATA_TYPE, type)) {
      return;
    }
    const params = {
      type,
      fieldId,
      ...fields,
    };
    // 查询策略 子功能时候需要带上主功能业务id跟子功能业务id
    if (type === FORM_DATA_TYPE.child) {
      params.mainFuncId = mainFuncId;
      params.childFuncId = childFuncId;
    }
    return new FormDataSql(params);
  },
};

export default safetySqlUtil;
