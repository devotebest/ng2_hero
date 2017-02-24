import { Constants } from './Constants';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero }           from '../dto/hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Hero[]> {
      return this.http
                .get(`${Constants.HeroesSearchUrl}/?keywords=${term}`)
                .map((r: Response) => r.json() as Hero[]);
    }
}
