import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../services/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  Keyword: any;
  galleryImages=[];
public currentPage:number=1;
 public size:number=10;
  private totalPages: number;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onLoadImages() {
    this.galleryImages=[];
    this.currentPage=1;
    this.totalPages=0;
    this.doSearch();
  }
doSearch(){
  this.galleryService.getDataImages(this.Keyword, this.size, this.currentPage).subscribe(data => {
    console.log(data);
    data['hits'].forEach(image =>{
      this.galleryImages.push(image);
      this.totalPages=data['totalHits']/this.size;
    });
  }),error=>{
    console.log(error);
  }
}
  loadData(event) {
if (this.currentPage<this.totalPages){
  console.log(this.currentPage+"/"+this.totalPages);
  ++this.currentPage;
  this.doSearch();
  event.target.complete();
}
    if (this.currentPage>=this.totalPages){
event.target.disabled=true; }
  }
}
