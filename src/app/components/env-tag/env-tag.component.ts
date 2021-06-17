import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-env-tag',
  templateUrl: './env-tag.component.html',
  styleUrls: ['./env-tag.component.scss'],
})
export class EnvTagComponent implements OnInit {
  public env: string;
  constructor() {}

  ngOnInit(): void {
    this.env = environment.production ? 'Prod' : 'Dev';
  }
}
