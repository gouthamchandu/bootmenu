import { Component, OnInit } from '@angular/core';
import demodata from '../../assets/demo.json';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  Players: any = demodata;
  constructor() { }

  ngOnInit() {
  }

}
