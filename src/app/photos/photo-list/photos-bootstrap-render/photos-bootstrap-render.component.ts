import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos-bootstrap-render',
  templateUrl: './photos-bootstrap-render.component.html',
  styleUrls: ['./photos-bootstrap-render.component.css']
})
export class PhotosBootstrapRenderComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  @Input() filter: string = "";

  rows: any[] = [];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns();
    }
  }

  ngOnInit(): void {
  }

  groupColumns(): any[] {
    const newRows = [];
    const COLUMNS_PER_ROW = 3;

    for (let i = 0; i < this.photos.length; i += COLUMNS_PER_ROW) {
      newRows.push(this.photos.slice(i, i + COLUMNS_PER_ROW));
    }

    return newRows;
  }
}
