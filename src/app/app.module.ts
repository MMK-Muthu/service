import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransctionsComponent } from './last-few-transctions/last-few-transctions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { MultiSelectComponent } from './common/multi-select/multi-select.component';
import { TableComponent } from './common/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransctionsComponent,
    TopThreeProductsComponent,
    MultiSelectComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
