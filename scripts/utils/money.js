export function formatCurrency(priceCent){
  return (priceCent/100).toFixed(2);
}

export default formatCurrency;