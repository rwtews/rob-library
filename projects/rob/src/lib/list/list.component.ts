import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
