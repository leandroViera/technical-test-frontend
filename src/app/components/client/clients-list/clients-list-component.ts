import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-clients-list-component',
  templateUrl: './clients-list-component.html',
  styleUrls: ['./clients-list-component.css']
})
export class ClientsListComponent implements OnInit {

  @Input()
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
