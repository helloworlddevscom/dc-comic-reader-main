import Storage from './Storage';
export default class LocalData extends Storage {
    private static instance?;
    private static dataObjName;
    private constructor();
    static getInstance(): LocalData;
    getDataObjName(): string;
    getDataObj(dataObjName: any): object | null;
    getObjectData(key: string): boolean;
    setObjectData(key: string, value: boolean | null): void;
    clearObjectData(): void;
    getValue(key: string): string | null;
    setKey(key: string, value: string): void;
    private isEmpty;
    private stringBoolean;
    private booleanString;
}
