<template>
  <div>
    <Header />

    <div class="main wrapper m-auto">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<style>
html {
  background-color: black;
  color: white;
}

.wrapper {
  width: 75%;
}

.m-auto {
  margin: 0 auto;
}

.main {
  height: 800px;
}
</style>