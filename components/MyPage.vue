<template>
  <div id="mypage">
    <span>こんにちは, {{ user.displayName }} さん</span>
    <span>チャージ量 {{ chargeMByte() }}Mbyte</span>
    <span>使用量 {{ useMByte() }}Mbyte</span>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import 'firebase/firestore'
import axios from 'axios'

export default {
  name: 'MyPage',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      charge: 0,
      use: 0
    }
  },
  mounted: function () {
    const db = firebase.firestore()
    db.collection('users').doc(this.user.email).get().then((doc) => {
      if (doc.exists) {
        console.log("doc data:", doc.data())
        this.charge = doc.data().charge
        this.use = doc.data().use
      } else {
        console.log("No such document!")
        this.charge = 0
        this.use = 0
      }
    }).catch((error) => {
      console.log("Error getting document:", error)
      this.charge = 0
      this.use = 0
    })
    
    const messaging = firebase.messaging()
    messaging.requestPermission().then(() => {
      console.log('Notification permission granted.')
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          const db = firebase.firestore()
          db.collection('users').doc(this.user.email).set(
            { token: currentToken },
            { merge: true }
          )
        } else {
          console.log('Nofitication inhibit.')
        }
      })
    })
    messaging.onTokenRefresh(function() {
      messaging.getToken().then(function(refreshedToken) {
        console.log('Token refreshed.')
        const db = firebase.firestore()
        db.collection('users').doc(this.user.email).set(
          { token: currentToken },
          { merge: true }
        )
      }).catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err)
      })
    })
    messaging.onMessage((payload) => {
      alert(payload.notification.title+"\r\n"
            +payload.notification.body)
    })
  },
  created: function () {
    const messaging = firebase.messaging()
    messaging.requestPermission().then(() => {
      console.log('Have Permission')
      return messaging.getToken()
    }).then((currentToken) => {
      if (currentToken && this.user) {
        const db = firebase.firestore()
        db.collection('users').doc(this.user.email).set(
          { token: currentToken },
          { merge: true }
        )
        console.log('Add token')
      }
    }).catch((err) => {
      console.log('Error Occurred ', err)
    })
  },
  methods: {
    chargeMByte: function () {
      return this.charge / 1000000
    },
    useMByte: function () {
      return this.use / 1000000
    }
  }
}
</script>