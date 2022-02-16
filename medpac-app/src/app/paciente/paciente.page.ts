import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {
  evento:any;
  confir:string

  constructor(private srv:SistemaService, private router: Router) { }

  ngOnInit() {

    this.evento = this.srv.evento;
    this.confir = this.srv.evento.confir;
  }
  logout(){
    this.router.navigate(['/home']);
  }
}
