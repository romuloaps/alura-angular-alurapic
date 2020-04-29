import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { UploadedPhoto } from './uploaded-photo';
import { ApiUtils } from '../../core/utils/api-utils';

@Injectable({
    providedIn: "root"
})
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string, page?: number): Observable<Photo[]> {
        let params = new HttpParams();
        if (page) {
            params = params.append('page', page.toString());
        }

        return this.http.get<Photo[]>(`${ApiUtils.API_URL_PREFIX}/${userName}/photos`, {params: params});
    }

    upload(upoloadedPhoto: UploadedPhoto) {
        const formData = new FormData();
        formData.append("description", upoloadedPhoto.description);
        formData.append("allowComments", upoloadedPhoto.allowComments ? "true" : "false");
        formData.append("imageFile", upoloadedPhoto.file);

        return this.http.post(`${ApiUtils.API_URL_PREFIX}/photos/upload`, formData);
    }
}