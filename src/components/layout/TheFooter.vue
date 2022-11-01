<template>
  <footer>
      <p>© 2022</p>
      <div class="footer-items">
        <a class="link" href="https://www.instagram.com/kiril.tucker/">instagram</a>
        <a class="link" href="https://twitter.com/kirilbt">twitter</a>
        <a class="link" href="https://www.linkedin.com/in/kiriltucker/">linkedin</a>
      </div>
    </footer>
</template>

<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
  }

  div a {
    margin-left: 1rem;
  }
</style>
