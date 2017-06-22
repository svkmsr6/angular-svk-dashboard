import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardApiService } from '../services/dashboard-api.service';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit{

  stockDetail:any;

  constructor(
    private dashboardApiInstance: DashboardApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    //let firmID = this.route.snapshot.params["firmID"];   
        
    this.dashboardApiInstance.getStockDetail('Bret')
        .subscribe(data => this.stockDetail = Array.from(data)[0]);
    
    console.log(this.stockDetail);
 
  }
 
}
