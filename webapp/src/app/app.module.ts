import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserSummaryComponent} from './user/summary/user-summary/user-summary.component';
import { UserVivRequestComponent } from './user/viv/user-viv-requests/user-viv-request/user-viv-request.component';
import { AuthComponent  } from './user/auth/auth.component';
import { UserVivComponent } from './user/viv/user-viv/user-viv.component';
import  { UserWelcomeAuthGuard } from './shared/services/guards/user.welcome.guard';
import { UserAuthGuard } from './shared/services/guards/user.auth.guard';
import { NotFoundComponent  } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule , 
    UserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserWelcomeComponent,
        canActivate : [UserWelcomeAuthGuard]
      }, 
      {
        path : 'userLogin',
        component : AuthComponent,
        canActivate : [UserWelcomeAuthGuard]
      }, {
        path : 'userSummary',
        component : UserSummaryComponent,
        canActivate : [UserAuthGuard]
      },
      {
        path : 'userVivConvert',
        component : UserVivComponent,
        canActivate : [UserAuthGuard]
      },
      {
        path : 'userVivRequests',
        component : UserVivRequestComponent,
        canActivate : [UserAuthGuard]
      },
      {
        path : '**',
        component : NotFoundComponent 
      }
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
