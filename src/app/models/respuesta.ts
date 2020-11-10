import {Carta} from './carta'
export class Respuesta{
	constructor(
		public errorCode:number,
		public errorDescription:number,
		public cards:Array<Carta>
		){}
}