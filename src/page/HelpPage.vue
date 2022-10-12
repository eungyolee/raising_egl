<template>
  <div class="main">
    <h1 class="question">Q. 이은교가 누구인가요?</h1>
    <p class="explanation">
      이름 : 이은교<br />
      성별 : 남성<br />
      학교 : 염경중학교<br />
      특징 : <del>잼민이</del>, <del>말 많음</del>, 개발 좋아함
    </p>
    <h1 class="question">Q. '이은교 키우기'가 무엇인가요?</h1>
    <p class="explanation">
      어릴 때의 이은교부터, 지금의 이은교까지 버튼을 눌러 키우는 게임입니다!
    </p>
    <img src="@/assets/Profile.jpg" class="help_image" /><br />
    <router-link to="/">
      <button class="go-back_button" @click="goBack">돌아가기</button>
    </router-link>
  </div>
</template>

<style>
.go-back_button {
  width: 150px;
  height: 40px;
  font-size: 1.05rem;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
}

.go-back_button:hover {
  background-color: #191919;
  color: white;
}

.help_image {
  width: 350px;
}

@media (max-width: 525px) {
  .question {
    font-size: 1.5rem;
  }

  .help_image {
    width: 275px;
  }
}
</style>
