import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { CountryService } from '../country.service';
var CountryInfoComponent = /** @class */ (function () {
    function CountryInfoComponent() {
    }
    CountryInfoComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", CountryService)
    ], CountryInfoComponent.prototype, "country", void 0);
    CountryInfoComponent = tslib_1.__decorate([
        Component({
            selector: "app-country-info",
            templateUrl: "./country-info.component.html",
            styleUrls: ["./country-info.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CountryInfoComponent);
    return CountryInfoComponent;
}());
export { CountryInfoComponent };
//# sourceMappingURL=country-info.component.js.map