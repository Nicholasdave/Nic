import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../country.service";
import { WeatherService } from "../weather.service";
var Page2Component = /** @class */ (function () {
    function Page2Component(route, cs, ws) {
        this.route = route;
        this.cs = cs;
        this.ws = ws;
        this.countryName = null;
        this.country = null;
        this.weather = null;
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (element) {
            _this.countryName = element.get("countryName");
            console.log(_this.countryName);
            _this.cs.getCountry(_this.countryName).subscribe(function (country) {
                _this.country = country;
                _this.ws.getWeather(country["CapitalLatitude"], country["CapitalLongitude"]).subscribe(function (weather) {
                    _this.weather = weather;
                    console.log(weather);
                });
            });
        });
    };
    Page2Component = tslib_1.__decorate([
        Component({
            selector: "app-page2",
            templateUrl: "./page2.component.html",
            styleUrls: ["./page2.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CountryService, WeatherService])
    ], Page2Component);
    return Page2Component;
}());
export { Page2Component };
//# sourceMappingURL=page2.component.js.map