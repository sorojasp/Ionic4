import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: [],

  })

  export class ClientesComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
    }
    prepareRoute( outlet: RouterOutlet ) {
      return outlet && outlet.activatedRouteData;
    }


  }