<script>
import router from "@/route";
export default {
  data() {
    return {
      level: 1,
      percentage: 100,
      explanation: [
        "갓 태어난 이은교이다. (화질 깨짐 ㅈㅅ)",
        "정장을 입은 5살의 이은교이다.",
        "운동회에 참여하는 7살의 이은교이다.",
        "사람 한명을 암살하는 초등학교 1학년(사실 2학년임)의 이은교이다.",
        "라이언의 뺨을 때리는 초등학교 4학년의 이은교이다.",
        "초등학교를 졸업한 이은교이다. (잘 나온 사진이 없어서 뒷모습으로 대체)",
        "전주 여행을 간 중학교 1학년의 이은교이다.",
        "다시 유치원으로 돌아간 듯한 고1의 이은교이다.",
      ],
      image: [
        require("@/assets/face/baby.jpg"),
        require("@/assets/face/five.jpg"),
        require("@/assets/face/seven.jpg"),
        require("@/assets/face/ele1.jpg"),
        require("@/assets/face/ele4.jpg"),
        require("@/assets/face/ele6.png"),
        require("@/assets/face/mid1.jpg"),
        require("@/assets/face/high1.jpg"),
      ],
      success: false,
      removeToast: null,
      // 50일 때, 5살 때, 7살 때, 초등학교 입학했을 때, 4학년 때, 초등학교 졸업했을 때, 중학교 1학년 때, 지금
    };
  },
  methods: {
    enforce() {
      if (Math.random() < this.percentage / 100) {
        this.level += 1;
        this.percentage -= 12.5;
        this.success = true;
        document.querySelector(".success_toast").innerText =
          "강화에 성공하였습니다.";

        // 토스트
        document.querySelector(".success_toast").classList.add("reveal");
        document.querySelector(".success_toast").classList.contains("reveal")
          ? (clearTimeout(this.removeToast),
            (this.removeToast = setTimeout(function () {
              document
                .querySelector(".success_toast")
                .classList.remove("reveal");
            }, 1000)))
          : (this.removeToast = setTimeout(function () {
              document
                .querySelector(".success_toast")
                .classList.remove("reveal");
            }, 1000));
        if (this.percentage < 12.5) {
          router.push({ path: "/finish" });
        }
      } else {
        this.success = false;
        document.querySelector(".success_toast").innerText =
          "강화에 실패하였습니다.";
        document.querySelector(".success_toast").classList.add("reveal");
        document.querySelector(".success_toast").classList.contains("reveal")
          ? (clearTimeout(this.removeToast),
            (this.removeToast = setTimeout(function () {
              document
                .querySelector(".success_toast")
                .classList.remove("reveal");
            }, 750)))
          : (this.removeToast = setTimeout(function () {
              document
                .querySelector(".success_toast")
                .classList.remove("reveal");
            }, 750));
      }
    },
  },
};
</script>

<template>
  <div class="wrap">
    <div class="main">
      <h1 class="level_name">{{ level }}단계 이은교</h1>
      <h3 class="level_explanation">{{ explanation[level - 1] }}</h3>
      <img v-bind:src="image[level - 1]" class="face_image" />
      <button class="enforce_button" @click="enforce">강화하기</button>
      <h3>강화 확률 : {{ percentage }}%</h3>
    </div>
    <div class="success_toast" ref="toast">강화에 성공하였습니다.</div>
  </div>
</template>

<style>
.level_name {
  padding-top: 50px;
}

.level_explanation {
  font-size: 1.1em;
}

.face_image {
  width: 400px;
  height: 400px;
}

.enforce_button {
  width: 150px;
  height: 40px;
  font-size: 1.05rem;
  background-color: white;
  margin-top: 10px;
  cursor: pointer;
}

.enforce_button:hover {
  background-color: #191919;
  color: white;
}

.success_toast {
  width: 175px;
  height: 30px;
  margin: 30px auto;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
  /* background: rgba(0, 0, 0, 0.35); */
  background-color: silver;
  color: black;
}

.success_toast.reveal {
  opacity: 0.65;
  visibility: visible;
}

@media (max-width: 525px) {
  .level_name {
    padding-top: 45px;
  }

  .level_explanation {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1em;
  }

  .face_image {
    width: 300px;
  }

  .success_toast {
    margin-top: 0px;
  }
}
</style>
