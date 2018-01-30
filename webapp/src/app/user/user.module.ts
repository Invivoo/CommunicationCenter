import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWelcomeComponent  } from './user-welcome/user-welcome.component' ; 
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { UserSummaryComponent } from './summary/user-summary/user-summary.component';
import { UserVivComponent } from './viv/user-viv/user-viv.component';
import { UserVivCurveComponent } from './viv/user-viv-curve/user-viv-curve.component';
import { UserVivRequestComponent } from './viv/user-viv-requests/user-viv-request/user-viv-request.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserWelcomeComponent,
    AuthComponent,
    UserSummaryComponent,
    UserVivComponent,
    UserVivCurveComponent,
    UserVivRequestComponent
  ],
  exports : [
    UserWelcomeComponent,
    AuthComponent
  ]
})
export class UserModule { }
