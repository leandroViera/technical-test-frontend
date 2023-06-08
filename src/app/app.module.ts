import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/client/clients-list/clients-list-component';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { ClientActionsComponent } from './components/client/client-actions/client-actions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientComponent } from './components/client/client.component';
import { ClientsService } from './services/clients.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientManagementComponent,
    ClientActionsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [{ provide: ClientsService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
