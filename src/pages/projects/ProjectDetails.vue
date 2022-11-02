<template>
  <div class="container">
    <img class="main-image" src="../../assets/images/summer.jpg" alt="">
    <div class="project-details">
      <h2 class="title">Title</h2>
      <p class="details">
        Model - Sabrina Barca<br>
        Date - September 2018 <br>
        Location - Milano, Italy
      </p>
    </div>
    <img class="image" src="../../assets/images/summer.jpg" alt="" />
    <img class="image" src="../../assets/images/summer.jpg" alt="" />
    <img class="image" src="../../assets/images/summer.jpg" alt="" />
    <img class="image" src="../../assets/images/summer.jpg" alt="" />
    <img class="image" src="../../assets/images/summer.jpg" alt="" />
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .main-image {
    height: 100vh;
  }

  .project-details {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 40%;
  }

  .title {
    font-family: orpheuspro, serif;
    font-size: 8rem;
    font-weight: 400;
    font-style: normal;
    color: rgb(155, 155, 155);
    mix-blend-mode: luminosity;
  }

  .details {
    line-height: 1.5;
  }

  .image {
    height: 100vh;
    margin-left: 0.5rem;
  }
</style>
