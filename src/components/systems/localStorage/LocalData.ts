  // Primary class for defining methods to interact with localStorage
  //

import Storage from './Storage';
export default class LocalData extends Storage {
  private static instance?: LocalData;

  private static dataObjName = "dataModel";

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new LocalData();
    }

    return this.instance;
  }
  //
  // Methods for interacting with localStorage as single object
  //
  public getDataObjName() {
    return LocalData.dataObjName;
  }
  
  public getDataObj(dataObjName: any) {
    return this.getObj(dataObjName);
  }

  // Usage:
  // let checkedValue = this.localData.getObjectData(name);
  // NOTE:  Will return `null` if key is not found.
  public getObjectData(key: string): boolean   {
    let dataObj = this.getObj(LocalData.dataObjName) || {};
    let result;
    if (!this.isEmpty(dataObj)) {
      result =  this.booleanString(dataObj[key]);
    }
    return result;
  }

  // Usage:
  // this.localData.setObjectData(e.target.name, e.target.value);
  public setObjectData(key: string, value:  boolean | null) {
    // Helper.   Allow for boolean values to be passed around.
    // Only save the value as a string though...
    let dataObj = this.getObj(LocalData.dataObjName);
    let updatedDataObj = { ...dataObj, [key] : value }
    this.setObj(LocalData.dataObjName, updatedDataObj )
  }

  // Usage:  		
  // this.localData.clearObjectData();
  public clearObjectData() {
    this.clearItem(LocalData.dataObjName);
  }

  // 
  // method for interacting with keys individually in localStorage
  //
  public getValue(key: string) {
    return this.get(key);
  }

  public setKey(key: string, value: string) {
    this.set(key, value);
  }

  // Local Helper Methods
  private isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  private stringBoolean(val: string | boolean): string {
    if ('boolean' === typeof val) {
      val = JSON.stringify(val);
    }
    return val; 
  }

  private booleanString(val: string | boolean): string | boolean {
    if ((val === "true") || (val === "false")) {
      val = (val === "true") ? true : false;
    }
    return val;
  }
}