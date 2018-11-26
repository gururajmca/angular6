import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../log-server/log-server.service';
import { AccountService } from '../account-service/account-service';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  providers: [LogService, AccountService]
})
export class ServerElementComponent implements OnInit {

  @Input('accountElement') element: {name:string, status:string};
  constructor(private logingService: LogService, private accountService: AccountService) { }

  ngOnInit() {
  }

  ServerStart() {
    //console.log('ServerStart');
    this.logingService.logConsole('Server Started');
  }

  ServerStop() {
    console.log('ServerStop');
  }

  deleteServerElement(element) {
    this.accountService.deleteAccount(element);
  }
}
