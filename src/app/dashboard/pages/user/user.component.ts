import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { IUser } from '../../../interfaces/users.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `

  <app-title title="User" />

  @if( user() ) {
    <section>
      <img [src]="user()!.avatar" [alt]="user()!.first_name"  />

     <div>
       <h3> {{ titleLabel() }} </h3>
       <p> {{ user()!.email }} </p>
     </div>
    </section>
  } @else {
     <p> Cargando... </p>
  }

`,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed( () => {
    if( !this.user() ) return 'Sin informacion del usuario';

    return `${this.user()!.first_name} ${this.user()!.last_name}`;
  });

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById(id) )
    )
  )

  constructor() {
/**    this.route.params
      .subscribe((params) => {
        console.log(params);
      });
    */
  }
}
