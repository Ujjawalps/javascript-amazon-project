export function formatCurrency(priceCent){
  return (Math.round(priceCent)/100).toFixed(2);
}

export default formatCurrency;