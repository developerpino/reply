export default {
  state: {
    boardList: [
      {
        idx: 1,
        title: '생명의 정체',
        content: '생명 그건 단지 우연일 뿐 큰 우주의 아주 작은 사건일 뿐 미세한 세포를 복제하는 화학적 유전자 돌연변이 그것이 생명의 정체',
        desc: 'chapter',
        isAllViewReply: false,
      },
      {
        idx: 2,
        title: '생명 불변의 법칙',
        content: '생명 그건 신의 자연섭리 함부로 다가설 수 없는 세계 오직 신만이 정해놓은 질서에 기대어 보존되는 생태계  그것이 생명 불변의 법칙',
        desc: 'chapter',
        isAllViewReply: false,
      },
      {
        idx: 3,
        title: '신념도 야망',
        content: '과학은 생태계를 뛰어넘어 과학은 그 비밀을 밝혀낼 뿐 금단의 사과를 먹었던 것 처럼 언제나 인간은 유혹에 빠지니 당신의 신념도 야망일 뿐',
        desc: 'chapter',
        isAllViewReply: false,
      },
    ],
  },
  mutations: {
    toggleIsAllViewReply: (state, payload) => {
      state.boardList[payload].isAllViewReply = state.boardList[payload].isAllViewReply ? false : true;
    },
  },
  actions: {},
  getters: {
    getBoardList: (state) => state.boardList,
  },
}
