import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-client-actions',
  templateUrl: 'client-actions.component.html',
  styleUrls: ['./client-actions.component.css']
})
export class ClientActionsComponent {

  @Output()
  private clientSearchInputEvent: EventEmitter<string> = new EventEmitter<string>();

  searchClient(clientId: string) {

    if (clientId.trim() == "") {
      return;
    }

    this.clientSearchInputEvent.emit(clientId);
    
  }


}
