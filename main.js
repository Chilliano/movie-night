(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/appear-from-left.animation.ts":
/*!**********************************************************!*\
  !*** ./src/app/animations/appear-from-left.animation.ts ***!
  \**********************************************************/
/*! exports provided: appearFromLeftAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appearFromLeftAnimation", function() { return appearFromLeftAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const appearFromLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('25ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s cubic-bezier(.51,.92,.24,1.15)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0,
                    transform: 'translateX(-500px)',
                    offset: 0,
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0.5,
                    transform: 'translateX(-250px) scale(1.1)',
                    offset: 0.3,
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
            ])),
        ]), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.51,.92,.24,1.15)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, transform: 'scale(.5)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)', offset: 1 }),
        ])), { optional: true }),
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/layout/not-found/not-found.component */ "./src/app/components/layout/not-found/not-found.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/movies/movie-details/movie-details.component */ "./src/app/components/movies/movie-details/movie-details.component.ts");







const routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    {
        path: 'movies',
        component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_1__["MoviesComponent"],
    },
    {
        path: 'movies/:id',
        component: _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"],
    },
    {
        path: '404',
        component: _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"],
    },
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "base-container"], ["id", "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".base-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.base-container[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYmFzZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcblxuICAjY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared/search-input/search-input.component */ "./src/app/components/shared/search-input/search-input.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_modules_core_store_appReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/core/store/appReducer */ "./src/app/modules/core/store/appReducer.ts");
/* harmony import */ var app_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/feature/feature.module */ "./src/app/modules/feature/feature.module.ts");
/* harmony import */ var app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_layout_grid_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/layout/grid/grid-item/grid-item.component */ "./src/app/components/layout/grid/grid-item/grid-item.component.ts");
/* harmony import */ var _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/shared/button/button.component */ "./src/app/components/shared/button/button.component.ts");
/* harmony import */ var _components_layout_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/layout/grid/grid.component */ "./src/app/components/layout/grid/grid.component.ts");
/* harmony import */ var _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/movies/movie-details/movie-details.component */ "./src/app/components/movies/movie-details/movie-details.component.ts");
/* harmony import */ var _components_shared_genres_genres_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/shared/genres/genres.component */ "./src/app/components/shared/genres/genres.component.ts");
/* harmony import */ var _components_shared_list_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/shared/list/list.component */ "./src/app/components/shared/list/list.component.ts");
/* harmony import */ var app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/pipes/filter-on-filter-term.pipe */ "./src/app/pipes/filter-on-filter-term.pipe.ts");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var app_directives_lazySizes_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/directives/lazySizes.directive */ "./src/app/directives/lazySizes.directive.ts");











// modules

// components









// pipes

// services

// directives




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_22__["MoviesService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            app_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_6__["FeatureModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ app: app_modules_core_store_appReducer__WEBPACK_IMPORTED_MODULE_5__["_appReducer"] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_14__["MoviesComponent"],
        _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_18__["MovieDetailsComponent"],
        _components_layout_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"],
        _components_layout_grid_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_15__["GridItemComponent"],
        _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"],
        _components_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_0__["SearchInputComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _components_shared_genres_genres_component__WEBPACK_IMPORTED_MODULE_19__["GenresComponent"],
        _components_shared_list_list_component__WEBPACK_IMPORTED_MODULE_20__["ListComponent"],
        // pipes
        app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterOnFilterTermPipe"],
        // directives
        app_directives_lazySizes_directive__WEBPACK_IMPORTED_MODULE_23__["LazySizesDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        app_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_6__["FeatureModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_14__["MoviesComponent"],
                    _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_18__["MovieDetailsComponent"],
                    _components_layout_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"],
                    _components_layout_grid_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_15__["GridItemComponent"],
                    _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"],
                    _components_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_0__["SearchInputComponent"],
                    _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _components_shared_genres_genres_component__WEBPACK_IMPORTED_MODULE_19__["GenresComponent"],
                    _components_shared_list_list_component__WEBPACK_IMPORTED_MODULE_20__["ListComponent"],
                    // pipes
                    app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterOnFilterTermPipe"],
                    // directives
                    app_directives_lazySizes_directive__WEBPACK_IMPORTED_MODULE_23__["LazySizesDirective"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    app_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_6__["FeatureModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ app: app_modules_core_store_appReducer__WEBPACK_IMPORTED_MODULE_5__["_appReducer"] }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                    }),
                ],
                providers: [_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_22__["MoviesService"]],
                bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [["id", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cillian O Murchu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n  background: #e42973;\n  height: 100%;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0tRO0VESlIsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4jZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi8vIG1lZGlhIHF1ZXJpZXNcbiRicmVha3BvaW50LWRlc2t0b3A6IDgyZW07IC8vIDEzMTJweDtcbiRicmVha3BvaW50LXRhYjogNTcuNmVtOyAvLyA5MjJweFxuJGJyZWFrcG9pbnQtcGhvbmU6IDQzZW07IC8vIDY4OHB4XG5cbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjZTQyOTczO1xuJHNlY29uZGFyeTogI2MyMTg1Yjtcbi8vICR0ZXJ0aWFyeTogI2ZmNzQ1OTtcbi8vICRxdWFydGlhcnk6ICNmZmQwNTA7XG5cbiRib3JkZXItcmFkaXVzOiA1cHg7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuXG4kYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuJGJveC1zaGFkb3ctaG92ZXI6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXG4gIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/grid/grid-item/grid-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/layout/grid/grid-item/grid-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_trim_string_extension_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @functions/trim-string-extension.function */ "./src/app/functions/trim-string-extension.function.ts");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var app_directives_lazySizes_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/directives/lazySizes.directive */ "./src/app/directives/lazySizes.directive.ts");





class GridItemComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    getAlt(s) {
        return Object(_functions_trim_string_extension_function__WEBPACK_IMPORTED_MODULE_1__["TrimStringExtensionFunction"])(s);
    }
    onItemSelected() {
        this.moviesService.selectMovie(this.item);
    }
}
GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
GridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], inputs: { item: "item" }, outputs: { selectedItem: "selectedItem" }, decls: 2, vars: 1, consts: [[1, "card-container", 3, "click"], ["alt", "", 3, "lazyload"]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridItemComponent_Template_div_click_0_listener() { return ctx.onItemSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("lazyload", ctx.item.img);
    } }, directives: [app_directives_lazySizes_directive__WEBPACK_IMPORTED_MODULE_3__["LazySizesDirective"]], styles: ["[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLWl0ZW0vZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-item',
                templateUrl: './grid-item.component.html',
                styleUrls: ['./grid-item.component.scss'],
            }]
    }], function () { return [{ type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/grid/grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/layout/grid/grid.component.ts ***!
  \**********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _functions_set_columns_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @functions/set-columns.function */ "./src/app/functions/set-columns.function.ts");
/* harmony import */ var _animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @animations/appear-from-left.animation */ "./src/app/animations/appear-from-left.animation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_layout_grid_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/layout/grid/grid-item/grid-item.component */ "./src/app/components/layout/grid/grid-item/grid-item.component.ts");
/* harmony import */ var app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pipes/filter-on-filter-term.pipe */ "./src/app/pipes/filter-on-filter-term.pipe.ts");











function GridComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-grid-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class GridComponent {
    constructor(breakpointObserver, changeDetectorRef) {
        this.breakpointObserver = breakpointObserver;
        this.changeDetectorRef = changeDetectorRef;
        this.isHandset$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.changeDetectorRef.detectChanges()));
    }
    ngOnInit() {
        this.breakpoint = Object(_functions_set_columns_function__WEBPACK_IMPORTED_MODULE_2__["setColumns"])(window);
    }
    ngAfterContentInit() { }
    onResize(event) {
        this.breakpoint = Object(_functions_set_columns_function__WEBPACK_IMPORTED_MODULE_2__["setColumns"])(event.target);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { data: "data", localFilterTermRef: "localFilterTermRef" }, decls: 3, vars: 6, consts: [["rowHeight", "22rem", "gutterSize", "10", 3, "cols", "resize"], [4, "ngFor", "ngForOf"], [3, "item"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GridComponent_Template_mat_grid_list_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filterOnFilterTerm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint)("@cardAnimation", ctx.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx.data, ctx.localFilterTermRef));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _components_layout_grid_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_7__["GridItemComponent"]], pipes: [app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterOnFilterTermPipe"]], styles: ["[_nghost-%COMP%]   .mat-grid-tile[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UscURDWWlCO0FEYnJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuOmhvc3Qge1xuICAubWF0LWdyaWQtdGlsZSB7XG4gICAgdHJhbnNpdGlvbjogJGdlbmVyYWwtdHJhbnNpdGlvbjtcbiAgICAvLyBvcGFjaXR5OiAwLjY7XG4gICAgJjpob3ZlciB7XG4gICAgICAvLyBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1ob3ZlcjtcbiAgICAgIC8vIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4iLCIvLyBtZWRpYSBxdWVyaWVzXG4kYnJlYWtwb2ludC1kZXNrdG9wOiA4MmVtOyAvLyAxMzEycHg7XG4kYnJlYWtwb2ludC10YWI6IDU3LjZlbTsgLy8gOTIycHhcbiRicmVha3BvaW50LXBob25lOiA0M2VtOyAvLyA2ODhweFxuXG4kaGVhZGVyLWhlaWdodDogNXJlbTtcblxuLy8gY29sb3JzXG4kcHJpbWFyeTogI2U0Mjk3MztcbiRzZWNvbmRhcnk6ICNjMjE4NWI7XG4vLyAkdGVydGlhcnk6ICNmZjc0NTk7XG4vLyAkcXVhcnRpYXJ5OiAjZmZkMDUwO1xuXG4kYm9yZGVyLXJhZGl1czogNXB4O1xuXG4kZ2VuZXJhbC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcblxuJGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiRib3gtc2hhZG93LWhvdmVyOiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxuICAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuIl19 */"], data: { animation: [_animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_3__["appearFromLeftAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
                animations: [_animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_3__["appearFromLeftAnimation"]],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], localFilterTermRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _assets_styles_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/styles/_color */ "./src/assets/styles/_color.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_router_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/router/router.service */ "./src/app/services/router/router.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/shared/button/button.component */ "./src/app/components/shared/button/button.component.ts");
/* harmony import */ var _components_shared_genres_genres_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/shared/genres/genres.component */ "./src/app/components/shared/genres/genres.component.ts");







const _c0 = function (a2, a3) { return { text: "test", icon: "home", backgroundColor: a2, disabled: a3 }; };
class HeaderComponent {
    constructor(routerService) {
        this.routerService = routerService;
        this.color = new _assets_styles_color__WEBPACK_IMPORTED_MODULE_0__["Color"]();
    }
    goHome() {
        this.routerService.goHome();
    }
    getRouteUrl() {
        return this.routerService.getRouter();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_router_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [["color", "primary"], [1, "thick-top"], [1, "home-icon"], [3, "config", "clicked"], [1, "example-spacer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function HeaderComponent_Template_app_button_clicked_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Movie Night");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx.color.$secondary, ctx.getRouteUrl() === "/movies"));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _components_shared_genres_genres_component__WEBPACK_IMPORTED_MODULE_5__["GenresComponent"]], styles: ["[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  justify-content: center;\n  justify-items: center;\n}\n[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .home-icon[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.thick-top[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  background: #e42973;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJDWlE7RURhUixPQUFBO0FBSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgLmhvbWUtaWNvbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbi50aGljay10b3Age1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgbGVmdDogMDtcbn1cbiIsIi8vIG1lZGlhIHF1ZXJpZXNcbiRicmVha3BvaW50LWRlc2t0b3A6IDgyZW07IC8vIDEzMTJweDtcbiRicmVha3BvaW50LXRhYjogNTcuNmVtOyAvLyA5MjJweFxuJGJyZWFrcG9pbnQtcGhvbmU6IDQzZW07IC8vIDY4OHB4XG5cbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjZTQyOTczO1xuJHNlY29uZGFyeTogI2MyMTg1Yjtcbi8vICR0ZXJ0aWFyeTogI2ZmNzQ1OTtcbi8vICRxdWFydGlhcnk6ICNmZmQwNTA7XG5cbiRib3JkZXItcmFkaXVzOiA1cHg7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuXG4kYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuJGJveC1zaGFkb3ctaG92ZXI6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXG4gIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _services_router_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 19, vars: 0, consts: [[1, "outer-container"], [1, "message"], [1, "list-of-reasons"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uh oh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The page you're looking for doesn't exists because...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mistyped URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Copy-and-paste error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Broken link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Truncated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Moved content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Deleted content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".outer-container[_ngcontent-%COMP%] {\n  background-image: url('404.jpg');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: sepia(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzQwNC80MDQuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogc2VwaWEoMSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/movies/movie-details/movie-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/movies/movie-details/movie-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @animations/appear-from-left.animation */ "./src/app/animations/appear-from-left.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");









function MovieDetailsComponent_div_0_mat_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_div_0_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_half");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_div_0_mat_chip_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r5);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function MovieDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieDetailsComponent_div_0_mat_icon_21_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MovieDetailsComponent_div_0_ng_template_23_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " access_time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-progress-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-chip-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MovieDetailsComponent_div_0_mat_chip_40_Template, 2, 2, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    var tmp_1_0 = null;
    var tmp_2_0 = null;
    var tmp_3_0 = null;
    var tmp_4_0 = null;
    var tmp_5_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, "url(" + ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, ctx_r0.selectedMovie$)) == null ? null : tmp_0_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, "url(" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, ctx_r0.selectedMovie$)) == null ? null : tmp_1_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, "url(" + ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx_r0.selectedMovie$)) == null ? null : tmp_2_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, "url(" + ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, ctx_r0.selectedMovie$)) == null ? null : tmp_3_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, "url(" + ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 24, ctx_r0.selectedMovie$)) == null ? null : tmp_4_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, "url(" + ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 26, ctx_r0.selectedMovie$)) == null ? null : tmp_5_0.img) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 28, ctx_r0.selectedMovie$).rate * 10 > 70)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 30, ctx_r0.selectedMovie$).rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 32, ctx_r0.selectedMovie$).length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 34, ctx_r0.selectedMovie$).rate * 10 > 70 ? "warn" : "accent")("mode", "determinate")("value", ctx_r0.progressValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](41, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 40, ctx_r0.selectedMovie$).genres, 0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 42, ctx_r0.selectedMovie$).name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 44, ctx_r0.selectedMovie$).description, " ");
} }
class MovieDetailsComponent {
    constructor(route, movieService) {
        this.route = route;
        this.movieService = movieService;
        this.progressValue = 0;
        this.items = [
            ` <div class="block">
  <div
    class="side -main"
    [ngStyle]="{
      'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
    }"
  ></div>
  <div
    class="side -left"
    [ngStyle]="{
      'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
    }"
  ></div>
</div>`,
            ` <div class="block">
    <div
      class="side -main"
      [ngStyle]="{
        'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
      }"
    ></div>
    <div
      class="side -left"
      [ngStyle]="{
        'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
      }"
    ></div>
  </div>`,
            ` <div class="block">
<div
  class="side -main"
  [ngStyle]="{
    'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
  }"
></div>
<div
  class="side -left"
  [ngStyle]="{
    'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
  }"
></div>
</div>`,
        ];
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            const parsedId = (this.id = +params['id']);
            this.selectedMovie$ = this.movieService.getSelectedMovie(parsedId);
            setTimeout(() => {
                this.updateProgressValue();
            }, 500);
        });
    }
    updateProgressValue() {
        this.selectedMovie$.subscribe((movie) => {
            this.progressValue = parseInt(movie.rate) * 10;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 2, vars: 3, consts: [["class", "outer-container", 4, "ngIf"], [1, "outer-container"], [1, "movie-poster"], [1, "block", "1"], [1, "side", "-main", 3, "ngStyle"], [1, "side", "-left", 3, "ngStyle"], [1, "block", "2"], [1, "block", "3"], [1, "details-container"], [1, "rating-and-length"], [1, "rating"], [4, "ngIf", "ngIfElse"], ["halfStar", ""], [1, "length"], [1, "progress-bar"], [1, "example-margin", 3, "color", "mode", "value"], [1, "chips"], ["aria-label", "Genres"], ["color", "primary", "selected", "", 3, "selectable", 4, "ngFor", "ngForOf"], [1, "title-and-description"], [2, "font-family", "Spartan", "font-weight", "bold"], [2, "font-family", "Spartan"], ["color", "primary", "selected", "", 3, "selectable"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_0_Template, 50, 58, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.selectedMovie$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["@keyframes slideBlockOne {\n  100% {\n    left: 17%;\n  }\n}\n@keyframes slideBlockTwo {\n  100% {\n    left: 35%;\n  }\n}\n@keyframes slideBlockThree {\n  100% {\n    left: 64%;\n  }\n}\n.outer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  width: 80%;\n  padding-top: 50%;\n  margin: 2rem auto;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 30%;\n  perspective: 1000px;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(1) {\n  height: 80%;\n  top: 10%;\n  left: -100%;\n  width: 15%;\n  animation: slideBlockOne 0.2s 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 0;\n  left: -100%;\n  animation: slideBlockTwo 0.2s 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(3) {\n  height: 80%;\n  top: 10%;\n  width: 15%;\n  left: -100%;\n  animation: slideBlockThree 0.2s 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]    > .side[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: auto 100%;\n  box-shadow: -1vw 0.5vw 1vw rgba(0, 0, 0, 0.3);\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]    > .side.-main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  transform: rotateY(30deg);\n  transform-origin: 0 50%;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]    > .side.-left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20%;\n  transform-origin: 0 50%;\n  transform: rotateY(-60deg) translateX(-100%);\n  filter: brightness(40%);\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(1)    > .side[_ngcontent-%COMP%] {\n  transition-delay: 200;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(1)    > .side.-main[_ngcontent-%COMP%] {\n  background-position: 4% 50%;\n  background-size: auto 130%;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(1)    > .side.-left[_ngcontent-%COMP%] {\n  background-position: 0 50%;\n  background-size: auto 130%;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(2)    > .side[_ngcontent-%COMP%] {\n  transition-delay: 400;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(2)    > .side.-main[_ngcontent-%COMP%] {\n  background-position: 50% 0;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(2)    > .side.-left[_ngcontent-%COMP%] {\n  background-position: 28.5% 0;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(3)    > .side[_ngcontent-%COMP%] {\n  transition-delay: 600;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(3)    > .side.-main[_ngcontent-%COMP%] {\n  background-position: 96% 50%;\n  background-size: auto 130%;\n}\n.outer-container[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]    > .block[_ngcontent-%COMP%]:nth-of-type(3)    > .side.-left[_ngcontent-%COMP%] {\n  background-position: 78% 50%;\n  background-size: auto 130%;\n}\n.outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .rating-and-length[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 0 10px;\n  grid-gap: 0.5rem;\n}\n.outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .rating-and-length[_ngcontent-%COMP%]   .length[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n  font-family: \"SirinStencil\";\n}\n.outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .rating-and-length[_ngcontent-%COMP%]   .length[_ngcontent-%COMP%], .outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .rating-and-length[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n.outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.outer-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: flex-end;\n}\n.outer-container   [_nghost-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.outer-container   [_nghost-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxTQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxTQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSxTQUFBO0VBREY7QUFDRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFERjtBQUVFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQU47QUFFTTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtBQUFSO0FBSU07RUFDRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDRFQUFBO0FBRlI7QUFNTTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4RUFBQTtBQUpSO0FBU0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSw2Q0FBQTtBQVBOO0FBU007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFQUjtBQVVNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVlJO0VBQ0UscUJBQUE7QUFWTjtBQVlNO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQVZSO0FBYU07RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBWFI7QUFlSTtFQUNFLHFCQUFBO0FBYk47QUFlTTtFQUNFLDBCQUFBO0FBYlI7QUFnQk07RUFDRSw0QkFBQTtBQWRSO0FBa0JJO0VBQ0UscUJBQUE7QUFoQk47QUFrQk07RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FBaEJSO0FBbUJNO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQWpCUjtBQXVCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJOO0FBc0JNO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQXBCUjtBQXNCTTs7RUFFRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQXBCUjtBQXVCSTtFQUNFLG1CQUFBO0FBckJOO0FBdUJJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBckJOO0FBMEJJO0VBQ0UsWUFBQTtBQXhCTjtBQTBCSTtFQUNFLHlDQUFBO0FBeEJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkZUJsb2NrT25lIHtcbiAgMTAwJSB7XG4gICAgbGVmdDogMTclO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCbG9ja1R3byB7XG4gIDEwMCUge1xuICAgIGxlZnQ6IDM1JTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQmxvY2tUaHJlZSB7XG4gIDEwMCUge1xuICAgIGxlZnQ6IDY0JTtcbiAgfVxufVxuLm91dGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLm1vdmllLXBvc3RlciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG5cbiAgICA+IC5ibG9jayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcblxuICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVCbG9ja09uZSAwLjJzIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSlcbiAgICAgICAgICBmb3J3YXJkcztcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVCbG9ja1R3byAwLjJzIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSlcbiAgICAgICAgICBmb3J3YXJkcztcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVCbG9ja1RocmVlIDAuMnMgMC42cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKVxuICAgICAgICAgIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cblxuICAgID4gLmJsb2NrID4gLnNpZGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogLTF2dyAwLjV2dyAxdncgcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gICAgICAmLi1tYWluIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICB9XG5cbiAgICAgICYuLWxlZnQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTYwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgPiAuYmxvY2s6bnRoLW9mLXR5cGUoMSkgPiAuc2lkZSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyMDA7XG5cbiAgICAgICYuLW1haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0JSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMzAlO1xuICAgICAgfVxuXG4gICAgICAmLi1sZWZ0IHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMzAlO1xuICAgICAgfVxuICAgIH1cblxuICAgID4gLmJsb2NrOm50aC1vZi10eXBlKDIpID4gLnNpZGUge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogNDAwO1xuXG4gICAgICAmLi1tYWluIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDA7XG4gICAgICB9XG5cbiAgICAgICYuLWxlZnQge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyOC41JSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgID4gLmJsb2NrOm50aC1vZi10eXBlKDMpID4gLnNpZGUge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogNjAwO1xuXG4gICAgICAmLi1tYWluIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEzMCU7XG4gICAgICB9XG5cbiAgICAgICYuLWxlZnQge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3OCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTMwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIge1xuICAgIC5yYXRpbmctYW5kLWxlbmd0aCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGdyaWQtZ2FwOiAwLjVyZW07XG4gICAgICAubGVuZ3RoIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2lyaW5TdGVuY2lsXCI7XG4gICAgICB9XG4gICAgICAubGVuZ3RoLFxuICAgICAgLnJhdGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLmNoaXBzIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxuXG4gIDpob3N0IHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_1__["appearFromLeftAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.scss'],
                animations: [_animations_appear_from_left_animation__WEBPACK_IMPORTED_MODULE_1__["appearFromLeftAnimation"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _components_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/search-input/search-input.component */ "./src/app/components/shared/search-input/search-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_shared_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/shared/list/list.component */ "./src/app/components/shared/list/list.component.ts");
/* harmony import */ var _components_layout_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/grid/grid.component */ "./src/app/components/layout/grid/grid.component.ts");
/* harmony import */ var _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/shared/button/button.component */ "./src/app/components/shared/button/button.component.ts");








const _c0 = function (a0) { return { text: a0, color: "white" }; };
function MoviesComponent_app_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MoviesComponent_app_button_2_Template_app_button_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.hideList = !ctx_r1.hideList; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.hideList ? "Un-hide list" : "Hide list"));
} }
const _c1 = function (a0, a1, a2) { return { data: a0, hide: a1, filterTerm: a2 }; };
class MoviesComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.localFilterTermRef = '';
        this.rowHeight = '2:1';
        this.hideList = false;
    }
    ngOnInit() {
        this.resetList();
        this.filterTerm$ = this.movieService.getFilterTerm();
        this.selectedGenres$ = this.movieService.getSelectedGenres();
    }
    resetList() {
        this.movies$ = this.movieService.getAllMovies();
    }
    updateFilterTerm(e) {
        if (!e.target.value) {
            this.resetList();
            this.movieService.updateFilterTerm('');
        }
        else {
            this.movieService.updateFilterTerm(e.target.value);
        }
    }
    onListItemSelect(item) {
        if (item) {
            this.selectMovie(item);
        }
    }
    selectMovie(movie) {
        this.movieService.selectMovie(movie);
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 12, vars: 20, consts: [[1, "search-container"], [3, "config", "clicked", 4, "ngIf"], [3, "config", "clicked"], [1, "movies--container"], [3, "data", "localFilterTermRef"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoviesComponent_app_button_2_Template, 1, 3, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MoviesComponent_Template_app_list_clicked_4_listener($event) { return ctx.onListItemSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.filterTerm$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.movies$), !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.filterTerm$).length || ctx.hideList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.filterTerm$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.movies$))("localFilterTermRef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx.filterTerm$));
    } }, directives: [_components_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_shared_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _components_layout_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".search-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss'],
            }]
    }], function () { return [{ type: app_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





const _c0 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.config.disabled)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.config == null ? null : ctx_r0.config.backgroundColor, ctx_r0.config == null ? null : ctx_r0.config.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.config == null ? null : ctx_r0.config.text) || "Button", "\n");
} }
function ButtonComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onClick(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r2.config == null ? null : ctx_r2.config.backgroundColor, ctx_r2.config == null ? null : ctx_r2.config.color))("disabled", ctx_r2.config.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.config == null ? null : ctx_r2.config.icon);
} }
class ButtonComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClick(event) {
        this.clicked.emit(event);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { config: "config" }, outputs: { clicked: "clicked" }, decls: 3, vars: 2, consts: [["mat-button", "", 3, "disabled", "ngStyle", "click", 4, "ngIf", "ngIfElse"], ["iconButton", ""], ["mat-button", "", 3, "disabled", "ngStyle", "click"], ["mat-icon-button", "", 3, "ngStyle", "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_button_0_Template, 2, 6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_ng_template_1_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.config == null ? null : ctx.config.icon))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
            }]
    }], function () { return []; }, { clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/genres/genres.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/genres/genres.component.ts ***!
  \**************************************************************/
/*! exports provided: GenresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresComponent", function() { return GenresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_styles_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/styles/_color */ "./src/assets/styles/_color.ts");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _services_router_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/router/router.service */ "./src/app/services/router/router.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/shared/button/button.component */ "./src/app/components/shared/button/button.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");








function GenresComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GenresComponent_mat_list_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genre_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r3, " ");
} }
const _c0 = function (a2, a3) { return { text: "Genre", icon: "filter_list", backgroundColor: a2, disabled: a3 }; };
const _c1 = function (a0) { return { hide: a0 }; };
const _c2 = function () { return { text: "Filter By Genre", color: "white" }; };
const _c3 = function () { return { text: "Reset", color: "white" }; };
class GenresComponent {
    constructor(moviesService, routerService) {
        this.moviesService = moviesService;
        this.routerService = routerService;
        this.displayList = false;
        this.color = new _assets_styles_color__WEBPACK_IMPORTED_MODULE_1__["Color"]();
        this.genres = [
            'action',
            'adventure',
            'biography',
            'comedy',
            'crime',
            'drama',
            'history',
            'mystery',
            'scifi',
            'sport',
        ];
    }
    ngOnInit() { }
    onFilterByGenre(genres) {
        const genreStrings = genres.map((genre) => genre.value);
        this.displayList = false;
        this.moviesService.updateSelectedGenres(genreStrings);
    }
    toggleList() {
        console.log('toggled');
        this.displayList = !this.displayList;
        // this.moviesService.resetSearch();
    }
    getRouteUrl() {
        console.log('HeaderComponent -> getRouteUrl -> this.routerService.getRouter();', this.routerService.getRouter());
        return this.routerService.getRouter();
    }
}
GenresComponent.ɵfac = function GenresComponent_Factory(t) { return new (t || GenresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_router_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"])); };
GenresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenresComponent, selectors: [["app-genres"]], decls: 12, vars: 13, consts: [[1, "genres"], [1, "filter"], [4, "ngIf"], [3, "config", "clicked"], [1, "list", 3, "ngClass"], [1, "buttons"], [1, "list-container"], ["genresList", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function GenresComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenresComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function GenresComponent_Template_app_button_clicked_3_listener() { return ctx.toggleList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function GenresComponent_Template_app_button_clicked_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onFilterByGenre(_r1.selectedOptions.selected); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function GenresComponent_Template_app_button_clicked_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); _r1.deselectAll(); return ctx.onFilterByGenre([]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-selection-list", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GenresComponent_mat_list_option_11_Template, 2, 2, "mat-list-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.selectedOptions.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.color.$secondary, ctx.getRouteUrl() !== "/movies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !ctx.displayList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"]], styles: ["[_nghost-%COMP%]   .list[_ngcontent-%COMP%] {\n  top: 5rem;\n  bottom: unset !important;\n}\n[_nghost-%COMP%]   .list[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZ2VucmVzL2dlbnJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFNDRVk7RUREWix3QkFBQTtBQURKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9nZW5yZXMvZ2VucmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuOmhvc3Qge1xuICAubGlzdCB7XG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcbiAgICBib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgICBncmlkLWdhcDogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG1lZGlhIHF1ZXJpZXNcbiRicmVha3BvaW50LWRlc2t0b3A6IDgyZW07IC8vIDEzMTJweDtcbiRicmVha3BvaW50LXRhYjogNTcuNmVtOyAvLyA5MjJweFxuJGJyZWFrcG9pbnQtcGhvbmU6IDQzZW07IC8vIDY4OHB4XG5cbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjZTQyOTczO1xuJHNlY29uZGFyeTogI2MyMTg1Yjtcbi8vICR0ZXJ0aWFyeTogI2ZmNzQ1OTtcbi8vICRxdWFydGlhcnk6ICNmZmQwNTA7XG5cbiRib3JkZXItcmFkaXVzOiA1cHg7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuXG4kYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuJGJveC1zaGFkb3ctaG92ZXI6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXG4gIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-genres',
                templateUrl: './genres.component.html',
                styleUrls: ['./genres.component.scss'],
            }]
    }], function () { return [{ type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _services_router_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/button/button.component */ "./src/app/components/shared/button/button.component.ts");
/* harmony import */ var app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pipes/filter-on-filter-term.pipe */ "./src/app/pipes/filter-on-filter-term.pipe.ts");





const _c0 = function (a0) { return { text: a0 }; };
function ListComponent_li_2_app_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ListComponent_li_2_app_button_2_Template_app_button_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clicked.emit(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
function ListComponent_li_2_app_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ListComponent_li_2_app_button_3_Template_app_button_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clicked.emit(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
function ListComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clicked.emit(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_li_2_app_button_2_Template, 2, 4, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_li_2_app_button_3_Template, 2, 4, "app-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", !item_r1.name);
} }
const _c1 = function (a0) { return { hide: a0 }; };
class ListComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { config: "config" }, outputs: { clicked: "clicked" }, decls: 4, vars: 7, consts: [[1, "list", 3, "ngClass"], ["class", "list--item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list--item", 3, "click"], [3, "ngSwitch"], [3, "config", "clicked", 4, "ngSwitchCase"], [3, "config", "clicked", 4, "ngSwitchDefault"], [3, "config", "clicked"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_li_2_Template, 4, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filterOnFilterTerm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.config.hide));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx.config.data, ctx.config.filterTerm));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _components_shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], pipes: [app_pipes_filter_on_filter_term_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterOnFilterTermPipe"]], styles: [".list[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class SearchInputComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.hideList = false;
    }
    ngOnInit() {
        this.filterTerm$ = this.movieService.getFilterTerm();
        this.movies$ = this.movieService.getAllMovies();
    }
    updateFilterTerm(e) {
        if (!e.target.value) {
            this.movieService.updateFilterTerm('');
        }
        else {
            this.movieService.updateFilterTerm(e.target.value);
        }
    }
    resetList() {
        this.movies$ = this.movieService.getAllMovies();
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], decls: 9, vars: 3, consts: [[1, "container--search-input"], ["appearance", "outline", 1, "filter"], ["matInput", "", "autofocus", "", "placeholder", "Search...", 3, "value", "keyup"], ["matPrefix", ""]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchInputComponent_Template_input_keyup_5_listener($event) { return ctx.updateFilterTerm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.filterTerm$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatPrefix"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   .container--search-input[_ngcontent-%COMP%]   form.filter[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRhaW5lci0tc2VhcmNoLWlucHV0IHtcbiAgICBmb3JtLmZpbHRlciB7XG4gICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-input',
                templateUrl: './search-input.component.html',
                styleUrls: ['./search-input.component.scss'],
            }]
    }], function () { return [{ type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/lazySizes.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/lazySizes.directive.ts ***!
  \***************************************************/
/*! exports provided: LazySizesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazySizesDirective", function() { return LazySizesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);




// quick and dirty fix, add to tsconfig later
// declare var require: any;
class LazySizesDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.tempImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    ngOnInit() {
        this.img = __webpack_require__("./src/assets/images/movie-covers sync recursive ^\\.\\/.*$")(`./${this.imgSrc}`).default;
        this.initLazyLoading();
        this.setAttributes();
    }
    initLazyLoading() {
        if (lazysizes__WEBPACK_IMPORTED_MODULE_2__["lazySizes"]) {
            lazysizes__WEBPACK_IMPORTED_MODULE_2__["lazySizes"].init();
        }
    }
    setAttributes() {
        this.renderer.addClass(this.el.nativeElement, 'lazyload');
        if (this.el.nativeElement.localName === 'img') {
            this.setImgSrc();
        }
        else {
            this.setElementBackgroundImage();
        }
    }
    setImgSrc() {
        this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.img);
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.tempImage);
    }
    setElementBackgroundImage() {
        this.renderer.setAttribute(this.el.nativeElement, 'data-bg', this.img);
        this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.tempImage})`);
    }
}
LazySizesDirective.ɵfac = function LazySizesDirective_Factory(t) { return new (t || LazySizesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LazySizesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazySizesDirective, selectors: [["", "lazyload", ""]], inputs: { imgSrc: ["lazyload", "imgSrc"] }, exportAs: ["lazyload"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazySizesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[lazyload]',
                exportAs: 'lazyload',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { imgSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lazyload']
        }] }); })();


/***/ }),

/***/ "./src/app/functions/filter-by-genre.function.ts":
/*!*******************************************************!*\
  !*** ./src/app/functions/filter-by-genre.function.ts ***!
  \*******************************************************/
/*! exports provided: filterByGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByGenre", function() { return filterByGenre; });
const filterByGenre = (list, genres) => {
    if (list.length && genres.length) {
        const included = [];
        list.forEach((item) => {
            genres.forEach((genre) => {
                if (item.genres.indexOf(genre) > -1 && included.indexOf(item) === -1) {
                    included.push(item);
                }
            });
        });
        return included;
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "./src/app/functions/parse-string.function.ts":
/*!****************************************************!*\
  !*** ./src/app/functions/parse-string.function.ts ***!
  \****************************************************/
/*! exports provided: parseString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseString", function() { return parseString; });
const parseString = (s) => {
    return s.toLocaleLowerCase().replace(/[^0-9a-zA-Z]/g, '');
};


/***/ }),

/***/ "./src/app/functions/set-columns.function.ts":
/*!***************************************************!*\
  !*** ./src/app/functions/set-columns.function.ts ***!
  \***************************************************/
/*! exports provided: setColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumns", function() { return setColumns; });
const setColumns = (screen) => {
    const type = screen.innerWidth >= 1200
        ? 'lg-desktop'
        : screen.innerWidth <= 576
            ? 'mobile'
            : screen.innerWidth <= 768
                ? 'tab'
                : 'desktop';
    let columnCount = 1;
    switch (type) {
        case 'mobile':
            columnCount = 1;
            break;
        case 'tab':
            columnCount = 2;
            break;
        case 'desktop':
            columnCount = 4;
            break;
        case 'lg-desktop':
            columnCount = 5;
            break;
        default:
            break;
    }
    return columnCount;
};


/***/ }),

/***/ "./src/app/functions/trim-string-extension.function.ts":
/*!*************************************************************!*\
  !*** ./src/app/functions/trim-string-extension.function.ts ***!
  \*************************************************************/
/*! exports provided: TrimStringExtensionFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimStringExtensionFunction", function() { return TrimStringExtensionFunction; });
const TrimStringExtensionFunction = (s) => {
    const trimmed = s.slice(0, -4).replace(/-/g, ' ');
    return trimmed;
};


/***/ }),

/***/ "./src/app/modules/core/store/actions/movie.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/store/actions/movie.actions.ts ***!
  \*************************************************************/
/*! exports provided: setAllMovies, getAllMovies, getOneMovie, updateFilterTerm, updateSelectedMovie, updateGenresSelected, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllMovies", function() { return setAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMovies", function() { return getAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneMovie", function() { return getOneMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilterTerm", function() { return updateFilterTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectedMovie", function() { return updateSelectedMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGenresSelected", function() { return updateGenresSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _movie_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.types */ "./src/app/modules/core/store/movie.types.ts");


// actions
const setAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["SET_MOVIES"]);
const getAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"]);
const getOneMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["GET_ONE_MOVIE"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFilterTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FILTER_TERM"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateSelectedMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SELECTED_MOVIE"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateGenresSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SELECTED_GENRES"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_movie_types__WEBPACK_IMPORTED_MODULE_1__["RESET_MOVIES"]);


/***/ }),

/***/ "./src/app/modules/core/store/app.state.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/core/store/app.state.ts ***!
  \*************************************************/
/*! exports provided: default, initializeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeState", function() { return initializeState; });
/* harmony import */ var _assets_movie_mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/movie.mock-data */ "./src/assets/movie.mock-data.ts");

class AppState {
    constructor(filterTerm, movies, selectedMovie, selectedGenres, listDisplayGenres, listDisplayFilterTerm) {
        this.filterTerm = filterTerm;
        this.movies = movies;
        this.selectedMovie = selectedMovie;
        this.selectedGenres = selectedGenres;
        this.listDisplayGenres = listDisplayGenres;
        this.listDisplayFilterTerm = listDisplayFilterTerm;
    }
}
const initializeState = () => {
    return {
        filterTerm: '',
        movies: [..._assets_movie_mock_data__WEBPACK_IMPORTED_MODULE_0__["MoviesData"]],
        selectedMovie: null,
        selectedGenres: [],
        listDisplayGenres: false,
        listDisplayFilterTerm: false,
    };
};


/***/ }),

/***/ "./src/app/modules/core/store/appReducer.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/core/store/appReducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, _appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_appReducer", function() { return _appReducer; });
/* harmony import */ var _functions_filter_by_genre_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../functions/filter-by-genre.function */ "./src/app/functions/filter-by-genre.function.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/app.state */ "./src/app/modules/core/store/app.state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/actions/movie.actions */ "./src/app/modules/core/store/actions/movie.actions.ts");




const initialState = Object(_store_app_state__WEBPACK_IMPORTED_MODULE_1__["initializeState"])();
const _appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__["getAllMovies"], (state) => state), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilterTerm"], (state, { filterTerm }) => {
    if (!filterTerm.length) {
        return Object.assign(Object.assign({}, state), { filterTerm: '', movies: state.movies });
    }
    else {
        return Object.assign(Object.assign({}, state), { filterTerm: filterTerm });
    }
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__["updateSelectedMovie"], (state, { selectedMovie }) => {
    return Object.assign(Object.assign({}, state), { selectedMovie });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__["updateGenresSelected"], (state, { selectedGenres }) => {
    return Object.assign(Object.assign({}, state), { movies: selectedGenres.length
            ? Object(_functions_filter_by_genre_function__WEBPACK_IMPORTED_MODULE_0__["filterByGenre"])(state.movies, selectedGenres)
            : initialState.movies, selectedGenres, filterTerm: '' });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_3__["reset"], () => initialState));


/***/ }),

/***/ "./src/app/modules/core/store/movie.types.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/store/movie.types.ts ***!
  \***************************************************/
/*! exports provided: GET_MOVIES, SET_MOVIES, GET_ONE_MOVIE, UPDATE_FILTER_TERM, UPDATE_SELECTED_MOVIE, UPDATE_SELECTED_GENRES, RESET_MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return GET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MOVIES", function() { return SET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_MOVIE", function() { return GET_ONE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER_TERM", function() { return UPDATE_FILTER_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_MOVIE", function() { return UPDATE_SELECTED_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_GENRES", function() { return UPDATE_SELECTED_GENRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_MOVIES", function() { return RESET_MOVIES; });
// types
const GET_MOVIES = '[Movies] Get Movies';
const SET_MOVIES = '[Movies] Set Movies';
const GET_ONE_MOVIE = '[Movies] Set Movies';
const UPDATE_FILTER_TERM = '[Movies] Update Filter Term';
const UPDATE_SELECTED_MOVIE = '[Movies] Update Selected Movie';
const UPDATE_SELECTED_GENRES = '[Movies] Update Selected Genres';
const RESET_MOVIES = '[Movies] Reset';


/***/ }),

/***/ "./src/app/modules/feature/feature.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/feature/feature.module.ts ***!
  \***************************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");












class FeatureModule {
}
FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureModule_Factory(t) { return new (t || FeatureModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/filter-on-filter-term.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filter-on-filter-term.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterOnFilterTermPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOnFilterTermPipe", function() { return FilterOnFilterTermPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/parse-string.function */ "./src/app/functions/parse-string.function.ts");



class FilterOnFilterTermPipe {
    transform(list, filterTerm) {
        return filterTerm.length
            ? list.filter((item) => {
                const includedInItem = {
                    isIncluded: function () {
                        let pName = Object(_functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__["parseString"])(this.name);
                        let pDescription = Object(_functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__["parseString"])(this.description);
                        let pGenres = Object(_functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__["parseString"])(this.genres.map((genre) => Object(_functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__["parseString"])(genre)).join());
                        let pFilterTerm = Object(_functions_parse_string_function__WEBPACK_IMPORTED_MODULE_1__["parseString"])(filterTerm);
                        const res = pName.includes(pFilterTerm) ||
                            pDescription.includes(pFilterTerm) ||
                            pGenres.includes(pFilterTerm);
                        return res ? true : false;
                    },
                };
                return includedInItem.isIncluded.apply(item) ? item : false;
            })
            : list;
    }
}
FilterOnFilterTermPipe.ɵfac = function FilterOnFilterTermPipe_Factory(t) { return new (t || FilterOnFilterTermPipe)(); };
FilterOnFilterTermPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterOnFilterTerm", type: FilterOnFilterTermPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterOnFilterTermPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterOnFilterTerm',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/movies/movies.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/movies/movies.service.ts ***!
  \***************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/actions/movie.actions */ "./src/app/modules/core/store/actions/movie.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_router_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/router/router.service */ "./src/app/services/router/router.service.ts");





class MoviesService {
    constructor(store, routerService) {
        this.store = store;
        this.routerService = routerService;
    }
    getFilterTerm() {
        return this.store.select((state) => state.app.filterTerm);
    }
    getSelectedGenres() {
        return this.store.select((state) => state.app.selectedGenres);
    }
    getAllMovies() {
        return this.store.select((state) => state.app.movies);
    }
    updateFilterTerm(value) {
        this.store.dispatch(Object(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_1__["updateFilterTerm"])({ filterTerm: value }));
    }
    resetSearch() {
        this.store.dispatch(Object(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_1__["updateFilterTerm"])({ filterTerm: '' }));
    }
    selectMovie(selectedMovie) {
        if (selectedMovie) {
            this.store.dispatch(Object(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_1__["updateSelectedMovie"])({ selectedMovie }));
            this.routerService.goToMoviesDetailsPage(selectedMovie.id);
        }
    }
    getSelectedMovie(id) {
        return this.store.select((state) => {
            const match = state.app.movies.filter((movie) => movie.id === id);
            if (match[0] !== undefined) {
                return match[0];
            }
            else {
                this.routerService.goHome();
            }
        });
    }
    updateSelectedGenres(selectedGenres) {
        return this.store.dispatch(Object(_store_actions_movie_actions__WEBPACK_IMPORTED_MODULE_1__["updateGenresSelected"])({ selectedGenres }));
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_router_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _services_router_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/router/router.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/router/router.service.ts ***!
  \***************************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class RouterService {
    constructor(router) {
        this.router = router;
    }
    goHome() {
        this.router.navigate(['/movies']);
    }
    getRouter() {
        return this.router.url;
    }
    goToMoviesDetailsPage(id) {
        this.router.navigate(['/movies', `${id}`]);
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RouterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/images/movie-covers sync recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./src/assets/images/movie-covers sync ^\.\/.*$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./american-gangster.jpg": "./src/assets/images/movie-covers/american-gangster.jpg",
	"./ant-man.jpg": "./src/assets/images/movie-covers/ant-man.jpg",
	"./bad-boys.jpg": "./src/assets/images/movie-covers/bad-boys.jpg",
	"./bridge-of-spies.jpg": "./src/assets/images/movie-covers/bridge-of-spies.jpg",
	"./deadpool.jpg": "./src/assets/images/movie-covers/deadpool.jpg",
	"./fast-and-furious-7.jpg": "./src/assets/images/movie-covers/fast-and-furious-7.jpg",
	"./gangster-squad.jpg": "./src/assets/images/movie-covers/gangster-squad.jpg",
	"./gridiron-gang.jpg": "./src/assets/images/movie-covers/gridiron-gang.jpg",
	"./jurassic-world.jpg": "./src/assets/images/movie-covers/jurassic-world.jpg",
	"./legend.jpg": "./src/assets/images/movie-covers/legend.jpg",
	"./mission-impossible-rogue-nation.jpg": "./src/assets/images/movie-covers/mission-impossible-rogue-nation.jpg",
	"./now-you-see-me.jpg": "./src/assets/images/movie-covers/now-you-see-me.jpg",
	"./project-x.jpg": "./src/assets/images/movie-covers/project-x.jpg",
	"./running-scared.jpg": "./src/assets/images/movie-covers/running-scared.jpg",
	"./sicario.jpg": "./src/assets/images/movie-covers/sicario.jpg",
	"./southpaw.jpg": "./src/assets/images/movie-covers/southpaw.jpg",
	"./spectre.jpg": "./src/assets/images/movie-covers/spectre.jpg",
	"./straight-outta-compton.jpg": "./src/assets/images/movie-covers/straight-outta-compton.jpg",
	"./the-dark-knight.jpg": "./src/assets/images/movie-covers/the-dark-knight.jpg",
	"./the-hangover.jpg": "./src/assets/images/movie-covers/the-hangover.jpg",
	"./the-man-from-uncle.jpg": "./src/assets/images/movie-covers/the-man-from-uncle.jpg",
	"./the-matrix.jpg": "./src/assets/images/movie-covers/the-matrix.jpg",
	"./the-tournament.jpg": "./src/assets/images/movie-covers/the-tournament.jpg",
	"./tracers.jpg": "./src/assets/images/movie-covers/tracers.jpg",
	"./we-are-the-millers.jpg": "./src/assets/images/movie-covers/we-are-the-millers.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/movie-covers sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/movie-covers/american-gangster.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/movie-covers/american-gangster.jpg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "american-gangster.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/ant-man.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/movie-covers/ant-man.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ant-man.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/bad-boys.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/movie-covers/bad-boys.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bad-boys.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/bridge-of-spies.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/movie-covers/bridge-of-spies.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bridge-of-spies.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/deadpool.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/movie-covers/deadpool.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "deadpool.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/fast-and-furious-7.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/movie-covers/fast-and-furious-7.jpg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fast-and-furious-7.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/gangster-squad.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/movie-covers/gangster-squad.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "gangster-squad.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/gridiron-gang.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/movie-covers/gridiron-gang.jpg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "gridiron-gang.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/jurassic-world.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/movie-covers/jurassic-world.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "jurassic-world.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/legend.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/movie-covers/legend.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "legend.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/mission-impossible-rogue-nation.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/movie-covers/mission-impossible-rogue-nation.jpg ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "mission-impossible-rogue-nation.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/now-you-see-me.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/movie-covers/now-you-see-me.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "now-you-see-me.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/project-x.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/movie-covers/project-x.jpg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "project-x.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/running-scared.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/movie-covers/running-scared.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "running-scared.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/sicario.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/movie-covers/sicario.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "sicario.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/southpaw.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/movie-covers/southpaw.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "southpaw.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/spectre.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/movie-covers/spectre.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "spectre.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/straight-outta-compton.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/movie-covers/straight-outta-compton.jpg ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "straight-outta-compton.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/the-dark-knight.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/movie-covers/the-dark-knight.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "the-dark-knight.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/the-hangover.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/movie-covers/the-hangover.jpg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "the-hangover.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/the-man-from-uncle.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/movie-covers/the-man-from-uncle.jpg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "the-man-from-uncle.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/the-matrix.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/movie-covers/the-matrix.jpg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "the-matrix.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/the-tournament.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/movie-covers/the-tournament.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "the-tournament.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/tracers.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/movie-covers/tracers.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "tracers.jpg");

/***/ }),

/***/ "./src/assets/images/movie-covers/we-are-the-millers.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/movie-covers/we-are-the-millers.jpg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "we-are-the-millers.jpg");

/***/ }),

/***/ "./src/assets/movie.mock-data.ts":
/*!***************************************!*\
  !*** ./src/assets/movie.mock-data.ts ***!
  \***************************************/
/*! exports provided: MoviesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesData", function() { return MoviesData; });
const MoviesData = [
    {
        id: 1,
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.',
        genres: ['action', 'adventure', 'comedy'],
        rate: '8.6',
        length: '1hr 48mins',
        img: 'deadpool.jpg',
    },
    {
        id: 2,
        key: 'we-are-the-millers',
        name: "We're the Millers",
        description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
        genres: ['adventure', 'comedy', 'crime'],
        rate: '7.0',
        length: '1hr 50mins',
        img: 'we-are-the-millers.jpg',
    },
    {
        id: 3,
        key: 'straight-outta-compton',
        name: 'Straight Outta Compton',
        description: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.',
        genres: ['biography', 'drama', 'history'],
        rate: '8.0',
        length: '2hr 27mins',
        img: 'straight-outta-compton.jpg',
    },
    {
        id: 4,
        key: 'gridiron-gang',
        name: 'Gridiron Gang',
        description: 'Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.',
        genres: ['crime', 'drama', 'sport'],
        rate: '6.9',
        length: '2hr 5mins',
        img: 'gridiron-gang.jpg',
    },
    {
        id: 5,
        key: 'american-gangster',
        name: 'American Gangster',
        description: 'In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.',
        genres: ['biography', 'crime', 'drama'],
        rate: '7.8',
        length: '2hr 37mins',
        img: 'american-gangster.jpg',
    },
    {
        id: 6,
        key: 'gangster-squad',
        name: 'Gangster Squad',
        description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
        genres: ['action', 'crime', 'drama'],
        rate: '6.8',
        length: '1hr 53mins',
        img: 'gangster-squad.jpg',
    },
    {
        id: 7,
        key: 'now-you-see-me',
        name: 'Now You See Me',
        description: 'An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.',
        genres: ['crime', 'mystery', 'thriller'],
        rate: '7.3',
        length: '1hr 55mins',
        img: 'now-you-see-me.jpg',
    },
    {
        id: 8,
        key: 'jurassic-world',
        name: 'Jurassic World',
        description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        genres: ['action', 'adventure', 'scifi'],
        rate: '7.1',
        length: '2hr 4mins',
        img: 'jurassic-world.jpg',
    },
    {
        id: 9,
        key: 'mission-impossible-rogue-nation',
        name: 'Mission: Impossible: Rogue Nation',
        description: 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
        genres: ['action', 'adventure', 'thriller'],
        rate: '7.5',
        length: '2hr 11mins',
        img: 'mission-impossible-rogue-nation.jpg',
    },
    {
        id: 10,
        key: 'the-man-from-uncle',
        name: 'The Man from U.N.C.L.E.',
        description: 'In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.',
        genres: ['action', 'adventure', 'thriller'],
        rate: '7.3',
        length: '1hr 56mins',
        img: 'the-man-from-uncle.jpg',
    },
    {
        id: 24,
        key: 'spectre',
        name: 'Spectre',
        description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        genres: ['action', 'adventure', 'thriller'],
        rate: '6.9',
        length: '2hr 28mins',
        img: 'spectre.jpg',
    },
    {
        id: 11,
        key: 'legend',
        name: 'Legend',
        description: 'The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.',
        genres: ['biography', 'crime', 'drama'],
        rate: '7.0',
        length: '2hr 28mins',
        img: 'legend.jpg',
    },
    {
        id: 12,
        key: 'southpaw',
        name: 'Southpaw',
        description: 'Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.',
        genres: ['action', 'drama', 'sport'],
        rate: '7.5',
        length: '2hr 4mins',
        img: 'southpaw.jpg',
    },
    {
        id: 13,
        key: 'bridge-of-spies',
        name: 'Bridge of Spies',
        description: 'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.',
        genres: ['biography', 'drama', 'thriller'],
        rate: '7.7',
        length: '2hr 22mins',
        img: 'bridge-of-spies.jpg',
    },
    {
        id: 14,
        key: 'ant-man',
        name: 'Ant-Man',
        description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
        genres: ['action', 'adventure', 'scifi'],
        rate: '7.4',
        length: '1hr 57mins',
        img: 'ant-man.jpg',
    },
    {
        id: 15,
        key: 'fast-and-furious-7',
        name: 'Fast & Furious 7',
        description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
        genres: ['action', 'crime', 'thriller'],
        rate: '7.3',
        length: '2hr 17mins',
        img: 'fast-and-furious-7.jpg',
    },
    {
        id: 16,
        key: 'tracers',
        name: 'Tracers',
        description: 'Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.',
        genres: ['action', 'crime', 'drama'],
        rate: '5.6',
        length: '1hr 34mins',
        img: 'tracers.jpg',
    },
    {
        id: 17,
        key: 'running-scared',
        name: 'Running Scared',
        description: 'A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.',
        genres: ['action', 'crime', 'drama'],
        rate: '7.4',
        length: '2hr 2mins',
        img: 'running-scared.jpg',
    },
    {
        id: 18,
        key: 'the-hangover',
        name: 'The Hangover',
        description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
        genres: ['comedy'],
        rate: '7.8',
        length: '1hr 40mins',
        img: 'the-hangover.jpg',
    },
    {
        id: 19,
        key: 'project-x',
        name: 'Project X',
        description: '3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
        genres: ['comedy', 'crime'],
        rate: '6.7',
        length: '1hr 28mins',
        img: 'project-x.jpg',
    },
    {
        id: 20,
        key: 'the-dark-knight',
        name: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        genres: ['action', 'crime', 'drama'],
        rate: '9.0',
        length: '2hr 32mins',
        img: 'the-dark-knight.jpg',
    },
    {
        id: 21,
        key: 'the-tournament',
        name: 'The Tournament',
        description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: ['action', 'thriller'],
        rate: '6.1',
        length: '1hr 35mins',
        img: 'the-tournament.jpg',
    },
    {
        id: 22,
        key: 'the-matrix',
        name: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        genres: ['action', 'scifi'],
        rate: '8.7',
        length: '2hr 16mins',
        img: 'the-matrix.jpg',
    },
    {
        id: 23,
        key: 'bad-boys',
        name: 'Bad Boys',
        description: 'Two hip detectives protect a murder witness while investigating a case of stolen heroin.',
        genres: ['action', 'comedy', 'crime'],
        rate: '6.8',
        length: '1hr 59mins',
        img: 'bad-boys.jpg',
    },
];


/***/ }),

/***/ "./src/assets/styles/_color.ts":
/*!*************************************!*\
  !*** ./src/assets/styles/_color.ts ***!
  \*************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
class Color {
    constructor() {
        this.$primary = '#c2185b';
        this.$secondary = '#e42973';
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chilliano/projects/betsson-final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map