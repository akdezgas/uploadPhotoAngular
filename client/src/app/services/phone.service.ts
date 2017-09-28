import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PhoneService {

    BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}

    getList() {
      return this.http.get(`${this.BASE_URL}/api/phones`)
        .map((res) => res.json());
    }

    get(id) {
      return this.http.get(`${this.BASE_URL}/api/phones/${id}`)
        .map((res) => res.json());
    }

    edit(phone) {
      return this.http.put(`${this.BASE_URL}/api/phones/${phone.id}`, phone)
        .map((res) => res.json());
    }

    remove(id) {
      return this.http.delete(`${this.BASE_URL}/api/phones/${id}`)
        .map((res) => res.json());
    }
}
