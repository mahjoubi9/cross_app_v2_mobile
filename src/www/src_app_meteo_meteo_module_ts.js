"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_meteo_meteo_module_ts"],{

/***/ 3542:
/*!***********************************************!*\
  !*** ./src/app/meteo/meteo-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeteoPageRoutingModule": () => (/* binding */ MeteoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _meteo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteo.page */ 8446);




const routes = [
    {
        path: '',
        component: _meteo_page__WEBPACK_IMPORTED_MODULE_0__.MeteoPage
    }
];
let MeteoPageRoutingModule = class MeteoPageRoutingModule {
};
MeteoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MeteoPageRoutingModule);



/***/ }),

/***/ 5188:
/*!***************************************!*\
  !*** ./src/app/meteo/meteo.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeteoPageModule": () => (/* binding */ MeteoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _meteo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteo-routing.module */ 3542);
/* harmony import */ var _meteo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteo.page */ 8446);







let MeteoPageModule = class MeteoPageModule {
};
MeteoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _meteo_routing_module__WEBPACK_IMPORTED_MODULE_0__.MeteoPageRoutingModule
        ],
        declarations: [_meteo_page__WEBPACK_IMPORTED_MODULE_1__.MeteoPage]
    })
], MeteoPageModule);



/***/ }),

/***/ 8446:
/*!*************************************!*\
  !*** ./src/app/meteo/meteo.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeteoPage": () => (/* binding */ MeteoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_meteo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./meteo.page.html */ 3106);
/* harmony import */ var _meteo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteo.page.scss */ 9829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_meteo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/meteo.service */ 387);





let MeteoPage = class MeteoPage {
    constructor(meteosService) {
        this.meteosService = meteosService;
    }
    ngOnInit() {
    }
    onLoadMeteo() {
        this.meteosService.getMeteoData(this.city)
            .subscribe(data => {
            this.dataMeteo = data;
            console.log(data);
        }), error => {
            console.log(error);
        };
    }
};
MeteoPage.ctorParameters = () => [
    { type: _services_meteo_service__WEBPACK_IMPORTED_MODULE_2__.MeteoService }
];
MeteoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-meteo',
        template: _C_Users_lenovo_Documents_my_domment_S4_Ionic_projet_cross_app_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_meteo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_meteo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MeteoPage);



/***/ }),

/***/ 387:
/*!*******************************************!*\
  !*** ./src/app/services/meteo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeteoService": () => (/* binding */ MeteoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let MeteoService = class MeteoService {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getMeteoData(city) {
        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8690f7c511a1553026d1bd72cb190b4b");
    }
};
MeteoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
MeteoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MeteoService);



/***/ }),

/***/ 3106:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/meteo/meteo.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-button>\n    <ion-title>\n      Meteo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Ville : </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"city\"></ion-input>\n        <ion-button (click)=\"onLoadMeteo()\">OK</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"dataMeteo\">\n    <ion-card-content>\n      <ion-item>\n        <ion-label>City :  <strong>{{dataMeteo.city.name}}</strong> </ion-label>\n        <ion-label>Country :  <strong>{{dataMeteo.city.country}}</strong> </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Long :  <strong>{{dataMeteo.city.coord.lon}}</strong> </ion-label>\n        <ion-label>Lat :  <strong>{{dataMeteo.city.coord.lat}}</strong> </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Population :  <strong>{{dataMeteo.city.population}}</strong> </ion-label>\n\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"dataMeteo\">\n    <ion-card-content>\n      <ion-list>\n          <ion-item *ngFor=\"let m of dataMeteo.list\">\n            <ion-avatar slot=\"start\">\n            <ion-img src=\"./../assets/images/{{m.weather[0].main}}.jpg\"></ion-img>\n            </ion-avatar>\n            <ion-list>\n              <ion-item>\n                <strong>  {{m.dt*1000|date:'dd/MM/yyyy-HH-mm'}}</strong>\n              </ion-item>\n              <ion-item>\n                Min :<strong> {{m.main.temp_min -273.15|number:'0.0'}} C°</strong> , Max : <strong>{{m.main.temp_max -273.15|number:'0.0'}} C°</strong>\n              </ion-item>\n              <ion-item>\n                pre : <strong>{{m.main.pressure|number:'0.0'}} </strong>,Hum : <strong>{{m.main.humidity|number:'0.0'}}</strong>\n              </ion-item>\n\n            </ion-list>\n          </ion-item>\n\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 9829:
/*!***************************************!*\
  !*** ./src/app/meteo/meteo.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRlby5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_meteo_meteo_module_ts.js.map