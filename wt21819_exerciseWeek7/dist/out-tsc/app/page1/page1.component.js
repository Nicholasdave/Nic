import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CountryService } from '../country.service';
var Page1Component = /** @class */ (function () {
    function Page1Component(cs) {
        this.cs = cs;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = tslib_1.__decorate([
        Component({
            selector: "app-page1",
            templateUrl: "./page1.component.html",
            styleUrls: ["./page1.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [CountryService])
    ], Page1Component);
    return Page1Component;
}());
export { Page1Component };
//# sourceMappingURL=page1.component.js.map