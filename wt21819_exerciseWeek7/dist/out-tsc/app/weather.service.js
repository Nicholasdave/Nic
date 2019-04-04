import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.apiKey = "5f1ea22a92e9fd7de17d44976ec4252a";
        this.baseUrl = "https://api.darksky.net/forecast/" + this.apiKey + "/";
    }
    WeatherService.prototype.getWeather = function (lat, lng) {
        var url = "" + this.baseUrl + lat + "," + lng + "?units=si&exclude=minutely,hourly,flags,alert";
        return this.http.get(url);
    };
    WeatherService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], WeatherService);
    return WeatherService;
}());
export { WeatherService };
//# sourceMappingURL=weather.service.js.map