import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  companyName:string = "SVK Dashboard";
  copyrightYear:string = "2017";
  location:string = "BTM Stage 2";
  city:string = "Bengaluru";
  country:string = "India";
  phone:string = "+91 9831686226";
  email:string = "support@svkDashboard.com";
  constructor() { }
}
