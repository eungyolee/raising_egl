<template>
  <div class="main">
    <h1 class="congratulations">축하합니다!</h1>
    <h3>
      저걸 다 깨셨군요!<br />
      혹시 다시 해보시는 것은 어떠신가요? ^^
    </h3>
    <router-link to="/">
      <button class="restart_button">다시하기</button>
    </router-link>
    <img src="@/assets/finish.jpg" class="finish_image" />
  </div>
</template>

<style>
.congratulations {
  font-size: 2.5rem;
  margin-top: 30px;
}

.restart_button {
  width: 150px;
  height: 40px;
  font-size: 1.05rem;
  margin-top: 5px;
  background-color: white;
  cursor: pointer;
}

.restart_button:hover {
  background-color: #191919;
  color: white;
}

.finish_image {
  width: 400px;
  margin-top: 35px;
}

@media (max-width: 525px) {
  .congratulations {
    font-size: 2rem;
  }

  .finish_image {
    width: 300px;
  }
}
</style>
