import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserSummaryComponent} from './user/summary/user-summary/user-summary.component'
import { AuthComponent  } from './user/auth/auth.component';
import { UserVivComponent } from './user/viv/user-viv/user-viv.component';

import { UserAuthGuard } from './shared/services/guards/user.auth.guard'

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
      }, {
        path : 'userSummary',
        component : UserSummaryComponent,
        canActivate : [UserAuthGuard]
      },
      {
        path : 'userVivConvert',
        component : UserVivComponent,
        canActivate : [UserAuthGuard]
      }
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
