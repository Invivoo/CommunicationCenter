import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule,DxFormModule } from 'devextreme-angular';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


var dependencies = [ 
  CommonModule,
  RouterModule ,
  DxButtonModule,
  DxFormModule
];

var expoerts_array = dependencies.concat([HeaderComponent,FooterComponent]) ;

@NgModule({
  imports: dependencies ,
  exports : expoerts_array ,
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
