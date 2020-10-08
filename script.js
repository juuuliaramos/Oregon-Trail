function Traveler(name) {
  this.name = name;
  this.food = 1;
  this.isHealthy = true;
}

Traveler.prototype = {
  constructor: Traveler,
  hunt: function () {
    this.food = +2;
  },
  eat: function () {
    if (this.food > 0) {
      this.food = -1;
    }
    if (this.food === 0) {
      this.isHealthy = false;
    }
  },
};

function Wagon(capacity) {
  this.capacity = capacity;
  this.list = [];
}

Wagon.prototype = {
  constructor: Wagon,
  getAvailableSeatCount: function () {
    let assentosVagos = this.capacity - this.list.length;
    return assentosVagos;
  },
  join: function (Traveler) {
    if (this.capacity > this.list.length) {
      this.list.push(Traveler);
    }
  },
  shouldQuarantine: function () {
    for (let i = 0; i < this.list.length; i++) {
      if ((this.list[i].isHealthy = false)) {
        return true;
      } else {
        return false;
      }
    }
  },
  totalFood: function () {
    let travelersFoods = [];

    for (let i = 0; i < this.list.length; i++) {
      travelersFoods += this.list[i];
    }
  },
};

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
