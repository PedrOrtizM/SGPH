import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email:string;
  password:string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe( parametros =>{
       this.email = parametros['email'];
       this.password = parametros['pass'];

     } )
  }

}
