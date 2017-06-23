import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardApiService } from '../services/dashboard-api.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  noResult:Boolean = true; 
  noResultMessage:String = "Loading..";
  stockDetail: any = {};

  constructor(
    private dashboardApiInstance: DashboardApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let firmID: String = this.route.snapshot.params["firmID"];    
    this.dashboardApiInstance.getStockDetail(firmID)
      .subscribe(data => this.assignResult(Array.from(data)[0]));
  }

  assignResult(result): void {
    if (result){
      this.noResult = false;
      this.stockDetail = result;
    }
    else
      this.noResultMessage = "No Results found";
  }

}
