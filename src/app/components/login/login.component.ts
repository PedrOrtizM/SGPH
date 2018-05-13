import { Component, OnInit } from '@angular/core';
import {ModulosService} from '../../services/modulos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modulos:any[] = [];
  constructor(private modulosService:ModulosService) {


   }

  ngOnInit() {

  this.modulos = this.modulosService.getModulos();
  
  }




}
