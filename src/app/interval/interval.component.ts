import { Component, OnInit } from '@angular/core';
import { Interval } from '../interval';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  xInterval: Interval = {
    name: 'X Axis Interval',
    lowBound: "0",
    highBound: "0",
  };
  yInterval: Interval = {
    name: 'Y Axis Interval',
    lowBound: "0",
    highBound: "0"
  };

  //This function stores in C# the new X and Y axis range
  myFunction(){
    this.http.post('http://localhost:3000/api/setx', this.xInterval).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
    this.http.post('http://localhost:3000/api/sety', this.yInterval).subscribe
    (
      res => {
        console.log(res);
      },
      err => {
        console.log("Error ocurred");
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
