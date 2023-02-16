function checkInit(localData, dataInit, key) {
    var result = localData.getObjectData(key);
    if ((result === null) || (result === undefined)) {
        localData.setObjectData(key, dataInit);
    }
    return result;
}
export { checkInit };
