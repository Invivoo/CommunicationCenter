import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule,DxFormModule , DxChartModule, DxDataGridModule , DxRadioGroupModule , DxNumberBoxModule , DxSelectBoxModule } from 'devextreme-angular';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShowAuthedDirective } from './directives/show.authed.directive';
import { UserAuthGuard} from './services/guards/user.auth.guard';
import { FakeAuthService } from './services/services/fake.auth.service';
import { UserVivService } from './services/services/vivs/user.viv.service';
import { UserHolidayService } from './services/services/holidays/user.holiday.service';
import { UserWelcomeAuthGuard } from '../shared/services/guards/user.welcome.guard';

var dependencies = [ 
  CommonModule,
  RouterModule ,
  DxButtonModule,
  DxFormModule,
  DxChartModule,
  DxDataGridModule,
  DxRadioGroupModule,
  DxNumberBoxModule,
  DxSelectBoxModule
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
    DxChartModule,
    DxDataGridModule,
    DxRadioGroupModule,
    DxNumberBoxModule,
    DxSelectBoxModule
  ] ,
  declarations: [HeaderComponent, FooterComponent ,ShowAuthedDirective],
  providers : [FakeAuthService , UserAuthGuard ,UserVivService , UserHolidayService , UserWelcomeAuthGuard ]
})
export class SharedModule { }
