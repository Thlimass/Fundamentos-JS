const body =  {
  pricing: [
      {
          type: "buy",
          maximum: 41600,
          maximum_fipe_margin: 0.91,
          minimum: 33280,
          minimum_fipe_margin: 0.72
      },
      {
        type: "trade",
        maximum: 49432,
        maximum_fipe_margin: 0.91,
        minimum: 36067,
        minimum_fipe_margin: 0.72
    }
  ],
}

function contractIsExist(contractBuy, contractTrade) {
  return contractBuy === '' && contractTrade === '' ;
}

function getMaxAmountBonus(contractTrade, contractBuy) {
  return contractTrade.maximum - contractBuy.maximum;
}

const contractBuy = body.pricing ? body.pricing.find((price) => price.type === 'buy') : ''
const contractTrade = body.pricing ? body.pricing.find((price) => price.type === 'trade') : ''
const amountBonus = contractIsExist(contractBuy, contractTrade) ? getMaxAmountBonus(contractTrade, contractBuy) : 0

//console.log(contractTrade.maximum)
//console.log(contractBuy.maximum)

console.log(amountBonus)


