const data = {
  a: 4
};

const vm = new Vue({
  el: '#app',
  data: data
});

console.log(vm.$data === data); // => true

console.log(vm.$el === document.getElementById('app')); // => true
console.log(vm.$el === document.getElementById('apppp')); // => false
