class Coder {
  public readonly name: string;
  public music: string;
  private age: number;
  protected lang: string;

  constructor(
    name: string,
    music: string,
    age: number,
    lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.name}`;
  }
}
