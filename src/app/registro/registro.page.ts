import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  personas = [];
  usuario : string;
  constructor(private personasServicio : PersonasService, private router : Router) { }

  ngOnInit() {
    this.personas = this.personasServicio.getPersonas();
  }
  
  ionViewWillEnter(){
    this.personas = this.personasServicio.getPersonas();
  }

  guardar(nombre :HTMLInputElement,lastname :HTMLInputElement,pass :HTMLInputElement,edad :HTMLInputElement,url :HTMLInputElement)
  {
    const nom = nombre.value;
    const ape = lastname.value;
    const pas = pass.value;
    const eda = edad.value;
    const lr = url.value;
    this.personasServicio.addPersona(nom,ape,pas,Number(eda),lr);
    this.router.navigate(['/sesion']);
  }
}
