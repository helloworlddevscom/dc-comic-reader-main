interface IcheckInit {
    getObjectData(key: string): boolean;
    setObjectData(key: string, value: boolean | null): void;
}
declare function checkInit(localData: IcheckInit, dataInit: boolean, key: string): boolean;
export { checkInit };
