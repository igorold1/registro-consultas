import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN, SistemaService } from '../sistema.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  senha: string;

  constructor(private srv: SistemaService, private router: Router) {}

  autenticar(){
      this.srv.autentificar(this.email, this.senha);

      if (this.srv.logado.perfil === ADMIN){
        this.router.navigate(['/adm'])
      } else{
        this.router.navigate(['/paciente'])
      }
  }
}
