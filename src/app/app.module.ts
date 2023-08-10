import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HttpHandlerService } from './shared/services/httpHandler.service';
import { HodCardsComponent } from './hod-cards/hod-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffLeavesComponent } from './staff-leaves/staff-leaves.component';
import { MatFormFieldModule }from '@angular/material/form-field'
import { MatDatepickerModule }from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { AppliedLeavesComponent } from './applied-leaves/applied-leaves.component';
import { NoLeavesComponent } from './no-leaves/no-leaves.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HodCardsComponent,
    StaffLeavesComponent,
    AppliedLeavesComponent,
    NoLeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    
  ],
  providers: [
    HttpHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
