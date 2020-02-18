import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponentComponent,
    RegistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
 MatIconModule,
 MatInputModule,
 MatMenuModule,
 MatButtonModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatCheckboxModule,
 MatToolbarModule,
 MatRadioModule,
 MatListModule,
 FormsModule ,     
MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
