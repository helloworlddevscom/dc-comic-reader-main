interface IcheckInit {
  getObjectData(key: string ):  boolean ;
  setObjectData(key: string, value: boolean | null): void;
}

  function checkInit(localData: IcheckInit, dataInit: boolean , key: string):  boolean {
    let result = localData.getObjectData(key);
    if ((result === null) || (result === undefined)) {
      localData.setObjectData(key, dataInit)
    }
    return result;
  }

  export { checkInit }