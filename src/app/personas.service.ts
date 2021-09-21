import { Injectable } from '@angular/core';
import { Persona }  from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  getContraseña(pass2: string): string {
    throw new Error('Method not implemented.');
  }

  private personas : Persona[] =[
    {
    id             : 1,
    Nombre         : 'admin',
    Apellido       : 'admin',
    Contraseña     : 'admin',
    Edad           : 21,
    Foto           : 'https://i.pinimg.com/736x/98/f3/51/98f351363b7b69c005ee9aa4123435cb.jpg'  
    },
    {
    id             : 2,
    Nombre         : 'juan',
    Apellido       : 'elsanto',
    Contraseña     : 'contra123',
    Edad           : 25,
    Foto           : 'https://laotracara.co/wp-content/uploads/2018/04/Juan-Pablo-II.jpg'  
    }
  ]

  constructor() { }

  getPersonas()
  {
    return this.personas
  }

  getNombre(Nombre: string)
  {
    return this.personas.find(x=> {return x.Nombre == Nombre})
  }

  getPass(Contraseña: string)
  {
    return this.personas.find(x=> {return x.Contraseña == Contraseña})
  }

  addPersona(Nombre : String,Apellido : String, Contraseña : String,Edad : number,Foto : String)
  {
    this.personas.push(
      {
        id             : this.personas.length + 1,
        Nombre         : Nombre,
        Apellido       : Apellido,
        Contraseña     : Contraseña,
        Edad           : Edad,
        Foto           : Foto 
      }
    )
  }
  
  deletePersona(id : number)
  {
    this.personas = this.personas.filter(x => {return x.id != id})
  }
}
