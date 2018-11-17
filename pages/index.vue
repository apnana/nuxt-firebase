<template>
  <section class="container">
    <div>
      <div class="links">
        <Home v-if="!isLogin" />
        <MyPage
          v-if="isLogin"
          :user="userData"
          :charge="charge"
          :use="use" />
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import Home from '~/components/Home.vue';
import MyPage from '~/components/MyPage.vue';
import 'vuetify/dist/vuetify.min.css'

export default {
  components: {
    Home,
    MyPage
  },
  props: {
    charge: {
      type: Number,
      default() {
        return 0
      }
    },
    use: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  asyncData (context) {
    return { name: 'Hello, World！！', isLogin:false,
             userData:null }
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用される
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

