import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { CountryService } from "../country.service";
var CountryCardComponent = /** @class */ (function () {
    function CountryCardComponent() {
    }
    CountryCardComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", CountryService)
    ], CountryCardComponent.prototype, "country", void 0);
    CountryCardComponent = tslib_1.__decorate([
        Component({
            selector: "app-country-card",
            templateUrl: "./country-card.component.html",
            styleUrls: ["./country-card.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CountryCardComponent);
    return CountryCardComponent;
}());
export { CountryCardComponent };
//# sourceMappingURL=country-card.component.js.map