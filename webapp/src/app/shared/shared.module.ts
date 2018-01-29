import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule,DxFormModule , DxChartModule } from 'devextreme-angular';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShowAuthedDirective } from './directives/show.authed.directive';
import { UserAuthGuard} from './services/guards/user.auth.guard';
import { FakeAuthService } from './services/services/fake.auth.service';
import { UserVivService } from './services/services/vivs/user.viv.service';

var dependencies = [ 
  CommonModule,
  RouterModule ,
  DxButtonModule,
  DxFormModule,
  DxChartModule
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
    ShowAuthedDirective,
    DxChartModule
  ] ,
  declarations: [HeaderComponent, FooterComponent ,ShowAuthedDirective],
  providers : [FakeAuthService , UserAuthGuard ,UserVivService ]
})
export class SharedModule { }
