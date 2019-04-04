import { Component, OnInit } from "@angular/core";
import { CountryService} from '../country.service';
import { WeatherService} from '../weather.service';

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  countries = null;
  constructor(private cs : CountryService) {}

  ngOnInit() {
    this.cs.getCountries().subscribe(country => {
      this.countries = country;
    })
  }
}
