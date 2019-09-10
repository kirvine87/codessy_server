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
    name: "Solar System",
    questions: [
      {
        question: "How old is the Solar System(billion years)?",
        answer: 4.6,
        options: [
          4.6,4.8,6.4,3
        ]
      },
      {
        question: "How many planets are in the Solar System?",
        answer: 8,
        options: [
          9, 8, 6, 20
        ]
      },
      {
        question: "How many dwarf planets are in the Soalr System?",
        answer: 5,
        options: [
          5, 9, 6, 4
        ]
      },
      {
        question: "How many moons are in the Solar System ?",
        answer: 181,
        options: [
          9, 10, 172, 181
        ]
      },
      {
        question: "What is the diameter of the Solar System(trillion km)?",
        answer: 18.75,
        options: [
          16.75, 18.75, 18.57, 16.57
        ]
      },
      {
        question: "What seperates the inner and outer Solar System?",
        answer: "Asteroid Belt",
        options: [
          "Stars", "Jupiter", "Asteroid Belt", "Star Belt"
        ]
      },
      {
        question: "Which planets orbit the sun?",
        answer: "All",
        options: [
          "Earth", "None", "Mercury and Venus", "All"
        ]
      },
      {
        question: "How many planets are in the Soalr System?",
        answer: 8,
        options: [
          9, 8, 6, 20
        ]
      },
    ]
  },
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
      {
        question: "How many moons does Venus have?",
        answer: 0,
        options: [
          2,3,0,1
        ]
      },
      {
        question: "How large is the equitorial diameter of Venus?",
        answer: "12,104",
        options: [
          "12,798", "12,104", "11,104", "13,417"
        ]
      },
      {
        question: "How far is Venus from the Sun?",
        answer: "108,160,000",
        options: [
          "108,106,000", "108,610,000", "109,106,160", "108,160,000"
        ]
      }
    ]
  },
  {
    name: "Earth",
    questions: [
      {
        question: "How many moons does Earth have?",
        answer: 1,
        options: [
          2,3,0,1
        ]
      },
      {
        question: "How large is the equitorial diameter of Earth?",
        answer: "12,756",
        options: [
          "12,798", "12,756", "12,657", "11,756"
        ]
      },
      {
        question: "How far is Earth from the Sun?",
        answer: "149,600,000",
        options: [
          "169,400,000", "149,060,000", "194,600,000", "149,600,000"
        ]
      }
    ]
  },
  {
    name: "Mars",
    questions: [
      {
        question: "How many moons does Mars have?",
        answer: 2,
        options: [
          2,3,0,1
        ]
      },
      {
        question: "How large is the equitorial diameter of Mars?",
        answer: "6,805",
        options: [
          "7,508", "6,508", "6,805", "7,805"
        ]
      },
      {
        question: "How far is Mars from the Sun?",
        answer: "227,936,640",
        options: [
          "273,936,640", "227,936,640", "227,639,640", "227,936,046"
        ]
      }
    ]
  },
  {
    name: "Jupiter",
    questions: [
      {
        question: "How many moons does Jupiter have?",
        answer: 67,
        options: [
          66,76,63,67
        ]
      },
      {
        question: "How large is the equitorial diameter of Jupiter?",
        answer: "142,984",
        options: [
          "142,984", "124,984", "142,489", "142,948"
        ]
      },
      {
        question: "How far is Jupiter from the Sun?",
        answer: "778,369,000",
        options: [
          "778,963,000", "778,936,000", "787,369,000", "778,369,000"
        ]
      }
    ]
  },
  {
    name: "Saturn",
    questions: [
      {
        question: "How many moons does Saturn have?",
        answer: 62,
        options: [
          66,62,26,63
        ]
      },
      {
        question: "How large is the equitorial diameter of Saturn?",
        answer: "120,536",
        options: [
          "121,536", "120,566", "120,536", "120,635"
        ]
      },
      {
        question: "How far is Saturn from the Sun?",
        answer: "1,427,034,000",
        options: [
          "1,500,034,000", "1,427,043,000", "1,427,034,000", "1,472,034,000"
        ]
      }
    ]
  },
  {
    name: "Uranus",
    questions: [
      {
        question: "How many moons does Uranus have?",
        answer: 27,
        options: [
          30,28,26,27
        ]
      },
      {
        question: "How large is the equitorial diameter of Uranus?",
        answer: "51,118",
        options: [
          "51,118", "58,118", "51,811", "51,181"
        ]
      },
      {
        question: "How far is Uranus from the Sun?",
        answer: "2,870,658,186",
        options: [
          "2,870,658,681", "2,870,856,186", "2,780,658,186", "2,870,658,186"
        ]
      }
    ]
  },
  {
    name: "Neptune",
    questions: [
      {
        question: "How many moons does Neptune have?",
        answer: 14,
        options: [
          13,15,17,14
        ]
      },
      {
        question: "How large is the equitorial diameter of Neptune?",
        answer: "49,528",
        options: [
          "49,825", "49,852", "49,000", "49,528"
        ]
      },
      {
        question: "How far is Neptune from the Sun?",
        answer: "4,496,976,000",
        options: [
          "4,469,967,000", "4,469,976,000", "4,496,679,000", "4,496,976,000"
        ]
      }
    ]
  },

]);

db.results.insertMany([
  {
    name: "Solar System",
    result: null
  },
  {
    name: "Mercury",
    result: null
  },
  {
    name: "Venus",
    result: null
  },
  {
    name: "Earth",
    result: null
  },
  {
    name: "Mars",
    result: null
  },
  {
    name: "Jupitor",
    result: null
  },
  {
    name: "Saturn",
    result: null
  },
  {
    name: "Uranus",
    result: null
  },
  {
    name: "Neptune",
    result: null
  }

]);
