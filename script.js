const btnSzybciej = document.querySelector("#speedUp");
const btnZwiekszBieg = document.querySelector("#gearUp");
const btnZmniejszBieg = document.querySelector("#gearDown");

class Auto {
  constructor(kolor, maxszybkosc) {
    this.biegow = 6;
    this.bieg = 0;
    this.kolor = kolor;
    this.maxszybkosc = maxszybkosc;
    this.predkosc = 0;
    this.silnik = false;
  }
  oaucie() {
    alert(`
      Ilość biegów: ${this.biegow}\n
      Obecny bieg: ${this.bieg}\n
      Kolor: ${this.kolor}\n
      Obecna prędkość: ${this.predkosc}\n
      Max prędkość: ${this.maxszybkosc}\n
      Jest włączone: ${this.silnik}\n
    `);
  }

  //przyspieszanie
  przyspiesz() {
    let przyspieszNested = (wartosc) => {
      if (this.predkosc + wartosc <= this.maxszybkosc)
        this.predkosc = this.predkosc + wartosc;
      // alert(this.predkosc);
    };
    switch (this.bieg) {
      case 0:
        alert("Sory mordo, nie ruszysz na luzie");
        break;
      case 1:
        przyspieszNested(10);
        break;
      case 2:
        przyspieszNested(20);
        break;
      case 3:
        przyspieszNested(30);
        break;
      case 4:
        przyspieszNested(40);
        break;
      case 5:
        przyspieszNested(50);
        break;
      case 6:
        przyspieszNested(60);
        break;
      default:
        alert("SWITCH PRZYSPIESZ: default, coś nie działa");
    }
    this.render();
  }

  //biegi
  zwiekszBieg() {
    if (this.bieg < this.biegow) this.bieg++;
    this.render();
  }
  zmniejszBieg() {
    if (this.bieg != 0) this.bieg--;
    this.render();
  }

  //render
  render() {
    document.querySelector("#currentSpeed").textContent = this.predkosc;
    document.querySelector("#currentGear").textContent = this.bieg;
    document.querySelector("#isEngineOn").textContent = this.silnik;
  }
}

let samochod1 = new Auto("Pink", 220);
document.querySelector("#maxSpeed").textContent = samochod1.maxszybkosc;
document.querySelector("#gearsAmount").textContent = samochod1.biegow;
samochod1.render();
btnSzybciej.addEventListener("click", function () {
  samochod1.przyspiesz();
});

//biegi
btnZwiekszBieg.addEventListener("click", function () {
  samochod1.zwiekszBieg();
});
btnZmniejszBieg.addEventListener("click", function () {
  samochod1.zmniejszBieg();
});

document.querySelector("#about").addEventListener("click", function () {
  samochod1.oaucie();
});
