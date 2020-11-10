import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ErrorComponent } from './error/error.component';
import {CardviewComponent} from './cardview/cardview.component';
import {GameManagerComponent} from './gamemanager/gamemanager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    HomeComponent,
    ContactanosComponent,
    ErrorComponent,
    CardviewComponent,
	GameManagerComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpClientModule,
    routing,
	RouterModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
