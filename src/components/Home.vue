<template>
<div class="main-container card">
  <div class="send-tweet">
    <input type="text" name="Tweet" class="form-control" placeholder="Send a new Tweet" v-model="tweet">
    <button type="button" class="btn btn-primary" name="submit" @click="sendTweet">Tweet</button>
  </div>
  <div v-for="user in book">
      <div v-for="tweet in parseTweets(user.tweets)"  class="tweet card text-center tweets">
        <div class="tweet-user card-header">
          <img :src="user.picture" class="userimg">
          {{ user.tag }}
        </div>
        <div class="card-block">
          <p>{{ tweet.name }}</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCZF1ckbOW6_ssUJMCCh49WKdncToGigS0',
  authDomain: 'twitter-clone-3e2af.firebaseapp.com',
  databaseURL: 'https://twitter-clone-3e2af.firebaseio.com',
  storageBucket: 'twitter-clone-3e2af.appspot.com',
  messagingSenderId: '292290833526'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let bookRef = db.ref('book')

export default {
  name: 'app',
  firebase: {
    book: bookRef,
    anArray: db.ref('book/user1/tweets')
  },
  data () {
    return {
      tweet: ''
    }
  },
  methods: {
    parseTweets (tweets) {
      console.log(tweets)
      return typeof tweets === 'string' ? JSON.parse(tweets) : tweets
    },
    sendTweet () {
      this.$firebaseRefs.anArray.push({
        name: this.tweet
      })
    }
  }
}
</script>

<style media="screen">
  .cent {
    text-align: center;
  }
  .tweets {
    margin-top: 1px;
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 1px;
  }
  .send-tweet {
    padding: 4px;
  }
  .userimg {
    height: auto;
    width: auto;
    max-width: 30px;
    max-height: 30px;
  }
</style>
