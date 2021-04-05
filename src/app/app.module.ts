import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeDataService } from './service/welcome-data.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http'
import { RouteGuardService } from './service/route-guard.service';
import { FormsModule } from '@angular/forms';


const appRoutes:Routes=[
  {path:'welcome',component:WelcomeComponent},
  {path:'employee',component:EmployeelistComponent},
  {path:'employee/:id',component:EmployeeComponent,canActivate:[RouteGuardService]}
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    WelcomeComponent,
    MenuComponent,
    FooterComponent,
    //WelcomeDataService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
