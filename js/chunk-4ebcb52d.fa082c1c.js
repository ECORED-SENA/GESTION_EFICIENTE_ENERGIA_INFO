(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ebcb52d"],{"069f":function(t,n,e){"use strict";e("88f5")},5270:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("header",{staticClass:"header container-fluid"},[i("div",{staticClass:"row align-items-center justify-content-between"},[i("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?i("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:function(n){return t.toggleMenu(!t.menuOpen)}}},[i("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[i("div",{staticClass:"line-2"}),i("div",{staticClass:"line-1"}),i("div",{staticClass:"line-3"})]),i("span",[t._v("MENÚ")])]):t._e(),i("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:e("9eb5")}}),t.isInicio?i("div",{staticClass:"d-none d-md-flex align-items-center"},[i("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):i("div",{staticClass:"header__componente-formativo"},[i("span",[t._v(t._s(t.globalData.componenteFormativo))])])]),t.isInicio?i("div",{staticClass:"col-auto"},[i("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[i("span",{staticClass:"me-1"},[t._v("Ver contenido")]),i("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},s=[],a=(e("b0c0"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),n=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||n}},methods:{quitarAcentos(t){const n={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return t.split("").map(t=>n[t]||t).join("").toString()}}}),o={name:"Header",mixins:[a],computed:{globalData:function(){return this.$config&&this.$config.global},isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(t){this.$store.dispatch("toggleMenu",t)}}},c=o,r=(e("069f"),e("2877")),u=Object(r["a"])(c,i,s,!1,null,"ac5b7bd6",null);n["default"]=u.exports},"88f5":function(t,n,e){},b0c0:function(t,n,e){var i=e("83ab"),s=e("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,r="name";i&&!(r in a)&&s(a,r,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-4ebcb52d.fa082c1c.js.map