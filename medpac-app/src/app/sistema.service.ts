import { Injectable } from '@angular/core';

export const ADMIN = 1;
export const PACIENTE = 2;
export const STATUS = ['Confirmar', 'Marcar outro', 'Não confirmar']

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  logado: any;
  usuarios: any[];
  evento: any;
  status: string[];
  confir: string;

  constructor() { 
    this.usuarios =
    [{id:1, nome: 'Casimiro', email: 'caze@gg.com', senha:'1234', perfil:ADMIN},
    {id:2, nome: 'Augusto', email: 'augusto@gg.com', senha: '1234', perfil:PACIENTE}];

    this.logado = null;
    this.evento = null;
  }
  autentificar(email:string, senha:string){
    for (let index = 0; index <this.usuarios.length;index++){
      const usr = this.usuarios[index];
      if ((usr.email === email) && (usr.senha === senha)){

        this.logado = usr;
        return
      } else
        if((usr.email !== email)&& (usr.senha !== senha)){
          throw new Error("Email ou senha inválidos");

        }
    }
  }
 salvar(nome, descricao, data, idmed, confir){
  if(!this.evento){
    this.evento = {
      nome: nome,
      descricao: descricao,
      data: data,
      idmed: idmed,
      confir: confir
    };
  } else{
    this.evento.nome= nome;
    this.evento.descricao = descricao;
    this.evento.data = data;
    this.evento.idmed = idmed;
    this.evento.confir = confir;
  }
 }
}
