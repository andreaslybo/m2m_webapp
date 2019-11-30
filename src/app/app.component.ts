import { Component, OnInit } from '@angular/core';
import { PlantComponent } from './plant/plant.component';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'iFarm 1.0';
  plant: Plant;
  updates: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    this.updates += 1;

    setInterval(() => {
      this.getData();
      this.updates += 1;
      console.log(this.updates);
    }, 30000);
  }

  getData() {
    return this.http.get('https://api.thingspeak.com/channels/922969/feeds.json?api_key=EV26805EGG1BZVEJ&results=5')
      .subscribe((res: any) => {
          console.log(res);
          let data = [];
          res.feeds.forEach((t: any) => {
            data.push([+t.field1, +t.field2, +t.field3]);
          });
          let newPlant = new Plant(res.feeds[4].field1, res.feeds[4].field2, res.feeds[4].field3, data);
          console.log(newPlant);
          this.plant = newPlant;
      });
  }
}
