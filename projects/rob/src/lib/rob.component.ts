import { Component, Input, OnInit } from '@angular/core';
import { DataType } from './models';

@Component({
  selector: 'lib-rob',
  templateUrl: './rob.component.html',
  styles: [
  ]
})
export class RobComponent implements OnInit {
  @Input() dataType: DataType = DataType.DEFAULT;
  @Input() data: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
