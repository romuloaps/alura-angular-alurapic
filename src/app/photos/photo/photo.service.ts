import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { UploadedPhoto } from './uploaded-photo';

const API_URL = "http://localhost:3000";

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

        return this.http.get<Photo[]>(`${API_URL}/${userName}/photos`, {params: params});
    }

    upload(upoloadedPhoto: UploadedPhoto) {
        const formData = new FormData();
        formData.append("description", upoloadedPhoto.description);
        formData.append("allowComments", upoloadedPhoto.allowComments ? "true" : "false");
        formData.append("imageFile", upoloadedPhoto.file);

        return this.http.post(`${API_URL}/photos/upload`, formData);
    }
}