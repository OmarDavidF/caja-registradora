const formato =  {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let change = [];
  let status = "";
  let sumaCid = 0;
  let formatoCambio = cash * 100 - price * 100;
  const revisionFormato = formatoCambio;
  const filtrado = cid.filter(elemento => elemento[1] !== 0).reverse();

filtrado.forEach(elemento => {
  let monto = 0;
  let sumarCasilla = elemento[1] * 100;
  const casilla = elemento[0];
  
  sumaCid = sumaCid + sumarCasilla;

  while (formatoCambio >= formato[casilla] && sumarCasilla > 0){
  sumarCasilla = sumarCasilla - formato[casilla];
  formatoCambio = formatoCambio - formato[casilla];
  monto = monto + formato[casilla];
  }

  if (monto !== 0){
    change.push([casilla, monto / 100]);
  }

});

 if (formatoCambio === 0 && revisionFormato === sumaCid){
    status = "CLOSED";
    change = cid;
  }else if (formatoCambio > 0){
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }else{
    status = "OPEN";
  }

  const registro = {"status":status, "change":change};
  return registro;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
