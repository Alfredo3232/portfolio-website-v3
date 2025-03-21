<template>
  <nav
    class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Alfredo's Portfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-underline">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          <router-link class="nav-link" to="/projects">Projects</router-link>
          <router-link class="nav-link" to="/resume">Resume</router-link>
          <router-link class="nav-link" to="/contacts">Contacts</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
