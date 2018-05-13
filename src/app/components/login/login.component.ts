import { Component, OnInit } from '@angular/core';
import {ModulosService} from '../../services/modulos.service';
import {Router} from '@angular/router';
import {} from 'path-to-source';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modulos:any[] = [];
  constructor(private modulosService:ModulosService,
              private router:Router) {


   }

  ngOnInit() {

  this.modulos = this.modulosService.getModulos();

  }
  iniciarSesion(email:string,password:string){
      console.log(email);
      console.log(password);

        this.router.navigate(['/dashboard',email,password]);
  }







}
