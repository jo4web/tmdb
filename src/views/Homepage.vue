<template>
  <main class="home">
    <CartSidebar />
    <div class="card__container">
      <ProductCard />
    </div>
  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import CartSidebar from '../components/CartSidebar.vue'

export default {
    components: {
      ProductCard,
      CartSidebar
    }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 100px 66px;
}

main .card__container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 70px;
  row-gap: 50px;
}

@media screen and (max-width: 1220px) {
  main .card__container {
    grid-template-columns: auto auto auto;
  }
}

@media screen and (max-width: 920px) {
  .home {
  margin: 190px 66px;
}
}

@media screen and (max-width: 850px) {
  main .card__container {
    column-gap: 50px;
  }
}

@media screen and (max-width: 800px) {
  main .card__container {
    column-gap: 20px;
  }
}

@media screen and (max-width: 720px) {
  main .card__container {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 500px) {
  main .card__container {
    grid-template-columns: auto;
  }
}



</style>