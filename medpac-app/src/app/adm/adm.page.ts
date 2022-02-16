import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SistemaService, STATUS } from '../sistema.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {
  nome: string;
  descricao: string;
  data: Date;
  idmed: string;
  status: string[];
  confir: string;

  constructor(private srv:SistemaService, private router: Router) { }

  ngOnInit() {
    this.status = STATUS;
    if(this.srv.evento){

      this.nome = this.srv.evento.nome;
      this.descricao = this.srv.evento.descricao;
      this.data = this.srv.evento.data;
      this.idmed = this.srv.evento.idmed;
      this.confir = this.srv.evento.confir;

    }
  }
  salvar(){
    this.srv.salvar(this.nome, this.descricao, this.data, this.idmed, this.confir)
    this.nome = this.srv.evento.nome;
    this.descricao = this.srv.evento.descricao;
    this.data = this.srv.evento.data;
    this.idmed = this.srv.evento.idmed;
    this.confir = this.srv.evento.confir;
  }
logout(){
  this.router.navigate(['/home']);
}
}
