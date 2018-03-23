import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { ReviewrestComponent } from './reviewrest/reviewrest.component';
import { UpdaterestComponent } from './updaterest/updaterest.component';
import { NewreviewComponent } from './newreview/newreview.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    NewrestaurantComponent,
    ReviewrestComponent,
    UpdaterestComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
