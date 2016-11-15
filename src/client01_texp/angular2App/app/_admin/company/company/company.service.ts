import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {

    companyBaseUrl: string = 'http://localhost:24785/api/company';

    constructor(private _http: Http) {
    }

    public getCompanies = (): Observable<any[]> => {
        return this._http.get(this.companyBaseUrl).map(res => res.json()).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('API Company server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }

}
