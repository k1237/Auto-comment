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

.fuchidori {
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
    1px -1px 0 #000, 0px 1px 0 #000, 0-1px 0 #000, -1px 0 0 #000, 1px 0 0 #000;
}

.box-shadow {
  box-shadow: 4px 4px #000;
}

.none-shadow {
  box-shadow: none;
  position: relative;
  top: 2px;
}

.dot-font{
  font-family: 'DotGothic16', sans-serif;
}
</style>
