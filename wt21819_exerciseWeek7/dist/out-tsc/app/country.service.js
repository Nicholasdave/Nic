import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, flatMap } from "rxjs/operators";
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get("../assets/country-capitals.json");
    };
    CountryService.prototype.getCountry = function (name) {
        console.log(name);
        return this.http.get("../assets/country-capitals.json").pipe(flatMap(function (response) { return response; }), filter(function (res) { return res["CountryName"] === name; }));
    };
    CountryService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CountryService);
    return CountryService;
}());
export { CountryService };
//# sourceMappingURL=country.service.js.map