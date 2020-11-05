import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobComponent } from './rob.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    RobComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RobComponent,
    ListComponent
  ]
})
export class RobModule { }
