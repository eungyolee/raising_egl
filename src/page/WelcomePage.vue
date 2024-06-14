<template>
  <div class="main">
    <h1 class="title">이은교 키우기</h1>
    <img src="@/assets/Profile.png" class="main_image" /><br />
    <router-link to="/test">
      <button class="start_button">시작하기</button> </router-link
    ><br />
    <router-link class="help" to="/help">도움말</router-link>
  </div>
</template>

<script>
console.log("인생 최대의 흑역사");
</script>

<style>
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

* {
  font-family: "Pretendard-Regular";
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.main {
  width: 500px;
  height: 700px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  padding-top: 65px;
}

.main_image {
  width: 360px;
}

.start_button {
  width: 150px;
  height: 40px;
  font-size: 1.05rem;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  cursor: pointer;
}

.start_button:hover {
  background-color: #191919;
  color: white;
}

.help {
  color: black;
  font-size: 1.075rem;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 525px) {
  .main {
    width: 100%;
    height: 600px;
    border-radius: 0px;
    background-color: #191919;
    color: white;
  }

  .title {
    font-size: 2.25rem;
    padding-top: 50px;
  }

  .main_image {
    width: 300px;
  }
}
</style>
