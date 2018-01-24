import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWelcomeComponent  } from './user-welcome/user-welcome.component' ; 
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { UserSummaryComponent } from './summary/user-summary/user-summary.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserWelcomeComponent,
    AuthComponent,
    UserSummaryComponent
  ],
  exports : [
    UserWelcomeComponent,
    AuthComponent
  ]
})
export class UserModule { }
