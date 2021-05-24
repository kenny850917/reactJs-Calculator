const qBank = [
  {
    question:
      "You have 2.6 grams of yogurt in your bowl and you add another spoonful of 1.3 grams. How much yogurt do you have in total?",
    answers: ["3.9 grams", "3.8 grams", "4.9 grams", "4.0 grams"],
    correct: "3.9 grams",
    questionId: "001",
  },
  {
    question:
      "Gemma had 25.75 grams of frosting to make a cake. She decided to use only 15.5 grams of the frosting. How much frosting does Gemma have left?",
    answers: ["42.25 grams", "42.15 grams", "41.25 grams", "10.25 grams"],
    correct: "10.25 grams",
    questionId: "002",
  },
  {
    question:
      "Marshall walks a total of 0.9 kilometres to and from school each day. After 4 days, how many kilometres will he have walked?",
    answers: ["3.6 km", "7.2 km", "3.8 km", "3.2 km"],
    correct: "3.6 km",
    questionId: "003",
  },
  {
    question:
      "To make the Leaning Tower of Pisa from spaghetti, Mrs. Robinson bought 2.5 kilograms of spaghetti. Her students were able to make 10 leaning towers in total. How many kilograms of spaghetti does it take to make 1 leaning tower?",
    answers: ["0.24 kg", "2.5 kg", "0.25 kg", "25 kg"],
    correct: "0.25 kg",
    questionId: "004",
  },
  {
    question:
      " Rocco has 1.5 litres of orange soda and 2.25 litres of grape soda in his fridge. Antonio has 1.15 litres of orange soda and 0.62 litres of grape soda. How much more soda does Rocco have than Angelo?",
    answers: ["3.36 L", "1.98 L", "1.92 L", "2.58 L"],
    correct: "1.98 L",
    questionId: "005",
  },
  {
    question:
      "Thomas has $80 saved up. He uses his money to buy a video game. The video game costs $67. How much money does he have left?",
    answers: ["$14", "$27", "$147", "$13"],
    correct: "$13",
    questionId: "006",
  },
  {
    question:
      "Robert spent $184.59 to buy 3 hockey sticks. If each hockey stick was the same price, how much did 1 cost?",
    answers: ["$61.58", "$61.53", "$66.53", "6$7.53"],
    correct: "$61.53",
    questionId: "007",
  },
  {
    question:
      "You went to the store with $5.50. You bought gum for $1.25, a chocolate bar for $1.15 and a sucker for $0.50. How much money do you have left?",
    answers: ["$2.7", "$2.6", "$8.8", "$8.6"],
    correct: "$2.6",
    questionId: "008",
  },
  {
    question:
      " Retta put $100.00 in a bank account that gains 20% interest annually. If she makes no withdrawals, how much money will be in the account after 1 year?",
    answers: ["$120", "$20", "$180", "$80"],
    correct: "$120",
    questionId: "009",
  },
  {
    question:
      "Cassandra’s ruler is 22 centimetres long. April’s ruler is 30 centimetres long. How many centimetres longer is April’s ruler?",
    answers: ["18 cm", "15 cm", "52 cm", "8 cm"],
    correct: "18 cm",
    questionId: "010",
  },
];

// n = 5 to export 5 question
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
