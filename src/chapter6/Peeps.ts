class Peeps {
  static Count: number = 0;

  static getCount(): number {
    return Peeps.Count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.Count;
  }
}
