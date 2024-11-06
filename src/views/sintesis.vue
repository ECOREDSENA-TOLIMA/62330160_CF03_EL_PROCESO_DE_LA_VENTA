<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe a través de un mapa conceptual la temática tratada durante este componente formativo, el cual trata los aspectos más relevantes relacionados con los procesos de la negociación.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene el mapa conceptual que resume la temática tratada durante este componente formativo, la cual destaca que los procesos de negociación inician con un cumplimiento de sus generalidades, luego pasan por un desarrollo de sus estrategias y tácticas, aplicando todo ello, de acuerdo a sus tres etapas de negociación. Todo lo anterior, tratando de llegar un fin común que es realizar un contrato comercial de manera adecuada, siempre y cuando se cumpla con la normativa requerida.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
