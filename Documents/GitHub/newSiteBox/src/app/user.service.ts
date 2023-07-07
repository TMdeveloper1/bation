import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser$ = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser$.asObservable();
  }
}
