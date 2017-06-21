import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent {
  placeholder:String = "Search by username";
  constructor(private router:Router) { };

  navigateToDetails():void{
      let link = ['/goToDetails'];
      this.router.navigate(link);
  }
 
}
