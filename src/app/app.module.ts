import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule,Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [

  {path:'appareils', component: AppareilViewComponent},
  {path:'auth', component: AuthComponent},
  {path:'', component: AppareilViewComponent},

]

@NgModule({
  declarations: [

    AppComponent,
    MyFirstComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), 
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
