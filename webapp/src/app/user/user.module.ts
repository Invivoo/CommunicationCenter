import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWelcomeComponent  } from './user-welcome/user-welcome.component' ; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserWelcomeComponent
  ],
  exports : [
    UserWelcomeComponent
  ]
})
export class UserModule { }
