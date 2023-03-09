const btnSzybciej = document.querySelector("#speedUp");

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
      Ilość biegów: ${this.biegow}
    `);
  }

  //przyspieszanie
  przyspiesz() {
    let przyspieszNested = (wartosc) => {
      if (this.predkosc + wartosc <= this.maxszybkosc)
        this.predkosc = this.predkosc + wartosc;
      alert(this.predkosc);
    };
    alert(this.bieg);
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
  }
}

let samochod1 = new Auto("Pink", 420);
// samochod1.oaucie();
samochod1.przyspiesz();

btnSzybciej.addEventListener("click", function () {
  samochod1.przyspiesz();
});
document.querySelector("#about").addEventListener("click", samochod1.oaucie);
