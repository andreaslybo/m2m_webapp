import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  @Input() humid: Number = 0;
  @Input() temp: Number = 0;
  @Input() water: Number = 0;
  @Input() data: Number[] = [];
  temperatureOverTime = [];
  humidityOverTime = [];
  waterOverTime = [];
  displayGraphs: boolean = false;

  ngOnInit() {
    this.setData();
  }

  public toggleGraphs(): void {
    this.displayGraphs = !this.displayGraphs;
  }

  pieType = 'LineChart'; 
  options_temperature = {
    title: "Temperatur °C",
    curveType: 'function',
    legend: { position: 'bottom' }
  }

  options_humidity = {
    title: "Luftfuktighet %",
    curveType: 'function',
    legend: { position: 'bottom' }
  }

  options_water = {
    title: "Vannivå i jorden",
    curveType: 'function',
    legend: { position: 'bottom' }
  }

  constructor() { }

  setData() {
    this.data.forEach(t => {
      this.temperatureOverTime.push(['', +t[0]]);
      this.humidityOverTime.push(['', +t[1]]);
      this.waterOverTime.push(['', +t[2]]);
    });
  }
}
