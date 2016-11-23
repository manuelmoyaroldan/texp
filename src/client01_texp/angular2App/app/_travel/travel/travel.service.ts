import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TravelService {

    BaseUrl: string = 'http://localhost:24785/api/travel';

    constructor(private _http: Http) {
    }

    public getAll = (): Observable<any[]> => {
        return this._http.get(this.BaseUrl).map(res => res.json()).catch(this.handleError);
    }

    update(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/' + current.travelId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    deactivate(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.travelId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    activate(current: any): Observable<void> {
        return this._http.put(this.BaseUrl + '/activate/' + current.travelId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    create(equipment: any): Observable<any> {
        return this._http.post(this.BaseUrl, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }

    delete(current: any): Promise<void> {
        return this._http.delete(this.BaseUrl + '/' + current.travelId).toPromise().then(() => null).catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('API Travel server error:', error);
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
