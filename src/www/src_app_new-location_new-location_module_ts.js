"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-location_new-location_module_ts"],{

/***/ 7171:
/*!************************************!*\
  !*** ./src/app/models/location.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "location": () => (/* binding */ location)
/* harmony export */ });
class location {
    constructor() {
        this.title = "";
        this.city = "";
        this.country = "";
        this.Keywords = "";
        this.selected = true;
        this.timestamp = 0;
        this.coordinates = { "longitude": 0, "latitude": 0 };
        this.photo = [];
    }
}


/***/ }),

/***/ 4841:
/*!*************************************************************!*\
  !*** ./src/app/new-location/new-location-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLocationPageRoutingModule": () => (/* binding */ NewLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _new_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-location.page */ 9723);




const routes = [
    {
        path: '',
        component: _new_location_page__WEBPACK_IMPORTED_MODULE_0__.NewLocationPage
    }
];
let NewLocationPageRoutingModule = class NewLocationPageRoutingModule {
};
NewLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewLocationPageRoutingModule);



/***/ }),

/***/ 6718:
/*!*****************************************************!*\
  !*** ./src/app/new-location/new-location.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLocationPageModule": () => (/* binding */ NewLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _new_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-location-routing.module */ 4841);
/* harmony import */ var _new_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-location.page */ 9723);







let NewLocationPageModule = class NewLocationPageModule {
};
NewLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewLocationPageRoutingModule
        ],
        declarations: [_new_location_page__WEBPACK_IMPORTED_MODULE_1__.NewLocationPage]
    })
], NewLocationPageModule);



/***/ }),

/***/ 9723:
/*!***************************************************!*\
  !*** ./src/app/new-location/new-location.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLocationPage": () => (/* binding */ NewLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-location.page.html */ 8464);
/* harmony import */ var _new_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-location.page.scss */ 7852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _models_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/location */ 7171);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 1184);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/locations.service */ 466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);









let NewLocationPage = class NewLocationPage {
    constructor(router, navController, geolocation, locationService) {
        this.router = router;
        this.navController = navController;
        this.geolocation = geolocation;
        this.locationService = locationService;
        this.location = new _models_location__WEBPACK_IMPORTED_MODULE_2__.location();
    }
    ngOnInit() {
    }
    onAddLocation() {
        this.location.timestamp = new Date().getTime();
        this.location.photo = [];
        this.geolocation.getCurrentPosition().then((resp) => {
            this.location.coordinates = {
                longitude: resp.coords.longitude,
                latitude: resp.coords.latitude
            };
            this.locationService.addLocation(this.location);
            console.log(this.location);
            this.router.navigateByUrl("/menu/locations");
            // this.navController.back();
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        console.log(this.location);
    }
};
NewLocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _services_locations_service__WEBPACK_IMPORTED_MODULE_4__.LocationsService }
];
NewLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-new-location',
        template: _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_location_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_location_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewLocationPage);



/***/ }),

/***/ 8464:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-location/new-location.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-button>\n    <ion-title>\n      new Location\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"form\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Tilte : </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"location.title\" name=\"location.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>City : </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"location.city\" name=\"location.city\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Country : </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"location.country\" name=\"location.country\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Keywords : </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"location.Keywords\" name=\"keywords\"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-button  (click)=\"onAddLocation()\">Save</ion-button>\n        </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ 7852:
/*!*****************************************************!*\
  !*** ./src/app/new-location/new-location.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctbG9jYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_new-location_new-location_module_ts.js.map