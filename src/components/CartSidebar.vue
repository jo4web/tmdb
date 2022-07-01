<template>
<aside v-bind:style="{ right: sidebarPosition }" class="sidebar">
  <div class="sidebar__wrap">
    <div class="sidebar__content">
      <span class="sidebar__title">Meu Carrinho</span>
    <span @click="emptyCart()"><a href="#">Esvaziar</a></span>
  </div>
  <span v-if="this.$store.state.cart.length === 0" class="empty__msg"><p>Carrinho Vazio :(</p></span>
  <table v-if="this.$store.state.cart.length > 0">
  <tr>
    <th style="width:15%"></th>
    <th style="width:50%">Item</th>
    <th style="width:10%">Qtd</th>
    <th style="width:10%">Preço</th>
    <th style="width:10%">Total</th>
    <th style="width:5%"></th>
  </tr>
  <tr v-for="(product, index) in cart" :key="product.original_title">
    <td><img :src="getImgUrl(product.backdrop_path)"/></td>
    <td>{{product.original_title}}</td>
    <td class="qtd">{{product.quantity}}</td>
    <td>R${{product.price}}</td>
    <td>{{itemTotal(index)}}</td>
    <td class="row__trigger">
      <i 
        @click="removeFromCart(product.id), hoverArray(index)" 
        @mouseover="hover[index] = true" 
        @mouseleave="hover[index] = false" 
        class="fa-solid fa-trash">
      </i>
      <span v-if="hover[index]" class="msg__onmouseover">
        Remover do carrinho
      </span>
    </td>
  </tr>
</table>
</div>
<div class="sidebar__footer">
  <div class="sidebar__total">
    <span>Total:</span>
    <span class="price">R${{getCartTotal}}</span>
  </div>
  <router-link to="/checkout" class="checkout">Finalizar Compra</router-link>
</div>
</aside>
<router-view />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      hover: []
    }
  },
  computed: {
    ...mapState(['cart', 'sidebarPosition']),
    ...mapGetters(['getCartTotal']),
    itemTotal(index) {
      return this.getItemTotal(index);
    }
  },
  methods: {
    ...mapActions(['removeFromCart', 'emptyCart']),
    ...mapGetters(['getItemTotal']),
    getImgUrl(pic) {
      return `https://image.tmdb.org/t/p/w500${pic}`
    },
    hoverArray(index) {
      this.hover[index] = false;
    }
  }
}
</script>

<style>

aside {
  transition: all 0.5s;
}

.sidebar {
  position: fixed;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86.5vh;
  background: #ffffff;
  padding: 0px 10px 20px 10px;
  border: 2px solid #c3cfd9;
  z-index: 1;
  overflow-y: scroll;
}

.sidebar .sidebar__wrap .sidebar__content {
  margin-bottom: 18px;
  margin-top: 10px;
}

.sidebar .sidebar__wrap .sidebar__content .sidebar__title {
  font-size: 18px;
  font-weight: 400;
}

.sidebar .sidebar__wrap .sidebar__content span a {
  color: #6558f5;
}

.sidebar .sidebar__wrap table {
  width:400px;
}

.sidebar .sidebar__wrap .empty__msg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar .sidebar__wrap .empty__msg p {
  text-align: center;
  font-size: 24px;
}


.sidebar .sidebar__wrap table tr th {
  text-align:left;
}

.sidebar .sidebar__wrap table tr .qtd {
  text-align: center;
}

.sidebar .sidebar__wrap table tr td {
  font-size: 14px;
  text-align:left;
}

.sidebar .sidebar__wrap table tr td img {
  width:50px;
  height:50px;
  object-fit:cover;
  margin-right:5px
}

.sidebar .sidebar__wrap table tr td i {
  font-size: 16px;
  text-align:left;
  cursor: pointer;
  margin-left: 5px;
}

.sidebar .sidebar__wrap table tr .row__trigger {
  position: relative;
}

.sidebar .sidebar__wrap table tr td .msg__onmouseover {
  width: 150px;
  position: absolute;
  top: 43px;
  right: -6px;
  background: #4b5c6b;
  color: #ffffff;
  padding: 7px;
  text-align: center;
  border-radius: 5px;
  font-weight: 400;
}

.sidebar .sidebar__wrap table tr td .msg__onmouseover::before {
  position: absolute;
  content: '';
  left: 143px;
  top: -7px;
  border-style: solid;
border-width: 0 7px 7px 7px;
  border-color: transparent transparent #4b5c6b transparent;
}


.sidebar .sidebar__wrap .sidebar__content, .sidebar__total {
  display: flex;
  justify-content: space-between;
}

.sidebar .sidebar__footer .sidebar__total {
  align-items: end;
  margin-bottom: 34px;
  font-size: 18px;
  font-weight: 400;
}

.sidebar .sidebar__footer .sidebar__total .price {
  font-size: 23px;
  font-weight: bold;
}

.sidebar .sidebar__footer .checkout {
  text-decoration: none;
  font-size: 18px;
  color: white;
  background: #6558f5;
  padding: 12px 136px;
  border-radius: 3px;
}

@media screen and (max-width: 920px) {
  .sidebar {
    width: 100%;
    height: 75.5vh;
    top: 169px;
    box-sizing: border-box;
  }

  .sidebar .sidebar__wrap table {
    width:100%;
  }

  .sidebar .sidebar__wrap table tr td {
    width:20%;
  }

  .sidebar__footer {
    display: flex;
    flex-direction: column;
  }

  .sidebar .sidebar__footer .checkout {
    white-space: nowrap;
    padding: 12px 0;
    text-align: center;
  }

}

</style>