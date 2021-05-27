<template>
  <div id="app">
    <div class="container">
    <div class="row">
    <div class="col-sm-12">
<!--  -->
  <button class="btn btn-outline-danger" @click="selectedComponent = 'appCard'">Card</button>
    <button class="btn btn-outline-danger" @click="selectedComponent = 'appContact'">Contact</button>

  <button class="btn btn-outline-danger" @click="selectedComponent = 'appBout'">About</button>
        <div>{{selectedComponent}}</div>


<!--  -->
    
    <appCard cardWord="Cat">
      <p>Balck cat show ciu</p>
      <p>Why cat</p>
      <div>{{selectedComponent}}</div>
      <keep-alive>
              <component :is="selectedComponent"></component>

        </keep-alive>

    </appCard>
  </div>
  </div>
  </div>
    </div>
</template>

<script>
import Card from './components/Card.vue';
import Contact from './components/Contact';
import About from './components/About';

export default {
  data: function(){
    return {
      selectedComponent: 'appCard'
    }
  },
  components: {
    appCard: Card,
    appContact: Contact,
    appBout: About
  }
}
</script>

<style>

</style>
