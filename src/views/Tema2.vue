<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estrategias y tácticas de negociación
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img_1.png', alt='')
      .col-lg-7.col-12
        p Es preciso diferenciar inicialmente el concepto de estrategia y de táctica; la primera, vista desde el punto de vista empresarial, se entiende como la manera de alcanzar los objetivos propuestos, en este caso de la negociación. La estrategia es más amplia que la táctica; es decir, abarca numerosas y diferentes tácticas, y además representa un patrón general de la táctica. 
        p Y la segunda, las tácticas, son las diferentes acciones concretas que integran y llevan a cabo la estrategia. Este concepto llevado al campo de la negociación, según Ovejero (2004), involucra las conductas adoptadas por los negociadores para poder lograr los objetivos propuestos.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Ahora, teniendo en cuenta lo anterior, puede decirse que la estrategia de negociación es un conjunto de comportamientos o conductas (tácticas), que adoptan los negociadores para alcanzar sus objetivos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Estrategia de negociación

    p.mb-5(data-aos="fade-right") Las estrategias de negociación más conocidas son la estrategia dura y la estrategia blanda. Estas dos estrategias están íntimamente ligadas con las ya mencionadas negociación competitiva y negociación cooperativa. Ambas estrategias se diferencian, según afirma Ovejero (2004), en aspectos como el motivo de realización de las concesiones y la anticipación que se haga de la manera en que el oponente reaccione frente a las concesiones del negociador. Su explicación es:

    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.col-12.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/sl1-a.svg', alt='')
        .row.justify-content-center
          .col-12.col-lg-10
            h4.text-center La estrategia dura
            p.mb-0 Consiste en iniciar la negociación con un nivel alto de exigencia, tener un grupo reducido de concesiones, tener un nivel elevado de mínima expectativa y enser inflexible.
      .col-lg.col-12.tarjeta.color-primario-a3.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/sl1-b.svg', alt='')
        .row.justify-content-center
          .col-12.col-lg-10
            h4.text-center La estrategia blanda
            p.mb-0 Busca establecer confianza entre las partes mediante la reducción de fricciones entre ellas y así consolidar una relación duradera. 
      
    p.mb-5(data-aos="fade-right") Al respecto, el autor menciona que la estrategia blanda puede aplicarse en las siguientes circunstancias:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 1]
            p.mb-2 Las dos partes tienen similar poder.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 2]
            p.mb-2 Las partes están en un punto en que no avanzan o moviéndose fuera de un rango de soluciones que pueden ser contempladas; y las dos partes se están presionando mutuamente para lograr un acuerdo.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Tácticas de negociación

    p.mb-5(data-aos="fade-right") Al respecto, Puchol, Núñez & Puchol (2010), proponen las siguientes tácticas de negociación: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-b.p-4
          .col-lg-3.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img_3.svg', alt='')
          .col-lg-9.col-12 
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 Para ganar tiempo o lograr ablandar a la contraparte, se utiliza la dilación.
              li 
                i.fas.fa-play
                p.mb-1 Mencionar que no se tiene tiempo para presionar una rápida respuesta. 
              li 
                i.fas.fa-play
                p.mb-1 Regatear el precio. 
              li 
                i.fas.fa-play
                p.mb-1 Forzar la venta mediante pruebas o demostraciones. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
