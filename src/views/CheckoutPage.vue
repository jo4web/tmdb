<template>
<main class="main">
  <h3 class="checkout__title">Finalizar Compra</h3>
  <div class="checkout__page">
    <FormCheckout />
    <CartCheckout />
  </div>
    <ModalCheckout />
</main>
</template>

<script>
import FormCheckout from '../components/FormCheckout.vue'
import CartCheckout from '../components/CartCheckout.vue'
import ModalCheckout from '../components/ModalCheckout.vue'

import { mapState } from 'vuex'

export default {
  components: {
    FormCheckout,
    CartCheckout,
    ModalCheckout
  },
  computed: {
    ...mapState(['cart']),
  }
}
</script>

<style>
.main {
  max-width: 1200px;
  position: relative;
  margin: 0 66px;
}

.checkout__page {
  display: flex;
  justify-content: space-between;
}

.checkout__title {
  font-size: 30px;
  font-weight: 400;
}

@media screen and (max-width: 1200px) {
  .main {
    margin: 180px 30px;
}

  .checkout__page {
    gap: 25px;
}
}

@media screen and (max-width: 800px) {
  .checkout__page {
    flex-direction: column;
    align-items: center;
  }
}
</style>
