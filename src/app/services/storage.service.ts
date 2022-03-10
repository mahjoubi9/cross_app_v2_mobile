import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
     await this.storage.create();
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storage.set(key, value);
  }
  public getAll(){
    let task:any=[];
    this.storage.forEach((key, value,index) => {
      /*   console.log(key);
         console.log(value);
         console.log(index);*/
      task.push({'value':value,'key':key,'index':index});

    });
    return task ;
  }
  public async remove(key: string) {

    await this.storage.remove(key);
  }
  public async get(key: string) {

    return await this.storage.get(key);
  }
  public async clear(key: string) {

    await this.storage.clear();
  }
}
