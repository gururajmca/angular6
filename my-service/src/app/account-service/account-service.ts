export class AccountService {
  accounts = [
    {
      name: "Account - A",
      status: 'active'
    },
    {
      name: "Account - B",
      status: 'active'
    },
    {
      name: "Account - C",
      status: 'active'
    },
    {
      name: "Account - D",
      status: 'active'
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  deleteAccount(element) {
    console.log('Delete the account for ', element);
    // const index = this.accounts.findIndex(item => item.name !== element.name);
    // this.accounts.splice(index, 1);
    this.accounts.splice(this.accounts.findIndex(function(item){
    return item.name === element.name;
}), 1);
  }
}
