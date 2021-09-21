import { Component, OnInit } from '@angular/core';
// permite la captura de datos desde otra pagina
import { ActivatedRoute, Router } from '@angular/router';
// importar el modelo
import { Persona } from '../persona.model';
// importar servicio
import {PersonasService} from '../personas.service';
// importar alertControl
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  persona : Persona
  personas = [];
  constructor(
    private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private router          : Router,
    private alertController : AlertController,
    private personasServicio : PersonasService
  ) { }

  ngOnInit() {
      this.activatedRouter.paramMap.subscribe(paramMap => {
      const name = paramMap.get('Nombre') // es de tipo string
      this.persona = this.personasService.getNombre(String(name));
    })
  }

  ionViewWillEnter(){
    this.personas = this.personasServicio.getPersonas();
  }

}
