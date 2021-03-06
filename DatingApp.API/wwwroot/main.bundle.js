webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreventUnsavedChanges; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "../../../../../src/app/_models/pagination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatedResult; });
var PaginatedResult = (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "../../../../../src/app/_pipes/time-ago-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeAgoPipe = (function () {
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update ever 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    TimeAgoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeAgo',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/lists.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListsResolver = (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    ListsResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-detail.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberDetailResolver = (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    MemberDetailResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-edit.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemberEditResolver = (function () {
    function MemberEditResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    MemberEditResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-list.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberListResolver = (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    MemberListResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/message.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagesResolver = (function () {
    function MessagesResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).catch(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    MessagesResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alertify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        this.photoUrl = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'auth/login', model, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json') })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
                if (_this.currentUser.photoUrl !== null) {
                    _this.changeMemberPhoto(_this.currentUser.photoUrl);
                }
                else {
                    _this.changeMemberPhoto('../../assets/user.png');
                }
            }
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'auth/register', user, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json') });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__("../../../../../src/app/_models/pagination.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (likesParam === 'Likers') {
            params = params.append('Likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('Likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        return this.authHttp
            .get(this.baseUrl + 'users', { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp
            .get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.authHttp
            .put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.authHttp
            .delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.authHttp.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.authHttp.post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.markAsRead = function (userId, messageId) {
        return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {}).subscribe();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser.photoUrl !== null) {
                this.authService.changeMemberPhoto(user.photoUrl);
            }
            else {
                this.authService.changeMemberPhoto('../assets/user.png');
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAccessToken */
/* unused harmony export jwtConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__members_member_card_member_card_component__ = __webpack_require__("../../../../../src/app/members/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_tabs_tabs_module__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_prevent_unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__members_photo_editor_photo_editor_component__ = __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_bootstrap_buttons_buttons_module__ = __webpack_require__("../../../../ngx-bootstrap/buttons/buttons.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__members_member_messages_member_messages_component__ = __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_error_interceptor__ = __webpack_require__("../../../../../src/app/_services/error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_time_ago_pipe__ = __webpack_require__("../../../../../src/app/_pipes/time-ago-pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































function getAccessToken() {
    return localStorage.getItem('token');
}
var jwtConfig = {
    tokenGetter: getAccessToken,
    whitelistedDomains: ['localhost:5000']
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__members_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__lists_lists_component__["a" /* ListsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__members_member_card_member_card_component__["a" /* MemberCardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                __WEBPACK_IMPORTED_MODULE_27__members_photo_editor_photo_editor_component__["a" /* PhotoEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pipes_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_34__members_member_messages_member_messages_component__["a" /* MemberMessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_tabs_tabs_module__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_28_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31_ngx_bootstrap_buttons_buttons_module__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_36__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: jwtConfig
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_alertify_service__["a" /* AlertifyService */],
                __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */],
                __WEBPACK_IMPORTED_MODULE_23__resolvers_member_list_resolver__["a" /* MemberListResolver */],
                __WEBPACK_IMPORTED_MODULE_25__resolvers_member_edit_resolver__["a" /* MemberEditResolver */],
                __WEBPACK_IMPORTED_MODULE_26__guards_prevent_unsaved_changes_guard__["a" /* PreventUnsavedChanges */],
                __WEBPACK_IMPORTED_MODULE_32__resolvers_lists_resolver__["a" /* ListsResolver */],
                __WEBPACK_IMPORTED_MODULE_33__resolvers_message_resolver__["a" /* MessagesResolver */],
                __WEBPACK_IMPORTED_MODULE_37__services_error_interceptor__["a" /* ErrorInterceptorProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!registerMode\" class=\"text-center\">\n  <h1>Find your match</h1>\n  <p class=\"lead\">Come on in to find your matches... All you need to do is sign up!</p>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"registerToggle()\">Register</button>\n    <button class=\"btn btn-info btn-lg\">Learn more</button>\n  </div>\n</div>\n\n<div *ngIf=\"registerMode\" class=\"container\">\n  <div class=\"col-md-4 col-md-offset-4\">\n    <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I like</button>\n    </div>\n  </div>\n\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve liked'}} : {{pagination.totalItems}}</h2>\n\n  <div class=\"row equal\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n\n  <div class=\"text-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n      [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n      lastText=\"&raquo;\"></pagination>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsComponent = (function () {
    function ListsComponent(authService, alertify, route, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
        this.userService = userService;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__("../../../../../src/app/lists/lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 5px;\r\n}\r\n\r\n.panel-body img {\r\n    width: 100%;\r\n}\r\n\r\nh5 {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #3a3c41;\r\n    margin-top: 1px;\r\n    margin-bottom: 1px;\r\n}\r\n\r\nh5 small {\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n\r\nimg {\r\n    -webkit-transform: scale(1, 1);\r\n            transform: scale(1, 1);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.panel:hover img {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.panel-image {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.panel:hover .member-icons {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"panel-image\">\n      <img src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n      <ul class=\"list-inline member-icons animate text-center\">\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\"><i class=\"fa fa-user\"></i></button></li>\n        <li><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: '3'}\"><i class=\"fa fa-envelope\"></i></button></li>\n      </ul>\n    </div>\n    <div class=\"text-center\">\n      <h5><i class=\"fa fa-user\"></i> {{user.knownAs}}, {{user.age}}</h5>\n    </div>\n    <div class=\"text-center\">\n      <h5><small>{{user.city}}</small></h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCardComponent = (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(function (data) {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__("../../../../../src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-justified>.btn-group .btn {\r\n    width: 95%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1>{{user.knownAs}}'s Profile</h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <img class=\"profile-image thumbnail\" src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n        <div class=\"panel-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}, {{user.country}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member Since:</strong>\n            <p>{{user.created | date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"btn-group-justified\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\">Like</button>\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-success\" (click)=\"selectTab(3)\">Message</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\" #memberTabs>\n          <tab heading=\"About {{user?.knownAs}}\">\n            <h4>Description</h4>\n            <p>{{user.introduction}}</p>\n            <h4>Looking For:</h4>\n            <p>{{user.lookingFor}}</p>\n          </tab>\n          <tab heading=\"Interests\">\n            <h4>Interests</h4>\n            <p>{{user.interests}}</p>\n          </tab>\n          <tab heading=\"Photos\">\n              <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>              \n          </tab>\n          <tab heading=\"Messages\">\n            <app-member-messages [userId]=\"user.id\"></app-member-messages>\n          </tab>\n        </tabset>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs_tabset_component__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.component.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailComponent = (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params['tab'];
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
        this.galleryOptions = [{
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryAnimation"].Slide,
                preview: false
            }];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('memberTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs_tabset_component__["a" /* TabsetComponent */])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"alert alert-info\" [hidden]=\"!editForm.dirty\">\n        <p>\n          <strong>Information:</strong> You have made changes. Any unsaved changes will be lost!</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <img class=\"profile-image thumbnail\" src=\"{{photoUrl}}\" alt=\"{{user.knownAs}}\">\n        <div class=\"panel-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}, {{user.country}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member Since:</strong>\n            <p>{{user.created | date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n              <h4>Description</h4>\n              <textarea class=\"form-control\" name=\"introduction\" rows=\"6\" [(ngModel)]=\"user.introduction\"></textarea>\n              <h4>Looking For:</h4>\n              <textarea class=\"form-control\" name=\"lookingFor\" rows=\"6\" [(ngModel)]=\"user.lookingFor\"></textarea>\n              <h4>Interests:</h4>\n              <textarea class=\"form-control\" name=\"interests\" rows=\"6\" [(ngModel)]=\"user.interests\"></textarea>\n              <h4>Location Details: </h4>\n              <div class=\"form-inline\">\n                <label for=\"city\">City: </label>\n                <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\n                <label for=\"country\">Country: </label>\n                <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"user.country\">\n              </div>\n            </form>\n          </tab>\n\n          <tab heading=\"Edit Photos\">\n            <app-photo-editor [photos]=\"user.photos\" (GetMemberPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\n          </tab>\n        </tabset>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = (function () {
    function MemberEditComponent(route, authService, alertify, userService) {
        this.route = route;
        this.authService = authService;
        this.alertify = alertify;
        this.userService = userService;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NgForm */])
    ], MemberEditComponent.prototype, "editForm", void 0);
    MemberEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".equal {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -ms-flex-line-pack: end;\r\n        align-content: flex-end;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"text-center\">\n    <h2>Your matches = {{pagination.totalItems}} found</h2>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"minAge\">Age From</label>\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"maxAge\">Age To</label>\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"gender\">Show: </label>\n        <select class=\"form-control\" style=\"width: 130px\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userParams.gender\">\n          <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n            {{gender.display}}\n          </option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n      <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\" (click)=\"resetFilters()\">Reset Filter</button>\n      <div class=\"pull-right\">\n          <label style=\"margin-right: 10px\">Order By: </label>\n          <div class=\"btn-group\">\n            <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"lastActive\" (click)=\"loadUsers()\">Last Active</button>\n            <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"created\" (click)=\"loadUsers()\">Newest Members</button>\n          </div>\n      </div>\n    </form>\n  </div>\n  <br>\n\n\n  <div class=\"row equal\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"text-center\">\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n    [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n    lastText=\"&raquo;\"></pagination>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = (function () {
    function MemberListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__("../../../../../src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.img-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.panel-body {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No messages yet... say hi my using the message box below</p>\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- to them -->\n        <div *ngIf=\"message.senderId == userId\">\n          <span class=\"chat-img pull-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted pull-right\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n\n        <!-- to me -->\n        <div *ngIf=\"message.senderId != userId\">\n            <span class=\"chat-img pull-right\">\n              <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                  <small class=\"text-muted\">\n                      <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                      <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\n                      <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{message.dateRead | timeAgo}})</span>\n                    </small>\n                <strong class=\"primary-font pull-right\">{{message.senderKnownAs}}</strong>\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n  \n      </li>\n    </ul>\n\n  </div>\n  <div class=\"panel-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\" \n          class=\"form-control input-sm\" \n          required\n          name=\"content\"\n          [(ngModel)]=\"newMessage.content\"\n          placeholder=\"send a private message\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Send</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberMessagesComponent = (function () {
    function MemberMessagesComponent(userService, alertify, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.userId)
            .do(function (messages) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](messages, function (message) {
                if (message.isRead === false && message.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, message.id);
                }
            });
        })
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "userId", void 0);
    MemberMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.thumbnail {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over { border: dotted 3px red; }\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img class=\"thumbnail\" src=\"{{photo.url}}\" alt=\"\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-xs\" \n        [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-default'\"\n        [disabled]=\"photo.isMain\" \n        (click)=\"setMainPhoto(photo)\">Main</button>\n      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"deletePhoto(photo.id)\" [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <h3>Add Photos</h3>\n\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Drop Photos here\n    </div>\n\n    Multiple\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n    <br/> Single\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td>\n            <strong>{{ item?.file?.name }}</strong>\n          </td>\n          <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div>\n      <div>\n        Queue progress:\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n      </button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoEditorComponent = (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.GetMemberPhotoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            autoUpload: false,
            removeAfterUpload: true,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMain = __WEBPACK_IMPORTED_MODULE_6_underscore__["findWhere"](_this.photos, { isMain: true });
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this photo?', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, id).subscribe(function () {
                _this.photos.splice(__WEBPACK_IMPORTED_MODULE_6_underscore__["findIndex"](_this.photos, { id: id }), 1);
                _this.alertify.success('Photo has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete photo');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "GetMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_alertify_service__["a" /* AlertifyService */]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n  max-height: 50px;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n  vertical-align: middle;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab:'3'}\">\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n            <img [src]=\"message.senderPhotoUrl\" class=\"img-circle\">\n            <strong>{{message.senderKnownAs}}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n            <img [src]=\"message.recipientPhotoUrl\" class=\"img-circle\">\n            <strong>{{message.recipientKnownAs}}</strong>\n          </div>\n        </td>\n        <td>{{message.messageSent | timeAgo}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n    <div class=\"text-center\">\n        <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n          [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n          lastText=\"&raquo;\"></pagination>\n      </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = (function () {
    function MessagesComponent(authService, alertify, route, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
        this.userService = userService;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete the message?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _this.messages.splice(__WEBPACK_IMPORTED_MODULE_5_underscore__["findIndex"](_this.messages, { id: id }), 1);
                _this.alertify.success('message has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete the message');
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu li, .dropdown-toggle {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Dating App</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"loggedIn()\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/members']\">Matches</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/lists']\">Lists</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messages</a></li>\n      </ul>\n\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"navbar-form navbar-right\" (ngSubmit)=\"login()\">\n        <div class=\"form-group\">\n          <input type=\"text\" #username=\"ngModel\" placeholder=\"Username\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" #password=\"ngModel\" placeholder=\"Password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\n      </form>\n\n      <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav navbar-right\">\n        <li>\n          <img src=\"{{photoUrl}}\" alt=\"\">\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a (click)=\"false\" class=\"dropdown-toggle\" dropdownToggle>Welcome {{authService.decodedToken?.unique_name | titlecase}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" *dropdownMenu>\n            <li><a [routerLink]=\"['/member/edit']\"><i class=\"fa fa-user\"></i> Edit Profile</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n\n    </div><!--/.navbar-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success('logged in successfully');
        }, function (error) {
            _this.alertify.error('Failed to log in');
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n\n  <hr>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"female\" formControlName=\"gender\">Female\n    </label>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').errors && registerForm.get('username').touched}\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\n      Username is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')}\">\n    <input class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">Known as is required</span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')}\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Date of Birth\" bsDatepicker [bsConfig]=\"bsConfig\" formControlName=\"dateOfBirth\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of birth is required</span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('city').touched && registerForm.get('city').hasError('required')}\">\n    <input class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('country').touched && registerForm.get('country').hasError('required')}\">\n    <input class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is required</span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').errors && registerForm.get('password').touched}\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\n      Password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\n      Password must be at least 4 characters\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\n      Password cannot exceed 8 characters\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('confirmPassword').errors \n    && registerForm.get('confirmPassword').touched || registerForm.get('confirmPassword').touched \n    && registerForm.hasError('mismatch')}\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\n      Confirm password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').touched \n        && registerForm.hasError('mismatch')\">\n      Confirm password must match password\n    </span>\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, router, alertify, fb) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.fb = fb;
        this.cancelRegister = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            knownAs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            dateOfBirth: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(8)]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_prevent_unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");













var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'members', component: __WEBPACK_IMPORTED_MODULE_1__members_member_list_member_list_component__["a" /* MemberListComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_7__resolvers_member_list_resolver__["a" /* MemberListResolver */] } },
            { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_5__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_6__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */] } },
            { path: 'member/edit', component: __WEBPACK_IMPORTED_MODULE_8__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                resolve: { user: __WEBPACK_IMPORTED_MODULE_9__resolvers_member_edit_resolver__["a" /* MemberEditResolver */] }, canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__guards_prevent_unsaved_changes_guard__["a" /* PreventUnsavedChanges */]] },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__["a" /* MessagesComponent */], resolve: { messages: __WEBPACK_IMPORTED_MODULE_12__resolvers_message_resolver__["a" /* MessagesResolver */] } },
            { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__["a" /* ListsComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_11__resolvers_lists_resolver__["a" /* ListsResolver */] } },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map