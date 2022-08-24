import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user$: BehaviorSubject<any | null> = new BehaviorSubject(null);

  get User$(): Observable<any | null> { return this.user$.asObservable(); }

  constructor() {
    const user = localStorage.getItem("token");
    if (user) {
      this.user$.next(JSON.parse(user));
    }
  }

  login(token: String) {
    this.user$.next(token);
    localStorage.setItem("token", JSON.stringify(token));
  }
  logout() {
    this.user$.next(null);
    localStorage.removeItem("token");
  }
}
