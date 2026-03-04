<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos y las etapas clave de la ejecución de la auditoría interna, desde las generalidades del proceso y la comunicación con la organización auditada, hasta la asignación de roles, la recolección de información preliminar y la realización de la reunión de apertura. Asimismo, desarrolla la recopilación y documentación de evidencias, la identificación de no conformidades, la formulación de correcciones y acciones correctivas, y el seguimiento para verificar su eficacia. Finalmente, integra la reunión de cierre y la finalización de la auditoría, incluyendo la elaboración del informe y el cierre formal del proceso, consolidando una visión estructurada, técnica y orientada a la mejora continua del sistema de gestión.
    .row.justify-content-center
      .col-lg-12.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de manera jerárquica las etapas del proceso de auditoría interna, desde las generalidades y la comunicación inicial, pasando por la recolección de evidencias y el tratamiento de no conformidades, hasta la reunión de cierre y la finalización del proceso.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
