"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_locations_locations_module_ts"],{

/***/ 4146:
/*!*******************************************************!*\
  !*** ./src/app/locations/locations-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageRoutingModule": () => (/* binding */ LocationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.page */ 1660);




const routes = [
    {
        path: '',
        component: _locations_page__WEBPACK_IMPORTED_MODULE_0__.LocationsPage
    }
];
let LocationsPageRoutingModule = class LocationsPageRoutingModule {
};
LocationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationsPageRoutingModule);



/***/ }),

/***/ 4985:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageModule": () => (/* binding */ LocationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations-routing.module */ 4146);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page */ 1660);







let LocationsPageModule = class LocationsPageModule {
};
LocationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationsPageRoutingModule
        ],
        declarations: [_locations_page__WEBPACK_IMPORTED_MODULE_1__.LocationsPage]
    })
], LocationsPageModule);



/***/ }),

/***/ 1660:
/*!*********************************************!*\
  !*** ./src/app/locations/locations.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPage": () => (/* binding */ LocationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./locations.page.html */ 3644);
/* harmony import */ var _locations_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page.scss */ 7554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/locations.service */ 466);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 9900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);








let LocationsPage = class LocationsPage {
    constructor(alertCtrl, locationService, storageService, router) {
        this.alertCtrl = alertCtrl;
        this.locationService = locationService;
        this.storageService = storageService;
        this.router = router;
        this.go = "ddddddd";
        this.locationService.getLocations().then(data => {
            this.locations = data;
            this.go = "fffffff";
            console.log(data);
        });
    }
    ngOnInit() {
    }
    //onViewWillEnter is called every time the view is navigated
    //ngOninit is called after Angular has initialized all data-bound properties of a directive
    //comment ngOnInit mais il ai  infinement exect mais ngOninit
    ionViewWillEnter() {
        this.locationService.getLocations().then(data => {
            this.locations = data;
            console.log(data);
        });
    }
    // Create and expose methods that users of this service can
    // call, for example:
    gofonction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.go);
            yield this.storageService.set('go', this.go);
        });
    }
    getallStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(yield this.storageService.getAll());
        });
    }
    getOneStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(yield this.storageService.get("go"));
        });
    }
    onNewLocation() {
        this.router.navigateByUrl("/menu/new-location");
    }
    onRemove(p) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Confirmation',
                message: 'etes vous sure ??',
                buttons: [
                    {
                        text: 'OUI',
                        handler: () => {
                            this.removelocation(p);
                        }
                    },
                    {
                        text: 'NON',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    removelocation(p) {
        let index = this.locations.indexOf(p);
        this.locations.splice(index, 1);
        this.locationService.updateLocation(this.locations);
    }
    onDetails(p) {
        this.storageService.set("locationDetails", p); //JSON.stringify(p)
        console.log(p);
        this.router.navigateByUrl("/menu/location-details");
    }
};
LocationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LocationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-locations',
        template: _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_locations_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationsPage);



/***/ }),

/***/ 3644:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locations/locations.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-button>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onNewLocation()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Locations\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let p  of locations\">\n      <ion-label>Title : </ion-label>\n      <ion-label (click)=\"onDetails(p)\">{{p.title}}</ion-label>\n        <ion-icon (click)=\"onRemove(p)\" name=\"close\" slot=\"end\" ></ion-icon>\n    </ion-item>\n  </ion-list>\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" name=\"go\" placeholder=\"Username\" [(ngModel)]=\"go\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"block\" (click)=\"gofonction()\">Login</ion-button>\n    <ion-button expand=\"block\" (click)=\"getallStorage()\">GetAll</ion-button>\n    <ion-button expand=\"block\" (click)=\"getOneStorage()\">Getgo</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 7554:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_locations_locations_module_ts.js.map