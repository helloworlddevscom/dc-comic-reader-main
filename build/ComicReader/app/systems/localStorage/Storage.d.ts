interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export default abstract class Storage {
    private readonly storage;
    constructor(getStorage?: () => IStorage);
    protected get(key: string): string | null;
    protected set(key: string, value: string): void;
    protected clearItem(key: string): void;
    protected clearItems(obj: object): void;
    protected getObj(key: string): object | null;
    protected setObj(key: string, value: object): void;
}
export {};
