import two = require('./two');

class A {
	public static a: number = 1;
	public c = new two.B();
	constructor() {
		console.log(two.B.b);
	}
}

new A();