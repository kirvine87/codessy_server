use solar_system;
db.dropDatabase();

db.planets.insertMany([
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
]);

db.quizes.insertMany([
  {
    name: "Mercury",
    questions: [
      {
        question: "How many moons does Mercury have?",
        answer: 0,
        options: [
          2,3,0,1
        ]
      },
      {
        question: "How large is the equitorial diameter of Mercury?",
        answer: "4,879",
        options: [
          "4,879", "5,232", "8,697", "3,972"
        ]
      },
      {
        question: "How far is Mercury from the Sun?",
        answer: "57,900,000",
        options: [
          "57,900,000", "58,900,000", "57,900,00", "67,900,000"
        ]
      }
    ]
  },
  {
    name: "Venus",
    questions: [

    ]
  },
  {
    name: "Earth",
    questions: [

    ]
  },
  {
    name: "Mars",
    questions: [

    ]
  },
  {
    name: "Jupiter",
    questions: [

    ]
  },
  {
    name: "Saturn",
    questions: [

    ]
  },
  {
    name: "Uranus",
    questions: [

    ]
  },
  {
    name: "Neptune",
    questions: [

    ]
  },

])
