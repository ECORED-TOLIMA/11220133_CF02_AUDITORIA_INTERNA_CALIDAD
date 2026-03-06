<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") La ejecución de la auditoría interna constituye una etapa determinante dentro del Sistema de Gestión de la Calidad, ya que es el momento en el cual se verifica en campo la conformidad de los procesos, se recopilan evidencias objetivas y se generan hallazgos que aportan a la mejora continua.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-3
          .col.col-lg-10.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") En esta fase, el auditor no solo aplica técnicas de recolección y análisis de información, sino que pone en práctica habilidades de comunicación, objetividad y criterio profesional para garantizar un proceso transparente, sistemático y basado en evidencias verificables.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/intro/img02.svg', alt='Imagen decorativa')
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Asimismo, la adecuada documentación de observaciones, la identificación de no conformidades y la formulación de acciones correctivas permiten fortalecer el desempeño organizacional y asegurar el cumplimiento de los requisitos establecidos en normas como la Organización Internacional de Normalización (ISO) y sus directrices, particularmente la ISO 9001 y la ISO 19011.
        p.mb-0(data-aos="fade-down") Este componente desarrolla las etapas prácticas del proceso de auditoría, desde el contacto inicial y la reunión de apertura hasta la reunión de cierre y el seguimiento de acciones de mejora, consolidando competencias técnicas y éticas necesarias para desempeñar el rol de auditor interno de calidad de manera eficaz y profesional.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/nRE9f3qjuqM?si=iZBNGU46zIlUaFLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
