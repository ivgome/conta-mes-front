import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatingComponent } from './components/calculating/calculating.component';
import { TableWasteComponent } from './components/calculating/components/table-waste/table-waste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatingComponent,
    TableWasteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
