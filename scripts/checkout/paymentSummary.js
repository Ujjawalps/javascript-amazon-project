import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';  
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary(){
  let productPriceCent = 0;
  let shippingPriceCent = 0;

  cart.forEach((cartItem) => {
   const product = getProduct(cartItem.productId);
   productPriceCent += product.priceCents * cartItem.quantity;
   const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCent += deliveryOption.priceCents;
  });
  const totalBeforeTaxCent = productPriceCent + shippingPriceCent;
  const taxCent = Math.round(totalBeforeTaxCent * 0.1);
  const totalCent = totalBeforeTaxCent + taxCent;
  const paymentSummaryHTML =
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">
        $${formatCurrency(productPriceCent)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        $${formatCurrency(shippingPriceCent)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        $${formatCurrency(totalBeforeTaxCent)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        $${formatCurrency(taxCent)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        $${formatCurrency(totalCent)}
      </div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}