<template>
  <div>
    <section>
      <div class="container">
        <div class="row">      
          <div class="mx-auto">
            <div class="col-lg-12">
              <div class="text-center my-3">
                <div class="card-deck no-gutters">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3" v-for="(board, boardKey) in getBoardList" :key="boardKey">
                    <div class="card mb-4">
                      <div class="card-header">
                        <h5 class="card-title m-0 p-0 font-weight-bolder text-secondary">{{board.title}}</h5>
                      </div>
                      <div class="card-body text-left">
                        <p class="card-text">{{board.content}}</p>
                        <div class="masking">
                          <div class="masking-desc">{{board.desc}}</div>
                          <div class="masking-text">{{board.idx}}</div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="likes">
                          <div style="position: relative">
                            <div class="heart" :data-board-idx="board.idx" :class="getLikes[board.idx] && getLikes[board.idx].includes($router.currentRoute.params.user) ? 'is-active' : ''" @click="toggleLike"></div>
                          </div>
                          <span style="margin-left: 70px">{{getLikes[board.idx] ? getLikes[board.idx].length : 0}}</span> 명이 좋아합니다
                        </div>
                        <div class="reply-list">
                          <div class="reply-is-all-view-reply" v-if="getReply[board.idx] && getReply[board.idx].length>3 && board.isAllViewReply===false" @click="toggleIsAllViewReply(boardKey)">댓글 {{getReply[board.idx].length-2}}개 모두 보기</div>
                          <div v-for="(reply, replyKey) in getReply[board.idx]" :key="replyKey" class="reply-view" v-show="board.isAllViewReply || getReply[board.idx].length===3 || getReply[board.idx].length-replyKey<3">
                            {{reply}}
                          </div>
                        </div>
                        <div>
                          <input type="text" class="form__input" placeholder="댓글 달기....." maxlength="100" style="width: 100%;height: 40px" :data-board-idx="board.idx" @keyup.enter="setReply"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Board',
  mounted() {
    const boardIdx = this.getBoardList.map(r=>r.idx);
    const reply = this.$store.dispatch('getReply', boardIdx);
    const likes = this.$store.dispatch('getLikes', boardIdx);
    Promise.all([reply, likes]).then(() => {});
  },
  computed: {
    ...mapGetters([
      'getBoardList',
      'getReply',
      'getLikes',
    ]),
  },
  methods: {
    setReply(e) {
      if (e.target.dataset.boardIdx && e.target.value.length > 0) {
        this.$store.dispatch('saveReply', {
          boardIdx: e.target.dataset.boardIdx,
          content: e.target.value,
        }).then(() => {
          e.target.value = '';
        });
      }
    },
    toggleLike(e) {
      if (this.getLikes[e.target.dataset.boardIdx].includes(this.$router.currentRoute.params.user)) {
        this.$store.dispatch('removeLikes', {
          boardIdx: e.target.dataset.boardIdx,
          user: this.$router.currentRoute.params.user,
        });
      } else {
        this.$store.dispatch('saveLikes', {
          boardIdx: e.target.dataset.boardIdx,
          user: this.$router.currentRoute.params.user,
        });
      }
    },
    toggleIsAllViewReply(boardKey) {
      this.$store.commit('toggleIsAllViewReply', boardKey);
    },
  },
}
</script>
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800%7CRaleway:100,200,300,400,600,700,800,900%7CMontserrat:100,200,300,400,500,600,700,800,900");
.box-shadow {
  box-shadow: 0px 0px 18px -3px rgba(143, 143, 143, 0.5);
}
.card:hover {
  box-shadow: 0px 0px 20px -3px rgba(143, 143, 143, 0.75);
}
.box-shadow-dark {
  box-shadow: 3px 3px 11px -3px rgba(0, 0, 0, 0.25);
}
section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.font-weight-bolder {
  font-weight: 900;
}
.display-1, .display-2, .display-3, .display-4 {
  font-weight: 900;
}
.card {
  -webkit-transition: .5s ease;
  transition: .5s ease;
  border-radius: 0;
  -webkit-transform: perspective(3em) rotateX(0deg) rotateY(-1.175deg) rotateZ(-1deg);
          transform: perspective(3em) rotateX(0deg) rotateY(-1.175deg) rotateZ(-1deg);
}
.card-header {
  border-radius: 0;
}
.card-footer {
  padding: 0;
}
.card-header, .card-footer {
  -webkit-transition: .5s ease;
  transition: .5s ease;
}
.card:hover {
  border-color: #ffc107;
  -webkit-transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.card:hover .card-header, .card:hover .card-footer {
  color: #ba8b00;
  border-color: #ffc107;
  background-color: #ffeeba;
}
.card:hover .promotion-promo {
  -webkit-transform: scale(1.175) translateY(2.5px);
          transform: scale(1.175) translateY(2.5px);
  -webkit-transform-origin: left center;
          transform-origin: left center;
}
.card:hover .masking {
  -webkit-transform: translate(2.5px, 17.5px) scale(1.15);
          transform: translate(2.5px, 17.5px) scale(1.15);
  -webkit-transform-origin: center right;
          transform-origin: center right;
}
.card-body {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.card .btn {
  font-weight: bold;
  text-transform: uppercase;
}
.masking {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ffc107;
  width: 92px;
  height: 92px;
  padding-bottom: 0rem;
  padding-top: 1.25rem;
  text-align: center;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  border-radius: 5rem;
  color: #fff;
  z-index: -1;
  -webkit-transform: translate(5px, 27.5px) rotate(-9deg);
          transform: translate(5px, 27.5px) rotate(-9deg);
  border: 1px dashed #fff;
  -webkit-transition: .25s linear;
  transition: .25s linear;
  line-height: 1.15;
}
.masking-desc {
  padding: 0;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: .9rem;
  display: block;
}
.masking-text {
  padding: 0;
  margin: 0 auto;
  font-weight: 900;
}
.card-animate {
  counter-reset: section;
}
.card-animate .card-body:before {
  -webkit-transition: .5s ease;
  transition: .5s ease;
  counter-increment: section;
  content: "" counter(section) "";
  display: block;
  font-size: 15rem;
  font-weight: 900;
  position: absolute;
  bottom: 5rem;
  line-height: 0;
  left: -.85rem;
  padding: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.1);
  z-index: 0;
}
.card-animate .card:hover .card-body:before {
  -webkit-transform: translate(10px, -10px);
          transform: translate(10px, -10px);
}
.card-animate .card-text {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.card-animate .card-title {
  font-weight: 900;
  text-transform: uppercase;
}
.heart {
  width: 70px;
  height: 70px;
  top: -38px;
  left: -20px;
  position: absolute;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  -webkit-transition: background-position 1s steps(28);
  transition: background-position 1s steps(28);
  -webkit-transition-duration: 0s;
          transition-duration: 0s;
}
.heart.is-active {
  -webkit-transition-duration: 1s;
          transition-duration: 1s;
  background-position: -2800px 0;
}
.reply-list {
  padding:10px;
  background-color: #FFFFFF;
  text-align: left;
  font-size: 10pt;
}
.reply-view {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
  height: 1.2em;
}
.likes {
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.125);
}
.reply-is-all-view-reply {
  cursor: pointer;
}
</style>
