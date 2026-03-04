<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Finalización de la auditoría
    figure.mb-5
      img(src='@/assets/curso/tema6/img01.png', alt='Imagen decorativa')
    p(data-aos="fade-down") La finalización de la auditoría constituye la etapa en la cual se consolidan los resultados obtenidos, se formalizan las conclusiones y se asegura el cumplimiento de todos los compromisos establecidos durante el proceso. Esta fase garantiza que la auditoría se cierre de manera ordenada, documentada y conforme a los lineamientos del sistema de gestión.
    p.mb-5(data-aos="fade-down") En esta etapa se verifica que:
    .row.justify-content-center.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Todas las evidencias hayan sido analizadas y documentadas adecuadamente.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Los hallazgos estén clasificados y sustentados con evidencia objetiva.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Se hayan comunicado claramente las conclusiones a la organización auditada.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Se definan las responsabilidades y plazos para el tratamiento de no conformidades.
    p(data-aos="fade-down") La finalización no implica únicamente concluir las actividades en campo, sino asegurar que el proceso quede formalmente documentado, trazable y listo para su seguimiento posterior.
    p.mb-0(data-aos="fade-down") De esta manera, se fortalece la transparencia del ejercicio auditor y se contribuye al mejoramiento continuo del sistema de gestión.
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Asignación de tareas y responsabilidades
    p(data-aos="fade-down") En la fase de finalización de la auditoría, la asignación de tareas y responsabilidades permite garantizar que los hallazgos identificados sean gestionados de manera oportuna y efectiva. Esta asignación debe quedar claramente definida en el informe final o en el acta de cierre, indicando responsables, actividades y plazos de cumplimiento.
    p.mb-5(data-aos="fade-down") Generalmente, se establecen responsabilidades para:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema6/img06.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img07.svg", alt="alt").img100.m-auto
              p Elaborar y presentar el plan de acción frente a las no conformidades.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img08.svg", alt="alt").img100.m-auto
              p Implementar las correcciones inmediatas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img09.svg", alt="alt").img100.m-auto
              p Ejecutar las acciones correctivas orientadas a eliminar la causa raíz.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img10.svg", alt="alt").img100.m-auto
              p Realizar el seguimiento y reportar avances.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img11.svg", alt="alt").img100.m-auto
              p Verificar la eficacia de las acciones implementadas.
    p(data-aos="fade-down") El auditor líder es responsable de comunicar formalmente estas asignaciones, mientras que la organización auditada designa los responsables internos para su cumplimiento.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo práctico:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-7.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img12.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .cajon.cajon.C02.p-4
              p(data-aos="fade-down") En una auditoría interna al Sistema de Gestión de la Calidad, se detecta que no se están realizando las revisiones periódicas del comité de calidad según lo establecido en el procedimiento.
              .tarjeta.tarjeta--blanca.p-4.mb-4
                p En la reunión de cierre se acuerda que:
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 El jefe de calidad elaborará el plan de acción en un plazo de cinco días hábiles.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 El coordinador administrativo actualizará el cronograma de reuniones del comité.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 La alta dirección realizará seguimiento mensual al cumplimiento del nuevo cronograma.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 El auditor interno verificará la eficacia de la acción en la siguiente auditoría programada
              p.mb-0(data-aos="fade-down") Este tipo de asignación clara evita ambigüedades y facilita el cumplimiento efectivo de los compromisos adquiridos.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Elaboración y entrega del informe general
    p(data-aos="fade-down") La elaboración del informe general constituye una de las actividades más relevantes en la finalización de la auditoría, ya que en este documento se consolidan los resultados obtenidos, los hallazgos identificados y las conclusiones del equipo auditor.
    p.mb-5(data-aos="fade-down") El informe debe ser claro, objetivo, preciso y basado exclusivamente en evidencias verificables. Su contenido suele incluir:
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Objetivo, alcance y criterios de auditoría.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Identificación del equipo auditor.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Descripción de los procesos auditados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Hallazgos clasificados (conformidades, no conformidades, observaciones u oportunidades de mejora).
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Conclusiones generales sobre el grado de cumplimiento del sistema.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Recomendaciones, cuando aplique.
      .col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img13.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") El auditor líder es responsable de su elaboración y de asegurar que el informe refleje fielmente lo evidenciado durante el proceso. Posteriormente, se realiza la entrega formal a la alta dirección o al representante designado por la organización auditada, dejando constancia de recibido.
    .tarjeta.tarjeta--C04.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema6/img14.svg")
        .col-md.col-lg-6
          #t_6_2.titulo-segundo.color-acento-contenido.mb-3
            h4 Ejemplo  informe de auditoría 
          p Con el fin de fortalecer el aprendizaje práctico, se presenta como material de apoyo el #[b Anexo_Informe_de_auditoria], correspondiente a un informe real de auditoría (ajustado para fines formativos), el cual permite al aprendiz identificar la estructura, redacción técnica y forma de presentación de los hallazgos.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Informe_de_auditoria.doc')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    p.mb-0(data-aos="fade-down") Este anexo facilita la comprensión de cómo se documentan profesionalmente los resultados de una auditoría y cómo se comunican a la organización auditada.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Cierre formal del proceso
    p(data-aos="fade-down") El cierre formal del proceso de auditoría representa la culminación técnica y administrativa del ejercicio auditor. En esta etapa se verifica que todas las actividades planificadas hayan sido ejecutadas, que los hallazgos estén debidamente comunicados y que las responsabilidades para su tratamiento hayan quedado claramente definidas.
    p.mb-5(data-aos="fade-down") El cierre no se limita a la entrega del informe, sino que implica dejar establecidas las condiciones para el seguimiento posterior y la mejora continua del sistema de gestión.
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema6/img15.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img16.svg", alt="alt").img100.m-auto
              p Confirmación de la entrega oficial del informe de auditoría.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img17.svg", alt="alt").img100.m-auto
              p Registro de aceptación o comentarios por parte del auditado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img18.svg", alt="alt").img100.m-auto
              p Definición de responsables para cada hallazgo identificado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img19.svg", alt="alt").img100.m-auto
              p Establecimiento de plazos para la implementación de correcciones y acciones correctivas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img20.svg", alt="alt").img100.m-auto
              p Programación del seguimiento o auditoría de verificación, cuando aplique.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img21.svg", alt="alt").img100.m-auto
              p Archivo y custodia de la documentación de auditoría conforme a los lineamientos de confidencialidad.
    p.mb-5(data-aos="fade-down") Con el fin de garantizar claridad y trazabilidad, es recomendable establecer un cronograma de tratamiento de hallazgos, como el siguiente ejemplo:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplo de cronograma para tratamiento de hallazgos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down") Hallazgo
                th(data-aos="fade-down") Tipo
                th(data-aos="fade-down") Responsable
                th(data-aos="fade-down") Acción a implementar
                th(data-aos="fade-down") Fecha compromiso
                th(data-aos="fade-down") Fecha verificación
                th(data-aos="fade-down") Estado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") NC-01
                td(data-aos="fade-down")(style="background-color: #F6F6F6") No conformidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Jefe de Proceso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actualizar procedimiento y capacitar al personal
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 15/03/2026
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30/03/2026
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En seguimiento
              tr
                td(data-aos="fade-down") OBS-02
                td(data-aos="fade-down") Observación
                td(data-aos="fade-down") Coordinador
                td(data-aos="fade-down") Implementar formato de control
                td(data-aos="fade-down") 20/03/2026
                td(data-aos="fade-down") 05/04/2026
                td(data-aos="fade-down") Pendiente
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Este tipo de herramienta facilita el control del cumplimiento de los compromisos adquiridos y permite evidenciar la gestión efectiva de los hallazgos.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema6/img22.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") El proceso se considera formalmente cerrado cuando:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img23.svg", alt="alt").img50.m-auto
          h5.text-center Se han definido y comunicado las acciones correspondientes.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img24.svg", alt="alt").img50.m-auto
          h5.text-center La organización acepta los resultados de la auditoría.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img25.svg", alt="alt").img50.m-auto
          h5.text-center Se establece el mecanismo de seguimiento.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img26.svg", alt="alt").img50.m-auto
          h5.text-center La documentación queda archivada conforme a los procedimientos del sistema de gestión.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10
        .cajon.cajon.C01.p-3.mb-4
          p.mb-0(data-aos="fade-down") Un cierre formal bien estructurado fortalece la transparencia, asegura la trazabilidad del proceso y contribuye al fortalecimiento continuo del Sistema de Gestión de la Calidad.
</template>

<script>
export default {
  name: 'Tema6',
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
