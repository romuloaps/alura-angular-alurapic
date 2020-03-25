import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos-bootstrap-render',
  templateUrl: './photos-bootstrap-render.component.html',
  styleUrls: ['./photos-bootstrap-render.component.css']
})
export class PhotosBootstrapRenderComponent implements OnInit {

  @Input() photos: Photo[] = []

  constructor() { }

  ngOnInit(): void {
  }
s}
