import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HodCardsComponent } from './hod-cards/hod-cards.component';
import { StaffLeavesComponent } from './staff-leaves/staff-leaves.component';
import { AppliedLeavesComponent } from './applied-leaves/applied-leaves.component';
import { NoLeavesComponent } from './no-leaves/no-leaves.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'hodCards', component : HodCardsComponent},
  {path: 'staffLeaves', component : StaffLeavesComponent},
  {path: 'applied-leaves', component : AppliedLeavesComponent},
  {path: 'noLeaves', component : NoLeavesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
