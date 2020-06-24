export class Character {
  name: string;
  fistName: string;
  email: string;
  date: Date;

  constructor(name: string, fistName: string, email: string, date: Date) {
    this.name = name;
    this.fistName = fistName;
    this.email = email;
    this.date = date;
  }
}
