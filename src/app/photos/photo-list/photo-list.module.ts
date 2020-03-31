import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosBootstrapRenderComponent } from './photos-bootstrap-render/photos-bootstrap-render.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosBootstrapRenderComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule { }