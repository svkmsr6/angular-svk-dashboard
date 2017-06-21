import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { DashboardApiService} from './services/dashboard-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    DashboardComponent,
    StockSearchComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule    
  ],
  providers: [DashboardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
