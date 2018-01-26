import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule,DxFormModule } from 'devextreme-angular';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShowAuthedDirective } from './directives/show.authed.directive';
import { UserAuthGuard} from './services/guards/user.auth.guard';
import { FakeAuthService } from './services/services/fake.auth.service';

var dependencies = [ 
  CommonModule,
  RouterModule ,
  DxButtonModule,
  DxFormModule
];



@NgModule({
  imports: dependencies ,
  exports : [ 
    CommonModule,
    RouterModule ,
    DxButtonModule,
    DxFormModule , 
    HeaderComponent, 
    FooterComponent ,
    ShowAuthedDirective
  ] ,
  declarations: [HeaderComponent, FooterComponent ,ShowAuthedDirective],
  providers : [FakeAuthService , UserAuthGuard ]
})
export class SharedModule { }
