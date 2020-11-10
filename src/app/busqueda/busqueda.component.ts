import { Component, OnInit,HostListener } from '@angular/core';
import {Carta} from '../models/carta'
import {Respuesta} from '../models/respuesta'
import {Buscar_cartasService} from '../servicios/buscar_cartas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers:[Buscar_cartasService]
})
export class BusquedaComponent implements OnInit {
  public busqueda:string;
  public paginaActual:number;
  public paginaTotal:number;
  public totalCartas:number;
  public paginaSize:number=20;
  public cartas:Array<Carta>;
  public carta_select:Carta;
  public imgHover=null;
  constructor(public _buscarCartasService:Buscar_cartasService) { }

  ngOnInit(): void {
  }
   @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    var image = document.getElementById("hoverimage");
    console.log(image);
    if(image!=null){
       image.style.left=e.clientX+"px";
       image.style.top=e.clientY+"px";
    }  
  }
  buscarCarta(){
  	this._buscarCartasService.getCarta(this.busqueda).subscribe(res => {
    this.cartas=(res as Respuesta).cards
    this.totalCartas=this.cartas.length;
    this.paginaActual=0;
    this.paginaTotal=Math.floor(this.totalCartas/this.paginaSize);
    });
  }
  public getCarta(card){
    this.carta_select=card;
  }
  public over(id) {
    this.imgHover=`https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${id}&type=card`
  }
  
  public out(){
    this.imgHover="";
  }
  public volver(){
    this.carta_select=null;
  }
  public paginaAdelante(){
    this.paginaActual++;
  }
  public paginaAtras(){
    this.paginaActual--;
  }
  public getFirst(){
    return this.paginaActual*this.paginaSize;
  }
  public getLast(){
    let inicial=this.paginaActual*this.paginaSize;
    if(this.paginaActual*this.paginaSize+this.paginaSize > this.totalCartas){
      return inicial+ this.totalCartas-inicial;
    }
    else{
      return inicial+this.paginaSize;
    }
  }
}
