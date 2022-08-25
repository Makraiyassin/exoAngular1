import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private token$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  get Token$(): Observable<any | null> { return this.token$.asObservable(); }

  constructor() {
    const token = localStorage.getItem("token");
    if (token) {
      this.token$.next(JSON.parse(token));
    }
  }

  login(token: String) {
    this.token$.next(token);
    localStorage.setItem("token", JSON.stringify(token));
  }
  logout() {
    this.token$.next(null);
    localStorage.removeItem("token");
  }
}
