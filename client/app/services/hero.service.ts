import { Constants } from './Constants';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../dto/hero';

@Injectable()
export class HeroService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
    return this.http.get(Constants.HeroesUrl)
               .toPromise()
               .then(response => response.json() as Hero[])
               .catch(this.handleError);
    }

    getHero(id: number) {
        return this.http.get(`${Constants.HeroesUrl}/${id}`)
                .toPromise()
                .then(response => response.json() as Hero)
                .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(Constants.HeroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }


    update(hero: Hero): Promise<Hero> {
        const url = `${Constants.HeroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${Constants.HeroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}