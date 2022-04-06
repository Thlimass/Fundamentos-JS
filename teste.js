const model = {
  evaluation: {
    bonuses: [
        {
        "type": "LOW_KM",
        "description": "km baixa",
        "price": 250,
        "typeDescription": "Km baixa"
        }, 
        {
          "type": "LOW_KM",
          "description": "km baixa",
          "price": 654,
          "typeDescription": "Km baixa"
          } 
      ],
      "penalties": [
        {
          "type": "BREAKDOWN",
          "description": "teste",
          "price": 200,
          "typeDescription": "Avaria técnica"
        },
        {
          "type": "BREAKDOWN",
          "description": "teste",
          "price": 200,
          "typeDescription": "Avaria técnica"
        }

      ],
  }
}



    let totalBonuses = 0;
    model.evaluation.bonuses.forEach(element => {
      totalBonuses = totalBonuses + element.price;
    });

  console.log(totalBonuses)



