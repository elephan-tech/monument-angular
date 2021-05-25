import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  @Input() rows: any;
  @Input() columns: any;
  @Input() display: any;

  constructor() {}

  ngOnInit(): void {}
}
