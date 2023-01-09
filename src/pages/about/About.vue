<template>
  <div class="container">
    <div class="content">
      <h2 class="title">About</h2>
      <div class="intro">
        <p>Hello, I'm Kiril! I am a UI Designer and Creative Developer passionate about portrait and street photography.</p><br>
        <p>I am always open for collaborations with MUAs, stylists, models and hair dressers. Don't hesitate to get in touch through my social networks:</p><br>
        <ul class="links">
          <li><a href="https://www.instagram.com/kiril.tucker/">Instagram</a></li>
          <li><a href="https://twitter.com/kirilbt">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/kiriltucker/">LinkedIn</a></li>
        </ul>
      </div>
      <div class="other">
        <p>Check my other type of creative work:</p><br>
        <ul class="links">
          <li><a href="https://kiril.ch">UI Design & Creative Dev</a></li>
        </ul>
      </div>
    </div>
    <img src="../../assets/images/about/me.jpg" alt="">
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .content {
    padding: 5rem 1rem;
    max-width: 40%;
  }

  .content p {
    line-height: 1.2rem;
  }

  .title {
    font-family: orpheuspro, serif;
    font-size: 8rem;
    font-weight: 400;
    font-style: normal;
    color: rgb(155, 155, 155);
    mix-blend-mode: luminosity;
    margin-bottom: 3rem;
  }

  .intro {
    padding-bottom: 2rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid #00000025;
  }

  .links li {
    margin-bottom: 0.5rem;
  }

  img {
    height: 100vh;
  }
</style>
