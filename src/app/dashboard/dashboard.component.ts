import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../services/dashboard-api.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listOfTopUsers: any;

  constructor(private dashboardApiService: DashboardApiService) {

  }

  ngOnInit() {
    this.dashboardApiService.getPosts()
      .subscribe(data => {
        this.listOfTopUsers = Array.from(data);
        console.log(this.listOfTopUsers)
      },
      error => console.error(error.message));


  }
}
