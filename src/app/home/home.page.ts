import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  anotherPage() {

    this.router.navigate(['../notas/estudiantes'], { relativeTo: this.activatedRoute });

  }

}
