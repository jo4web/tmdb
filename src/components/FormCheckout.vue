<template>
  <div class="checkout__data">
    <form @submit="onSubmit" id="submitData">
      <input v-model="name" type="text" class="full__name geral__input" placeholder="Nome Completo" required />
      <p style="color:red">{{name}}</p>
      <div class="input__group">
        <input type="number" class="cpf__input geral__input" placeholder="CPF" required/>
        <input type="tel" class="phone__input geral__input" placeholder="Celular" required/>
      </div>
      <input type="email" class="email__input geral__input" placeholder="E-mail" required/>
      <div class="input__group">
        <input type="number" class="zip__input geral__input" placeholder="CEP" required/>
        <input type="text" class="address__input geral__input" placeholder="Endereço" required/>
      </div>
      <div class="input__group">
        <input type="text" class="city__input geral__input" placeholder="Cidade" required/>
        <input type="text" class="estate__input geral__input" placeholder="Estado" required/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
computed: {
  ...mapState(['name']),
  name: {
    get() {
      return this.name;
    },
    set(value) {
      this.saveName(value);
    }
  }
},
methods: {
  ...mapActions(['saveName', 'showModal', 'emptyCart']),
  onSubmit(e) {
    e.preventDefault();
    this.showModal();
    this.emptyCart();
  } 
}

}
</script>

<style>
.checkout__data {
  width: 550px;
}

.checkout__data form {
  width: 100%;
}

.checkout__data form .input__group {
  display: flex;
  justify-content: space-between;
}

.geral__input {
  font-size: 18px;
  color: #c5ced6;
  padding: 15px 10px 10px 10px;
  border: 2px solid #c5ced6;
  border-radius: 3px;
  height: 60px;
  outline: none;
  margin-bottom: 28px;
  box-sizing: border-box;
}

.geral__input::placeholder {
  font-size: 18px;
  color: #c5ced6;
  font-weight: 400;
}

.checkout__data form .geral__input::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  opacity: 0;
}

.full__name, .email__input {
  width: 100%;
}

.cpf__input, .phone__input, .city__input, .estate__input {
  width: 47%;
}

.zip__input {
  width: 25%;
}

.address__input {
  width: 70%;
}

@media screen and (max-width: 800px) {
  .checkout__data {
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .cpf__input, .phone__input, .city__input, .estate__input, .zip__input, .address__input {
    width: 100%;
  }
  
  .checkout__data form .input__group {
    flex-direction: column;
  }
}


</style>