class Car {

  var arrCars = [];

  function addNewCar(manufacture, model, year, color, body, fuel, cost) {

    this.manufacture = manufacture;
    this.model = model;
    this.year = year;
    this.color = color;
    this.body = body;
    this.fuel = fuel;
    this.cost = cost;
  }

  this.getManufacture = function() {
    return this.manufacture;
  }

  this.getModel = function() {
    return this.model;
  }

  this.getYear = function() {
    return this.year;
  }

  this.getColor = function() {
    return this.color;
  }

  this.getBody = function() {
    return this.body;
  }

  this.getFuel = function() {
    return this.fuel;
  }

  this.getCost = function() {
    return this.cost;
  }

  this.saveCar = function(manufacture, model, year, color, body, fuel, cost) {
    this.manufacture = manufacture;
    this.model = model;
    this.year = year;
    this.color = color;
    this.body = body;
    this.fuel = fuel;
    this.cost = cost;
  } 

  this.getCar = function() {
    var arrCar = [this.manufacture, this.model, this.year, this.color, this.body, this.fuel, this.cost];
    return arrCar;
  }

  document.getElementById('addCar').onclick = function () {
	  document.getElementById('myForm').style.display='block';
	  document.getElementById('addCar').style.display='none';
	  document.getElementById('table').style.display='none';
	  document.getElementById('btn-submit').style.display='block';
	}
}