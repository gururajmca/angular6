import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account-service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [AccountService]
})
export class ServerComponent implements OnInit {

  accounts: {name: string, status: string} [] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }



}
