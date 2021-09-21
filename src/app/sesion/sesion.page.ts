import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
  usua : string;
  nom4 : string;
  pas: string;
  personas = [];
  AlertController: any;
  persona: Persona
  constructor(
    private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private router          : Router,
    private alertController : AlertController,
    private personasServicio : PersonasService
  ) { }
  ngOnInit() {
   
    this.personas = this.personasServicio.getPersonas();
  }
  ionViewWillEnter(){
    this.personas = this.personasServicio.getPersonas();
  }
  
  login(nombre :HTMLInputElement,pass :HTMLInputElement)
  {
    const nom1 = nombre.value;
    const pass2 = pass.value;
    this.usua = String(nom1);
    this.router.navigate(['/',this.usua]); 
  }
}
