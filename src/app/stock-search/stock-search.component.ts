import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent {
  placeholder:String = "Search by Firm ID";
  firmID:String;
  showError:Boolean = false;
  constructor(private router:Router) { };

  navigateToDetails():void{
      let link = ['/goToDetails/'+this.firmID];
      if(this.firmID && this.firmID.length){
         this.showError = false;
         this.router.navigate(link);
      }else
          this.showError = true;
  }
 
}
