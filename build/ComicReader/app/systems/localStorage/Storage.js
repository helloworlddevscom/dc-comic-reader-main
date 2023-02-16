// Base Class to extend LocalStorage functionality
// Only interface items allowed are native localstorage options
//
// This class is ment to be extened
var Storage = /** @class */ (function () {
    function Storage(getStorage) {
        if (getStorage === void 0) { getStorage = function () { return window.localStorage; }; }
        this.storage = getStorage();
    }
    Storage.prototype.get = function (key) {
        return this.storage.getItem(key);
    };
    Storage.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    Storage.prototype.clearItem = function (key) {
        this.storage.removeItem(key);
    };
    Storage.prototype.clearItems = function (obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) { return _this.clearItem(key); });
    };
    Storage.prototype.getObj = function (key) {
        var value = this.storage.getItem(key);
        return JSON.parse(value);
    };
    Storage.prototype.setObj = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    return Storage;
}());
export default Storage;
