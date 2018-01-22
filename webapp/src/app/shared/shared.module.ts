import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


var devextreme_dependencies= [ 
  CommonModule,
  DxButtonModule
];

var expoerts_array = devextreme_dependencies.concat([HeaderComponent,FooterComponent]) ;

@NgModule({
  imports: devextreme_dependencies ,
  exports : expoerts_array ,
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
