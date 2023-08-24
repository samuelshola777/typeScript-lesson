class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}
