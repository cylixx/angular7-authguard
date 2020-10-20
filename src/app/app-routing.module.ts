import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent, canActivateChild: [AuthGuardService],
    children: [
      { path: "ch", component: ChildComponent }
    ]
    //, children: [{path: "ch1", component: Child1Component}]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
