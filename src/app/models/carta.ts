export class Carta{
	constructor(
		public multiverseid:number,
		public name:string,
		public mc:string,
		public cmc:string,
		public text:string,
		public cardtypes:Array<string>,
		public subtypes:Array<string>,
		public power:string,
		public toughness:string,
		public cardclasses:Array<string>
		){
	}
}