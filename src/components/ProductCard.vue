<template>
  <div v-for="(product, index) in inventory" :key="product.id" class="card__product">
    <div class="card__top">
      <figure>
        <img 
          width="250" 
          :src="getImgUrl(product.backdrop_path)"
          alt="Elephant at sunset"
        >
        <figcaption>{{formatDate(product.release_date)}}</figcaption>

      </figure>
    <i class="fa-solid fa-heart"></i>
    </div>
    <div class="card__bottom">
      <h4 class="card__title">{{product.original_title}}</h4>
      <div class="card__info">
        <div class="card__info__star">
          <i class="fa-solid fa-star"></i>
          <strong>{{product.vote_average}}</strong>
        </div>
        <span class="card__info__gen">
          {{updateGenre(product.genre_ids[0])}}
        </span>
      </div>
      <span class="card__price">R$ {{product.price}}</span>
      <label>
        <input 
          v-model.number="value[index]"
          type="number"
          min="1"
          placeholder="1"
        />
      </label>
      <a 
        href="javascript:void(0)"
        @click="addToCart({product: product, value: value, index: index})"
        class="add__btn">
        Adicionar
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['inventory', 'value', 'isVisible']),
    ...mapGetters(['getItems', 'getGenre']),
  },
  methods: {
    ...mapActions(['addToCart', 'toggleSidebar']),
    getImgUrl(img) {
      return `https://image.tmdb.org/t/p/w500${img}`
  },
    updateGenre(genreID) {
      return this.getGenre(genreID);
  },
    formatDate(fullDate) {
      var replace = fullDate.replaceAll("-", "/");
      var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
      var data = new Date(replace);
      var dataFormatada = ((data.getDate() + " de " + meses[(data.getMonth())] + ", " + data.getFullYear()));
      return dataFormatada;
    }
  }
}
</script>

<style>
.card__product {
  width: 220px;
}

.card__top {
  width: 100%;
  position: relative;
  border: 1px solid #9eadba;
}

.card__top figure {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
}

.card__top i {
  position: absolute;
  font-size: 23px;
  color: #c3cfd9;
  top: 10px;
  right: 10px;
}

.card__top figure img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__top figure figcaption {
  position: absolute;
  bottom: 4px;
  color: white;
  font-size: 12px;
  font-weight: 400;
}

.card__bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c3cfd9;
  border-top: none;
}

.card__bottom h4 {
  font-size: 15px;
  margin: 6px 4px;
  text-align: center;
  color: #10171c;
}

.card__bottom .card__info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.card__bottom .card__info .card__info__star {
  font-size: 15px;
  margin-left: 4px;
}
.card__bottom .card__info .card__info__gen {
  font-size: 12px;
}

.card__bottom .card__price {
  font-size: 12px;
  margin-bottom: 8px;
}

.card__bottom input {
  width: 35px;
  text-align: center;
  margin-bottom: 8px;
}

.card__bottom input::-webkit-inner-spin-button, -webkit-outer-spin-button {
  opacity: 1;
}

.card__bottom a {
  background: #6558f5;
  font-size: 14px;
  text-decoration: none;
  color: white;
  border-radius: 3px;
  padding: 9px 80px;
}


</style>