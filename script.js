class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 2;
  }

  eat() {
    if (this.food > 0) {
      return (this.food -= 1);
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    let assentosVagos = this.capacity - this.passengers.length;
    return assentosVagos;
  }
  join(Traveler) {
    if (this.capacity - this.passengers.length >= 1) {
      this.passengers.push(Traveler);
    } else {
      console.log("não há lugar");
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    let travelersFoods = 0;

    for (let i = 0; i < this.passengers.length; i++) {
      travelersFoods += this.passengers[i].food;
    }
    return travelersFoods;
  }
}

class Doctor extends Traveler {
  heal(traveler) {
    traveler.isHealthy = true;
  }
}

class Hunter extends Traveler {
  constructor(name, food, isHealthy) {
    super(name, food, isHealthy);
    this.food = 2;
  }

  hunt() {
    this.food += 5;
  }

  eat() {
    if (this.food >= 2) {
      this.food -= 2;
    } else {
      this.food = 0;
      this.isHealthy = false;
    }
  }

  giveFood(traveler, numOfFoodUnits) {
    if (this.food >= numOfFoodUnits) {
      this.food = this.food - numOfFoodUnits;
      traveler.food += numOfFoodUnits;
    }
  }
}

//TESTE
// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
//console.log(sarahunter);
let maude = new Traveler("Maude");

console.log(
  `#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

wagon.join(henrietta);
console.log(
  `#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(
  `#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
//console.log(wagon);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
//console.log(henrietta.food);
//console.log(sarahunter.food);
sarahunter.eat();
//console.log(sarahunter.food);
//console.log(wagon);
drsmith.eat();
//console.log(drsmith.food);

//console.log(juan.food);
juan.eat();
juan.eat(); // juan agora está doente (sick)
console.log(juan);

console.log(
  `#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

//console.log(juan.isHealthy);
drsmith.heal(juan);
//console.log(juan.isHealthy);
console.log(
  `#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`
);

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(
  `#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);

//-------------------OREGON TRAIL - primeira entrega --------------------------
/*
function Traveler(name) {
  this.name = name;
  this.food = 1;
  this.isHealthy = true;
}

Traveler.prototype = {
  constructor: Traveler,
  hunt: function () {
    this.food + 2;
  },
  eat: function () {
    if (this.food > 0) {
      this.food - 1;
    }
    if (this.food < 1) {
      this.isHealthy = false;
    }
  },
};

function Wagon(capacity) {
  this.capacity = capacity;
  this.passengers = [];
}

Wagon.prototype = {
  constructor: Wagon,
  getAvailableSeatCount: function () {
    let assentosVagos = this.capacity - this.passengers.length;
    return assentosVagos;
  },
  join: function (Traveler) {
    if (this.capacity > this.passengers.length) {
      this.passengers.push(Traveler);
    }
  },
  shouldQuarantine: function () {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return false;
      } else {
        return true;
      }
    }
  },
  totalFood: function () {
    let travelersFoods = 1;

    for (let i = 0; i < this.passengers.length; i++) {
      travelersFoods += this.passengers[i].food;
    }
    return travelersFoods;
  },
};
*/
