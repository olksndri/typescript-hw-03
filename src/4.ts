class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  showTenants(): void {
    console.log(this.tenants);
  }

  isDoorOpened(): void {
    console.log(`Door opened: ${this.door}`);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

// Ключ створено
const key = new Key();
console.log(key.getSignature());

// Людина отримала ключ від свого дому
const person = new Person(key);
console.log(person.getKey());

// Людина відкриває двері
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.isDoorOpened();

// Людина заходить в будинок і стає його мешканцем
house.comeIn(person);
house.showTenants();

export {};
