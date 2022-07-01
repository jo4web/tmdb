<template>
  <div class="cart__checkout">
  <table>
      <tr>
        <th style="width:20%">Imagem</th>
        <th style="width:40%">Nome</th>
        <th style="width:15%; text-align: center;">Qtd</th>
        <th style="width:15%">Preço</th>
        <th style="width:10%"></th>
      </tr>
      <tr class="border__bottom" v-for="(product) in cart" :key="product.backdrop_path">
        <td><img :src="getImgUrl(product.backdrop_path)"/></td>
        <td>{{product.original_title}}</td>
        <td class="qtd">{{product.quantity}}</td>
        <td>R${{product.price}}</td>
        <td><i @click="removeFromCart(product.id)" class="fa-solid fa-trash"></i></td>
      </tr>
    </table>
    <div class="checkout__total">
      <span class="total">Total:</span>
      <span class="price">R$ {{getCartTotal}}</span>
    </div>
  <button form="submitData" class="checkout">Finalizar</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
computed:{
  ...mapState(['cart']),
  ...mapGetters(['getCartTotal'])
},
methods: {
  ...mapActions(['removeFromCart']),
  getImgUrl(pic) {
    return `https://image.tmdb.org/t/p/w500${pic}`
  }
}
}
</script>

<style>
.cart__checkout {
  width: 550px;
}

.cart__checkout table {
    width: 100%;
    border-collapse: collapse;
}

.cart__checkout table tr {
  border-bottom: 3px solid #9eadba;
}

.cart__checkout table tr:first-child, .cart__checkout table tr:last-child {
  border-bottom: none;
}

.cart__checkout table tr th {
  text-align: left;
  font-weight: 400;
}

.cart__checkout table tr td {
  width: 20%;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
}

.cart__checkout table tr .qtd {
  text-align: center;
}
.cart__checkout table tr i {
  font-size: 17px;
  cursor: pointer;
}

.cart__checkout table tr td img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.cart__checkout .checkout__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;
}

.cart__checkout .checkout__total .total {
  font-size: 18px;
  font-weight: 500;
}

.cart__checkout .checkout__total .price {
  font-size: 26px;
  font-weight: 500;
}

.cart__checkout .checkout {
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: .03em;
  background: #6558f5;
  color: #ffffff;
  margin-top: 25px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 16px 14px 14px 14px;
}

@media screen and (max-width: 800px) {
  .cart__checkout {
    width: 100%;
  }
}

</style>