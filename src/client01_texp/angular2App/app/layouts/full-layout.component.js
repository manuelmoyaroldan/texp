var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './full-layout.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
//# sourceMappingURL=full-layout.component.js.map