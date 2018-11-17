<template>
  <v-container>
    <v-layout
      row
      class="text-xs-center"
    >
      <v-flex
        class="grey lighten-4"
      >
        <v-container>
          <v-card flat>
            <v-card-title primary-title>
              <h4>ログイン</h4>
            </v-card-title>
            <v-form>
              <v-card-actions>
                <v-btn @click="googleLogin">
                  <img
                    style="width: 20px; height: 20px; margin-right: 18px;"
                    src="~assets/google-logo.png"
                  >
                  Googleアカウントでログイン
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Home',
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>