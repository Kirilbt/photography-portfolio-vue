<template>
  <header>
    <nav>
      <h1><router-link to="/">kiril.photography</router-link></h1>
      <div>
        <router-link to="/projects">projects</router-link>
        <router-link to="/about">about</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  nav {
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
  }

  div a {
    margin-left: 1rem;
  }
</style>
