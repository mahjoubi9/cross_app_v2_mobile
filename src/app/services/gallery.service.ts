import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getDataImages(Keyword: any,size:any,currentPage:any) {
   return  this.http.get("https://pixabay.com/api/?key=20899276-2fb72f844de12364f2c68af6f&q="+Keyword+"&per_page="+size+"&page="+currentPage+"&image_type=photo");
  }
}
