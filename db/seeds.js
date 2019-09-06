use solar_system;
db dropDatabase();

db.solar_system.insertMany([
  {
    name: "Mercury",
    distance_from_sun: "57,900,000",
    equitorial_diameter: "4,879",
    number_of_moons: 0
  },
  {
    name: "Venus",
    distance_from_sun: "108,160,000",
    equitorial_diameter: "12,104",
    number_of_moons: 0
  },
  {
    name: "Earth",
    distance_from_sun: "149,600,000",
    equitorial_diameter: "12,756",
    number_of_moons: 1
  },
  {
    name: "Mars",
    distance_from_sun: "227,936,640",
    equitorial_diameter: "6,805",
    number_of_moons: 2
  },
  {
    name: "Jupiter",
    distance_from_sun: "778,369,000",
    equitorial_diameter: "142,984",
    number_of_moons: 67
  },
  {
    name: "Saturn",
    distance_from_sun: "1,427,034,000",
    equitorial_diameter: "120,536",
    number_of_moons: 62
  },
  {
    name: "Uranus",
    distance_from_sun: "2,870,658,186",
    equitorial_diameter: "51,118",
    number_of_moons: 27
  },
  {
    name: "Neptune",
    distance_from_sun: "4,496,976,000",
    equitorial_diameter: "49,528",
    number_of_moons: 14
  },
])
