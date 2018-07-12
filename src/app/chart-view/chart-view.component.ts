import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {
  currentX: string = "0";
  currentY: string = "0";

  //This function takes the current value of X axis
  getX(){
    this.http.get('http://localhost:3000/api/getx').subscribe
    (
      res => {
        console.log(res);
        this.currentX = res["value"];
      },
      err => {
        console.log("Error ocurred");
      }
    );
    this.chartLabels.push(Number(this.currentX));
    this.chartLabels.sort();
  }

  //This function takes the current value of Y axis
  getY(){
    this.http.get('http://localhost:3000/api/gety').subscribe
    (
      res => {
        console.log(res);
        this.currentY = res["value"];
      },
      err => {
        console.log("Error ocurred");
      }
    );
    this.chartY.push(Number(this.currentY));
  }

  //This function makes C# start to generate X values
  startX(){
    this.http.post('http://localhost:3000/api/startx', {}).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
  }

  //This function makes C# stop to generate X values
  stopX(){
    this.http.post('http://localhost:3000/api/stopx', {}).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
  }

  //This function makes C# start to generate Y values
  startY(){
    this.http.post('http://localhost:3000/api/starty', {}).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
  }

  //This function makes C# stop to generate X values
  stopY(){
    this.http.post('http://localhost:3000/api/stopy', {}).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
  }

  //Chart data variables
  chartOptions = {responsive: true};
  chartY = [0,0,0];
  chartData = [{data: this.chartY, label:"Account A"}];
  chartLabels = [0,0,0];
  onChartClick(event){
    console.log(event);
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
