import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

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

        return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`, {params: params});
    }
}