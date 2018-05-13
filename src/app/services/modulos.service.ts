import { Injectable } from '@angular/core';

@Injectable()
export class ModulosService {

  private modulos:Modulo[] = [
      {
        nombre: "Gestión de Comunicación",
        icono: "warning",
        descripcion: "Permite a los entes de la propiedad horizontal mntener una interacción constante...",
        funcion: "permitirá a los distintos entes de la propiedad horizontal (asamblea general, consejo de administración, administración y propietarios) mantener una interacción constante a fin de intercambiar información relevante para los propietarios resultado de reuniones, comunicados por parte la administración, manteniendo así enterados de las decisiones tomadas por cada uno de los órganos de la PH."
      },
      {
        nombre: "Gestión de Áreas comunes",
        icono: "success",
        descripcion: "Gestiona todas las reservas hechas por los habitantes de la propiedad ...",
        funcion: "Las áreas comunes representan un activo muy importante para este tipo de propiedades, por lo cual deben ser gestionadas para garantizar su conservación y funcionamiento. "
      },
      {
        nombre: "Control de Acceso Vehicular",
        icono: "danger",
        descripcion: " Lorem ipsum dolor sit amet, consectetur adipisicing ...",
        funcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
      },
      {
        nombre: "Gestión de Libro de Propietarios",
        icono: "light",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        funcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
      ,
      {
        nombre: "Gestión de Activos",
        icono: "light",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        funcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    
    ];
  constructor() { }


  getModulos() {

    return this.modulos;

  }

}

export interface Modulo {

  nombre:string;
  icono:string;
  descripcion:string;
  funcion:string;

};
