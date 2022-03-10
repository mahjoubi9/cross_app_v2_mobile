"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_gallery_gallery_module_ts"],{

/***/ 8294:
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPageRoutingModule": () => (/* binding */ GalleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.page */ 603);




const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_0__.GalleryPage
    }
];
let GalleryPageRoutingModule = class GalleryPageRoutingModule {
};
GalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GalleryPageRoutingModule);



/***/ }),

/***/ 9296:
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPageModule": () => (/* binding */ GalleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 8294);
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.page */ 603);







let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryPageRoutingModule
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_1__.GalleryPage]
    })
], GalleryPageModule);



/***/ }),

/***/ 603:
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPage": () => (/* binding */ GalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gallery.page.html */ 1001);
/* harmony import */ var _gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.page.scss */ 3566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gallery.service */ 105);





let GalleryPage = class GalleryPage {
    constructor(galleryService) {
        this.galleryService = galleryService;
        this.galleryImages = [];
        this.currentPage = 1;
        this.size = 10;
    }
    ngOnInit() {
    }
    onLoadImages() {
        this.galleryImages = [];
        this.currentPage = 1;
        this.totalPages = 0;
        this.doSearch();
    }
    doSearch() {
        this.galleryService.getDataImages(this.Keyword, this.size, this.currentPage).subscribe(data => {
            console.log(data);
            data['hits'].forEach(image => {
                this.galleryImages.push(image);
                this.totalPages = data['totalHits'] / this.size;
            });
        }), error => {
            console.log(error);
        };
    }
    loadData(event) {
        if (this.currentPage < this.totalPages) {
            console.log(this.currentPage + "/" + this.totalPages);
            ++this.currentPage;
            this.doSearch();
            event.target.complete();
        }
        if (this.currentPage >= this.totalPages) {
            event.target.disabled = true;
        }
    }
};
GalleryPage.ctorParameters = () => [
    { type: _services_gallery_service__WEBPACK_IMPORTED_MODULE_2__.GalleryService }
];
GalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-gallery',
        template: _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GalleryPage);



/***/ }),

/***/ 105:
/*!*********************************************!*\
  !*** ./src/app/services/gallery.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryService": () => (/* binding */ GalleryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let GalleryService = class GalleryService {
    constructor(http) {
        this.http = http;
    }
    getDataImages(Keyword, size, currentPage) {
        return this.http.get("https://pixabay.com/api/?key=20899276-2fb72f844de12364f2c68af6f&q=" + Keyword + "&per_page=" + size + "&page=" + currentPage + "&image_type=photo");
    }
};
GalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GalleryService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GalleryService);



/***/ }),

/***/ 1001:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/gallery/gallery.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-button>\n    <ion-title>\n      Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Keyword :</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"Keyword\"></ion-input>\n        <ion-button (click)=\"onLoadImages()\">OK</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list *ngIf=\"galleryImages\">\n\n    <ion-card *ngFor=\"let im of galleryImages\">\n      <ion-card-header>\n        <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img [src]=\"im.userImageURL\"></ion-img>\n        </ion-avatar>\n          <ion-label>{{im.user}}</ion-label>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img [src]=\"im.previewURL\"></ion-img>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon name=\"thumbs-up\"></ion-icon>\n              <ion-label>{{im.likes}}</ion-label>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon name=\"text\"></ion-icon>\n              <ion-label>{{im.comments}}</ion-label>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon name=\"download\"></ion-icon>\n              <ion-label>{{im.downloads}}</ion-label>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\"><!--threshold=\"100px\"-->\n  <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ 3566:
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_gallery_gallery_module_ts.js.map