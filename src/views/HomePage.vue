<template>
  <nav-bar class="fixed-top" />

  <main>
    <div class="shadow container tp-1 position-absolute top-50 start-50 translate-middle p-4 rounded">
      <p class="fs-2 text-light text-center fst-italic glow">
        Welcome to my Portfolio
      </p>
      <p class="fw-light text-light text-center text-secondary">
        Feel free to explore
      </p>

      <div class="text-center pt-5">
        <ul class="list-group list-group-flush rounded mx-5 px-5 mb-3">
          <a href="/portfolio" :class="liClass">
            <BIconBriefcaseFill /> Portfolio
          </a>
          <a href="/projects" :class="liClass">
            <BIconHouseGearFill /> Projects
          </a>
          <a href="/resume" :class="liClass">Resume</a>
          <a href="/contacts" :class="liClass">
            <BIconEnvelopeFill /> Contacts
          </a>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import {
  BIconBriefcaseFill,
  BIconHouseGearFill,
  BIconEnvelopeFill
} from "bootstrap-icons-vue";

export default {
  components: {
    BIconBriefcaseFill,
    BIconHouseGearFill,
    BIconEnvelopeFill
  },
  data() {
    return {
      liClass:
        "list-group-item list-group-item-dark list-group-item-action tp-li text-light active"
    };
  }
};
</script>

<style scoped>
.tp-1 {
  background-color: rgba(0, 0, 0, 0.67);
}

.tp-li {
  background-color: rgba(0, 0, 0, 0) !important;
}

.active:hover {
  color: aquamarine !important;
  font-size: calc(1rem + 6px);
}

.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #008d95, 0 0 20px #008d95,
      0 0 30px #008d95, 0 0 40px #008d95, 0 0 50px #008d95;
  }

  to {
    text-shadow: 0 0 10px #fff, 0 0 15px #6dffe2, 0 0 20px #6dffe2,
      0 0 40px #6dffe2, 0 0 50px #6dffe2, 0 0 60px #6dffe2, 0 0 70px #6dffe2;
  }
}
</style>
