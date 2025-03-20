<template>
  <main>
    <div class="container transparent-1 position-absolute top-50 start-50 translate-middle p-4 rounded">
      <p class="fs-2 text-light text-center fst-italic">
        Welcome to my Page
      </p>
      <p class="text-center text-secondary">Feel free to explore</p>

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
    BIconBriefcaseFill, BIconHouseGearFill, BIconEnvelopeFill
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
  main {
    width: 100vw;
    height: 92vh;
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .transparent-1 {
    background-color: rgba(0, 0, 0, 0.67);
    z-index: 1;
  }

  .tp-li {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .active:hover {
    color: aquamarine !important;
    font-size: calc(1rem + 6px);
  }
</style>
