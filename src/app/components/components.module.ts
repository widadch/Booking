import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { DnavbarComponent } from './Dnavbar/Dnavbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    DnavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    DnavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
