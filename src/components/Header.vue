<template>
<header>
    <router-link to="/" ><h1 class="logo">LOGO</h1></router-link>
    <div class="search-wrap">
      <input class="search-input" type="text" placeholder="Pesquisar"/>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <nav>
        <i class="fa-solid fa-heart"></i>
        <i 
          @click="toggleSidebar()"
          class="fa-solid fa-cart-shopping"
        >
          <span>
            {{this.$store.state.cart.length}}
          </span>
        </i>
    </nav>
  </header>
  <router-view />
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isVisible'])
  },
  methods: {
    ...mapActions(['toggleSidebar']),
  }
}
</script>

<style>
header {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-around;
  background: #8dd7cf;
  position: fixed;
  top: 0;
  align-items: center;
  z-index: 1;
}
header a {
  text-decoration: none;
}

header a h1 {
  color: #ffffff;
  font-weight: 700;
}

.search-wrap {
  position: relative;
  width: 50%;
}

header .search-wrap .search-input {
  width: 100%;
  height: 30px;
  font-size: 22px;
  color: #c5ced6;
  padding: 15px 10px 10px 10px;
  border: 2px solid #c5ced6;
  border-radius: 5px;
  outline: none;
}

header .search-wrap .search-input::placeholder {
  font-size: 22px;
  color: #c5ced6;
  font-weight: 400;
}

header .search-wrap i {
  position: absolute;
  top: 28%;
  left: 95%;
  font-size: 30px;
  color: #4b5c6b;
}

header nav {
  display: flex;
  gap: 20px;
}

header i {
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
}

header i span {
  border-radius: 50%;
  background-color: #fbe192;
  font-size: 13px;
  padding: 8px 12px;
  position: relative;
  right: 10px;
  bottom: 20px;
}


@media screen and (max-width: 920px) {
  header {
    flex-direction: column;
    justify-content: center;
    height: 150px;
    padding: 10px;
  }

  header a h1 {
    margin: 3px 0;
  }

  header .search-wrap .search-input {
    height: 20px;
    font-size: 18px;
    position: relative;
    right: 5%;
  }

  header nav {
    margin-top: 17px;
  }

  header .search-wrap i {
    font-size: 25px;
    left: 92%;
  }
}

@media screen and (max-width: 750px) {
  header .search-wrap .search-input {
    right: 7%;
  }

    header .search-wrap i {
    left: 90%;
  }
}

@media screen and (max-width: 450px) {
    header .search-wrap .search-input {
    right: 11%;
  }

  header .search-wrap i {
    left: 86%;
  }
}

</style>