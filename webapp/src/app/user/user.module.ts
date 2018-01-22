import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWelcomeComponent  } from './user-welcome/user-welcome.component' ; 
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserWelcomeComponent,
    AuthComponent
  ],
  exports : [
    UserWelcomeComponent,
    AuthComponent
  ]
})
export class UserModule { }
