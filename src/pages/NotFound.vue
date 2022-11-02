<template>
  <div class="container">
    <div class="404-message">
      <img src="../assets/images/404/404.gif" alt="">
      <h2 class="title">Page Not Found</h2>
      <p>This page could not be found or doesn't exist - go back to all <router-link to="/projects">projects</router-link></p>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  img {
    margin-bottom: 2rem;
  }

  .title {
    font-family: orpheuspro, serif;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    font-style: normal;
    color: rgb(155, 155, 155);
    mix-blend-mode: luminosity;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
  }

  a {
    color: rgb(125, 97, 3);
  }
</style>
