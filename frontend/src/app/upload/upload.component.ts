import { aidTypes } from './../classes/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  aids = aidTypes;
  constructor() { }

  ngOnInit() {
  }

}
