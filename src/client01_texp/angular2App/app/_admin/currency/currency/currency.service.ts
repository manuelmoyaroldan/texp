import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class CurrencyService {

    BaseUrl: string = 'http://localhost:24785/api/currency';

    constructor(private _http: Http) {
    }

    public getAll = (): Observable<any[]> => {
        return this._http.get(this.BaseUrl).map(res => res.json()).catch(this.handleError);
    }

    update(equipment: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/' + equipment.equipmentId, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }

    create(equipment: any): Observable<any> {
        return this._http.post(this.BaseUrl, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }
    delete(current: any): Promise<void> {
        return this._http.delete(this.BaseUrl + '/' + current.currencyId)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        //return this.http.delete(this.equipmentBaseUrl+'/'+equipment.equipmentId).map((res: Response)=> res.json()).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('API server error:', error);
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
