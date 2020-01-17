import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  LlamaComponente(opcion: number) {
    if ( opcion === 1)
      this.router.navigate(['login']);
    else if (opcion === 2)
      this.router.navigate(['olvidado']);
  }

}
