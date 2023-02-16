// Primary class for defining methods to interact with localStorage
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Storage from './Storage';
var LocalData = /** @class */ (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    LocalData.getInstance = function () {
        if (!this.instance) {
            this.instance = new LocalData();
        }
        return this.instance;
    };
    //
    // Methods for interacting with localStorage as single object
    //
    LocalData.prototype.getDataObjName = function () {
        return LocalData.dataObjName;
    };
    LocalData.prototype.getDataObj = function (dataObjName) {
        return this.getObj(dataObjName);
    };
    // Usage:
    // let checkedValue = this.localData.getObjectData(name);
    // NOTE:  Will return `null` if key is not found.
    LocalData.prototype.getObjectData = function (key) {
        var dataObj = this.getObj(LocalData.dataObjName) || {};
        var result;
        if (!this.isEmpty(dataObj)) {
            result = this.booleanString(dataObj[key]);
        }
        return result;
    };
    // Usage:
    // this.localData.setObjectData(e.target.name, e.target.value);
    LocalData.prototype.setObjectData = function (key, value) {
        var _a;
        // Helper.   Allow for boolean values to be passed around.
        // Only save the value as a string though...
        var dataObj = this.getObj(LocalData.dataObjName);
        var updatedDataObj = __assign(__assign({}, dataObj), (_a = {}, _a[key] = value, _a));
        this.setObj(LocalData.dataObjName, updatedDataObj);
    };
    // Usage:  		
    // this.localData.clearObjectData();
    LocalData.prototype.clearObjectData = function () {
        this.clearItem(LocalData.dataObjName);
    };
    // 
    // method for interacting with keys individually in localStorage
    //
    LocalData.prototype.getValue = function (key) {
        return this.get(key);
    };
    LocalData.prototype.setKey = function (key, value) {
        this.set(key, value);
    };
    // Local Helper Methods
    LocalData.prototype.isEmpty = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    LocalData.prototype.stringBoolean = function (val) {
        if ('boolean' === typeof val) {
            val = JSON.stringify(val);
        }
        return val;
    };
    LocalData.prototype.booleanString = function (val) {
        if ((val === "true") || (val === "false")) {
            val = (val === "true") ? true : false;
        }
        return val;
    };
    LocalData.dataObjName = "dataModel";
    return LocalData;
}(Storage));
export default LocalData;
