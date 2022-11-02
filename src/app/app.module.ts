import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatingComponent } from './components/calculating/calculating.component';
import { TableWasteComponent } from './components/calculating/components/table-waste/table-waste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatingComponent,
    TableWasteComponent,
  ],
  imports: [BrowserModule,MatSnackBarModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule,MatCardModule,MatChipsModule,MatInputModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
