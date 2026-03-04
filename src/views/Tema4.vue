<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 No conformidades, correcciones y acciones correctivas
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p(data-aos="fade-down") 
        .cajon.cajon.C01.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") En el proceso de auditoría, los hallazgos surgen del análisis comparativo entre los criterios de auditoría, la evidencia recopilada y los objetivos establecidos. Cuando la evidencia demuestra cumplimiento, se genera una conformidad; cuando evidencia incumplimiento frente a los criterios, se configura una no conformidad.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img01.svg', alt='Imagen decorativa')
        p.mb-5(data-aos="fade-down") Para comprender mejor esta relación, a continuación, se presenta una gráfica que describe cómo interactúan estos elementos dentro del proceso de auditoría:
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Relación entre criterios, evidencia, objetivos en la auditoría interna
          .row.justify-content-center
            .col-12
              figure.desktop
                img(src='@/assets/curso/tema4/img02.svg', alt='La figura 1 presenta la relación entre los criterios de auditoría, la evidencia recopilada y los objetivos establecidos. Se evidencia cómo la comparación entre estos elementos permite determinar si existe conformidad o no conformidad dentro del proceso auditado. Los hallazgos surgen del análisis entre lo planificado, lo ejecutado y lo verificado, fundamentando las conclusiones de la auditoría interna.')
          .col-12
            figure.movil
              img(src='@/assets/curso/tema4/img03.svg', alt='La figura 1 presenta la relación entre los criterios de auditoría, la evidencia recopilada y los objetivos establecidos. Se evidencia cómo la comparación entre estos elementos permite determinar si existe conformidad o no conformidad dentro del proceso auditado. Los hallazgos surgen del análisis entre lo planificado, lo ejecutado y lo verificado, fundamentando las conclusiones de la auditoría interna.')
        p.mb-0(data-aos="fade-down") La figura describe cómo, a partir de los criterios definidos y la evidencia objetiva recolectada, el auditor formula hallazgos que pueden derivar en conformidades o no conformidades. Estas últimas requieren tratamiento mediante correcciones y acciones correctivas, cuyos resultados se reflejan en las conclusiones de la auditoría.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 No conformidad
    p(data-aos="fade-down") Una no conformidad es el incumplimiento de un requisito establecido. En el contexto de la auditoría interna del Sistema de Gestión de la Calidad, se presenta cuando la evidencia objetiva demuestra que un proceso, actividad o resultado no cumple con los criterios definidos, ya sean requisitos de la norma ISO 9001, procedimientos internos, requisitos legales o compromisos organizacionales.
    p.mb-5(data-aos="fade-down") Para que una no conformidad sea válida y técnicamente sustentada, debe:
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.order-lg-2.order-2
            .cajon.cajon.C03.p-4
              .col-lg-12
                .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                    //-   h2 Pódcast
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require('@/assets/curso/audio/Podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-10
        .cajon.cajon.C01.p-3.mb-4
          p.text-center.mb-0(data-aos="fade-down") La no conformidad no busca señalar culpables, sino identificar desviaciones que permitan mejorar el sistema.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 ¿Cómo se construye una no conformidad?
    p.mb-5(data-aos="fade-down") Una no conformidad bien redactada generalmente contiene tres elementos:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Criterio
              p.text-center Requisito que debe cumplirse.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Evidencia
              p.text-center Situación encontrada durante la auditoría.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Incumplimiento
              p.text-center Descripción clara de la desviación.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-6.col-12
        p.text-center.mb-0(data-aos="fade-down") Estructura básica sugerida:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-8.col-12
        .bloque-texto-f.color.cajon.C01.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.bloque-texto-f__texto Se evidenció que [situación encontrada], lo cual incumple con [requisito específico establecido en norma, procedimiento o política].
    p.mb-5(data-aos="fade-down") A continuación, se presentan algunos ejemplos que describen cómo debe redactarse una no conformidad en el contexto de una auditoría interna. Estos casos permiten comprender la estructura adecuada, la importancia de fundamentar el hallazgo en evidencia objetiva y la necesidad de vincular claramente el incumplimiento con el requisito correspondiente.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Ejemplo 1
            p.mb-0(data-aos="fade-down") Se evidenció que no se encuentran registros de las dos últimas reuniones del comité de gerencia, lo cual incumple el procedimiento interno PR-01 que establece el registro obligatorio de actas.
          .col-xl.col-lg-6.tarjeta.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Ejemplo 2
            p.mb-0(data-aos="fade-down") Se evidenció que el formato de control de documentos no se diligencia diariamente, incumpliendo lo establecido en el procedimiento de control documental.
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Ejemplo 3
            p.mb-0(data-aos="fade-down") No se encontró evidencia de seguimiento a las acciones de mejora definidas en el plan anual, lo cual afecta el cumplimiento del requisito de mejora continua del Sistema de Gestión de la Calidad.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Correcciones y acciones correctivas
    p.mb-5(data-aos="fade-down") Una vez identificada una no conformidad, la organización debe definir cómo será tratada. No todas las acciones tienen el mismo alcance ni el mismo impacto dentro del Sistema de Gestión de la Calidad. Por ello, es fundamental diferenciar entre corrección y acción correctiva, conceptos establecidos en la Organización Internacional de Normalización a través de la ISO 9001:2015.
    .tarjeta.tarjeta--BG04.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Corrección
                p Es la acción inmediata que se toma para eliminar una no conformidad detectada. Su objetivo es resolver el incumplimiento puntual. Se caracteriza por:
                ul.lista-ul
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Ser reactiva.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Atender el efecto del problema.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Restablecer el cumplimiento en el corto plazo.
                p #[b Ejemplo]: si un registro obligatorio no fue diligenciado, la corrección consiste en completarlo de inmediato.
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema4/img11.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Acción correctiva
                p Es la acción orientada a eliminar la causa raíz de la no conformidad para prevenir que vuelva a ocurrir. Se caracteriza por:
                ul.lista-ul
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Ser sistemática y estructurada.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Incluir análisis de causa (por ejemplo, análisis de causa raíz).
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Establecer responsables y plazos.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Requerir verificación de eficacia.
                p #[b Ejemplo]: si recurrentemente no se diligencian registros, la acción correctiva podría consistir en capacitar al personal, ajustar el procedimiento o implementar controles adicionales.
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema4/img12.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C06.p-4
          .row.justify-content-center.align-items-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") En síntesis, la corrección “resuelve el problema inmediato”, mientras que la acción correctiva “previene su repetición”. Ambas son necesarias, pero cumplen funciones distintas dentro del proceso de mejora continua.
            .col.col-lg-2.col-auto.order-lg-1.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Seguimiento y verificación de eficacia
    p(data-aos="fade-down") El tratamiento de una no conformidad no finaliza con la implementación de la corrección o la acción correctiva. Es necesario realizar un seguimiento sistemático para verificar que las acciones adoptadas fueron eficaces y que la no conformidad no vuelva a presentarse.
    p.mb-5(data-aos="fade-down") El seguimiento consiste en revisar, dentro de un plazo establecido, si:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img14.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img15.svg", alt="Imagen decorativa").img100.m-auto
              p La acción fue implementada según lo planificado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img16.svg", alt="Imagen decorativa").img100.m-auto
              p Se eliminaron las causas que originaron la no conformidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img17.svg", alt="Imagen decorativa").img100.m-auto
              p No se han generado efectos secundarios no previstos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img18.svg", alt="Imagen decorativa").img100.m-auto
              p El proceso ahora cumple con los criterios establecidos.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img19.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C02.p-4.mb-3.py-3
          p(data-aos="fade-down") La verificación de eficacia implica recopilar nueva evidencia objetiva que demuestre que la situación fue controlada de manera definitiva. Esta verificación puede realizarse mediante revisión documental, entrevistas, análisis de indicadores o auditorías de seguimiento.
        .row.justify-content-center.mb-3
          .col.col-12.order-lg-1.order-2
            p.mb-0(data-aos="fade-down") Si la acción no resulta eficaz, la organización debe replantear el análisis de causa y definir nuevas acciones.
        .row.justify-content-center
          .cajon.cajon.C02.p-3
            .row.justify-content-center
              .col.col-lg-10.order-lg-2.order-2
                p.mb-0(data-aos="fade-down") Este proceso garantiza que el Sistema de Gestión de la Calidad no solo corrija fallas, sino que aprenda de ellas y fortalezca su desempeño en el tiempo, consolidando así la mejora continua.
              .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/img20.svg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema4',
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
