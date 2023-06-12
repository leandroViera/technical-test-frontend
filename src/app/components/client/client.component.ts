import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  client: Client[];

  constructor(private clientsService: ClientsService) {

  }

  getClient(clientId: string) {

    this.clientsService.getClientById(clientId).subscribe((client) => {

      if (client.toString().trim() !== "") {
        this.client = [client];
        return;
      }

      this.client = [];

    })

  }

}
