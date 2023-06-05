import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from './client';

@Component({
  selector: 'app-clients-list-component',
  templateUrl: './clients-list-component.html',
  styleUrls: ['./clients-list-component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientsService) {

  }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients
    })
  }


}
