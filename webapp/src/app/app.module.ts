import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { AuthComponent  } from './user/auth/auth.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule , 
    UserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserWelcomeComponent
      }, 
      {
        path : 'userLogin',
        component : AuthComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
