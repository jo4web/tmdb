<template>
<div v-if="showModalCheckout" class="modal__checkout">
  <h3>Obrigado {{getName}}</h3>
  <h4>Sua compra foi finalizada com sucesso.</h4>
  <router-link @click="showModal()" to="/" class="go__home">Ir para loja</router-link>
  <router-view/>
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['showModalCheckout']),
    ...mapGetters(['getName'])
  },
  methods: {
    ...mapActions(['showModal'])
  }
}
</script>

<style>
.modal__checkout {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 30%;
  top: 25%;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 3px solid #c3cfd9;
}
.modal__checkout h3 {
  font-size: 28px;
  font-weight: 400;
}

.modal__checkout h4 {
  font-size: 17px;
  font-weight: 400;
  margin-top: 10px;
}

.modal__checkout .go__home {
  text-decoration: none;
  background: #6558f5;
  color: #ffffff;
  margin-top: 10px;
  padding: 12px 35%;
  border-radius: 5px;
}

@media screen and (max-width: 920px) {
  .modal__checkout {
    width: 100%;
    height: 260px;
    top: 50%;
    right: 0;
  }
}
</style>