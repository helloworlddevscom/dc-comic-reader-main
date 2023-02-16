// Base Class to extend LocalStorage functionality
// Only interface items allowed are native localstorage options
//
// This class is ment to be extened

interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export default abstract class Storage {
  private readonly storage: IStorage;
  
  public constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  protected get(key: string): string | null {
    return this.storage.getItem(key);
  }

  protected set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  protected clearItem(key: string): void {
    this.storage.removeItem(key);
  }

  protected clearItems(obj: object): void {
    Object.keys(obj).forEach((key) => this.clearItem(key));
  }

  protected getObj(key: string): object | null {
    let value: string = this.storage.getItem(key) as string;
    return JSON.parse(value);
  }

  protected setObj(key: string, value: object): void {
     this.storage.setItem(key, JSON.stringify(value));
  }

}