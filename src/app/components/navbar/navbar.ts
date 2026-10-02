import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private router = inject(Router);
  private activateRoute = inject(ActivatedRoute);

  currentTitle = signal<string>('App Menu');

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activateRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        const title = route.snapshot.title || 'App Menu';
        this.currentTitle.set(title);
      })
  }
}
