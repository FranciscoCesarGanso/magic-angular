import { Component, OnInit , Input} from '@angular/core';
import { Carta } from '../models/carta';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
	
	@Input()
	card: Carta; 
	
	constructor(){}
	
	public getCardImageURL = (mid) => `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${mid}&type=card`;

	ngOnInit() {
		
	}

}
