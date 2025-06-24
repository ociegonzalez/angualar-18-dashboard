import { Injectable, computed, inject, signal } from "@angular/core";
import { IUser, IUserResponse } from "../interfaces/users.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { delay, map } from "rxjs";
import { state } from "@angular/animations";
import { ISingleUserResponse } from "../interfaces/user-response.interface";

interface IState {
  users: IUser[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';
  private headers = new HttpHeaders({"x-api-key":"reqres-free-v1"});
  private http = inject(HttpClient);


  #state = signal<IState>({
    users: [],
    loading: true
  });

  public users = computed( () => this.#state().users);
  public loading = computed( () => this.#state().loading);

  constructor() {
    this.http.get<IUserResponse>(this.baseUrl, {headers: this.headers})
      .pipe(
        delay(2000)
      )
      .subscribe(res => {
      this.#state.set({
        users: res.data,
        loading: false
      });
    });
  }

  getUserById( id: string ) {
    return this.http.get<ISingleUserResponse>(`${this.baseUrl}/${id}`, {headers: this.headers})
      .pipe(
        delay(2000),
        map( res => res.data )
      )
  }
}
