const Dave = new Coder("Dave", "Rock", 42);

console.log(Dave.getAge());

const sara = new WebDev("Mac", "Sara", "LOFI", 25);

console.log.apply(sara.getLang());

const Page = new GuitaristK("jimmy", "guitarist");

console.log(Page.play("strum"));

const John = new Peeps("john");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.Count);

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zed"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
