import axios from 'axios';
import { createStore } from 'vuex'
  
const store = createStore({
  state () {
    return {
      inventory: [],
      genres: [],
      cart: [],
      value: [],
      isVisible: false,
      sidebarPosition: '-999px',
      name: "",
      showModalCheckout: false,
    }
  },
  getters: {
    getItems(state) {
      return state.cart.length;
    },

    getItemTotal: (state) => (index) => {
      const result = state.cart[index].quantity * state.cart[index].price;
      return result.toFixed(2);
    },

    getCartTotal(state) {
      const result = state.cart.reduce((acc, currentValue) => {
        return acc + (currentValue.quantity * currentValue.price); 
      }, 0)
      return result.toFixed(2);
    },

    getName(state) {
      return state.name;
    },
    
    getGenre: (state) => (genreID) => {
      if (state.genres) {
        const result = state.genres.filter(genre => genre.id == genreID);
        return result[0].name;
      }
    }
  },
  mutations: {
    setToggleSidebar(state) {
      state.isVisible = !state.isVisible;
      state.sidebarPosition = state.isVisible ? '0px' : '-999px';
    },

    setCart(state, {product, value, index}) {
      const cartIndex = state.cart.findIndex(item => product.id === item.id)
    
      if (cartIndex >= 0) {
        return state.cart[cartIndex].quantity += value[cartIndex]
      }
  
      product.quantity = value[index]
      state.cart.push(product)
    },

    setRemoveFromCart(state, id ) {
      state.cart = state.cart.filter(item => item.id != id);
    },

    setEmptyCart(state) {
      state.cart = [];
    },

    setData(state, {products, genres}) {
      const random = (max, min) => Math.random() * (max - min + 1) + min
      state.inventory = products.results.map(results => Object.assign(results, { price: random(199, 50).toFixed(2) }, { inv: Math.floor(random(10, 1)) }));
      
      state.genres = genres.genres;
    },

    setInputValue(state) {
      for(let i = 0; i < 20; i++) {
        state.value.push(1);
      }
    },

    setName(state, name) {
      state.name = name;
    },

    setShowModal(state) {
      state.showModalCheckout = !state.showModalCheckout;
      state.isVisible = false;
      state.sidebarPosition = '-999px';
      state.cart = [];
    }
  },
  actions: {
    async fetchData({ commit }) {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=89eee079cf53d52d677e9f6c95d899c1&sort_by=popularity.desc');
        return response.data;
      } catch(e) {
        console.log(e);
      }
    }

    const getGenre = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=89eee079cf53d52d677e9f6c95d899c1&language=en-US');
        return response.data;
      } catch(e) {
        console.log(e);
      }
    }

    async function resolveAll() {
      const products = await getProducts();
      const genres = await getGenre();

      commit('setData', { products, genres })
    }
    
    resolveAll();
    
    },
    addToCart({ commit }, item) {
      commit('setCart', item)
    },
    removeFromCart({ commit }, id) {
      commit('setRemoveFromCart', id)
    },
    emptyCart({ commit }) {
      commit('setEmptyCart')
    },
    inputValue({ commit }) {
      commit('setInputValue')
    },
    toggleSidebar({ commit }) {
      commit('setToggleSidebar')
    },
    saveName({ commit }, name) {
      commit('setName', name)
    },
    showModal({ commit }) {
      commit('setShowModal')
    }
  }
})

export default store;
