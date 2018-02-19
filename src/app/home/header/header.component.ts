import { Component, OnInit } from '@angular/core';
//import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
//import { Router } from '@angular/router/src/router';

// import { ViewChild } from '@angular/core/src/metadata/di';
// import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 // providers:[ROUTER_PROVIDERS]
})
export class HeaderComponent implements OnInit {

  headLogoPath:string;
  constructor() {
    this.headLogoPath = '/assets/Logo/3.png'
   }

  ngOnInit() {
  }

  // openLogin(){
    
  // }

  // openRegister(){
    
  // }

 
}

