import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { WeatherService } from '../weather.service';
var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent() {
    }
    WeatherCardComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", WeatherService)
    ], WeatherCardComponent.prototype, "weather", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeatherCardComponent.prototype, "days", void 0);
    WeatherCardComponent = tslib_1.__decorate([
        Component({
            selector: "app-weather-card",
            templateUrl: "./weather-card.component.html",
            styleUrls: ["./weather-card.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], WeatherCardComponent);
    return WeatherCardComponent;
}());
export { WeatherCardComponent };
//# sourceMappingURL=weather-card.component.js.map