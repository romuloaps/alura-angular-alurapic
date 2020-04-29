import { Component, Input } from '@angular/core';
import { ApiUtils } from '../../core/utils/api-utils';

@Component({
    selector: "ap-photo",
    templateUrl: "./photo.component.html",
    styleUrls: ["./photo.component.css"]
})
export class PhotoComponent {

    private _url: string;

    @Input() description = "";
    
    @Input() set url(url: string) {
        if (!url.startsWith("data")) {
            this._url = `${ApiUtils.API_URL_PREFIX}/imgs/${url}`;
        
        } else {
            this._url = url;
        }
    }

    get url(): string {
        return this._url;
    }
}