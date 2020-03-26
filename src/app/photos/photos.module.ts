import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosBootstrapRenderComponent } from './photo-list/photos-bootstrap-render/photos-bootstrap-render.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
    declarations: [
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosBootstrapRenderComponent,
        FilterByDescription
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule { }