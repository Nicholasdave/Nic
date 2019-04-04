import * as tslib_1 from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CountryCardComponent } from "./country-card/country-card.component";
import { WeatherCardComponent } from "./weather-card/weather-card.component";
import { CountryInfoComponent } from "./country-info/country-info.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
// angular material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
var material = [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, CountryCardComponent, WeatherCardComponent, CountryInfoComponent, Page1Component, Page2Component],
            imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, material],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map