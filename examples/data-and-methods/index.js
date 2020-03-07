let obj = {
  foo: 'виски/кола'
};

// запретить изменение объекта "obj"
// Object.freeze(obj);

let vm = new Vue({
  el: '#app',
  data: obj
});
