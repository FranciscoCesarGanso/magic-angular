import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {ContactanosComponent} from './contactanos/contactanos.component';
import {ErrorComponent} from './error/error.component';
//Array de rutas
const appRoutes:Routes=[
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'contactanos',
		component:ContactanosComponent

	},
	{
		path: '**' ,
		component:ErrorComponent
	}
];
//exportar modulo de routing
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders <any> =RouterModule.forRoot(appRoutes);