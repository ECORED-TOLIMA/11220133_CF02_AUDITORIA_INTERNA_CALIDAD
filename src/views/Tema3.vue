<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Recopilación de evidencias y documentación de observaciones
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La recopilación de evidencias constituye el eje central de la auditoría interna, ya que las conclusiones y hallazgos deben fundamentarse exclusivamente en información objetiva, verificable y suficiente. De acuerdo con las directrices de la Organización Internacional de Normalización (ISO) en la norma ISO 19011, la evidencia de auditoría corresponde a registros, declaraciones de hechos o cualquier otra información pertinente que sea verificable y esté relacionada con los criterios de auditoría.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") En esta etapa, el equipo auditor contrasta la información obtenida frente a los criterios establecidos, tales como requisitos de la norma ISO 9001, procedimientos internos, políticas y requisitos legales aplicables.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.text-center.mb-0(data-aos="fade-down") La recopilación debe realizarse mediante técnicas sistemáticas que garanticen:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img02.svg", alt="alt").img50.m-auto
          h5.text-center Objetividad en la evaluación.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img03.svg", alt="alt").img50.m-auto
          h5.text-center Trazabilidad de la información.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img04.svg", alt="alt").img50.m-auto
          h5.text-center Coherencia entre lo documentado y lo evidenciado en la práctica.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img05.svg", alt="alt").img50.m-auto
          h5.text-center Representatividad de las muestras analizadas.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-6.col-8.order-lg-1.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img06.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Es fundamental que el auditor evite emitir juicios sin sustento o basarse en percepciones personales. Toda observación debe estar respaldada por evidencia suficiente y adecuada.
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") La documentación de observaciones permite registrar tanto conformidades como no conformidades, oportunidades de mejora y aspectos destacados. Estos registros servirán posteriormente para la elaboración del informe de auditoría y para el seguimiento de las acciones correctivas.
        p.mb-0(data-aos="fade-down") Una recopilación rigurosa y una documentación clara fortalecen la credibilidad del proceso y aseguran que los resultados de la auditoría contribuyan efectivamente al mejoramiento continuo del Sistema de Gestión de la Calidad.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Proceso para recopilar evidencias
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img07.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2.g-0
        .cajon.cajon.C01.color-primario.p-4.mb-4.py-3
          p.mb-0(data-aos="fade-down") La recopilación de evidencias constituye el núcleo de la auditoría interna, ya que permite sustentar los hallazgos con información objetiva, verificable y relacionada con los criterios establecidos. De acuerdo con la Organización Internacional de Normalización (ISO) en la norma ISO 19011, la evidencia debe ser suficiente, pertinente y confiable.
        p(data-aos="fade-down") El proceso para recopilar evidencias se desarrolla de manera sistemática y comprende las siguientes etapas:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/img08.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img09.svg", alt="Imagen decorativa").img100.m-auto
              p Definición de criterios de auditoría, es decir, normas, procedimientos, políticas o requisitos aplicables contra los cuales se evaluará el proceso.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img10.svg", alt="Imagen decorativa").img100.m-auto
              p Aplicación de técnicas de auditoría, como entrevistas, revisión documental y observación directa.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img11.svg", alt="Imagen decorativa").img100.m-auto
              p Obtención de información verificable, basada en hechos y registros, no en opiniones.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img12.svg", alt="Imagen decorativa").img100.m-auto
              p Contraste entre lo documentado y lo ejecutado, verificando coherencia entre procedimiento y práctica real.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img13.svg", alt="Imagen decorativa").img100.m-auto
              p Registro oportuno de la información obtenida, garantizando trazabilidad y soporte documental.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C04.p-4
          p.mb-0(data-aos="fade-down") Durante este proceso, el auditor debe formular preguntas claras, objetivas y alineadas con el propósito de la auditoría, evitando suposiciones o interpretaciones personales.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-3.col-7.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-4
              p(data-aos="fade-down") A manera de ejemplo, durante la recopilación de evidencias se pueden formular preguntas o hacer intervenciones como:
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    p.mb-0 ¿Cuál es el objetivo de su proceso?
                    p.mb-0 ¿Qué actividades se llevan a cabo en su proceso?
                    p.mb-0 ¿Quién conforma el comité de gerencia?
                    p.mb-0 ¿Con qué frecuencia se reúne el comité de gerencia?
                    p.mb-0 ¿Llevan un registro del comité?
                    p.mb-0 Enséñeme las dos últimas actas.
                    p.mb-0 ¿Cómo contribuye su proceso al cumplimiento de los objetivos del SGC?
                    p.mb-0 ¿Con qué periodicidad se realiza esta actividad?
                    p.mb-0 Presénteme el presupuesto del año anterior.
                    p.mb-0 ¿Qué acciones de mejora han tomado en este año?
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas preguntas permiten obtener evidencia documental, testimonial y objetiva que sustente los hallazgos de auditoría y facilite la evaluación del desempeño del proceso auditado.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de evidencias
    p.mb-5(data-aos="fade-down") En el proceso de auditoría interna, las evidencias constituyen la base objetiva sobre la cual se sustentan los hallazgos, conclusiones y recomendaciones. Según las directrices de la Organización Internacional de Normalización (ISO) en la norma ISO 19011, la evidencia de auditoría debe ser verificable y estar relacionada con los criterios establecidos.
    figure.mb-5
      img(src='@/assets/curso/tema3/img21.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-6.col-12
        p.text-center.mb-0(data-aos="fade-down") Las evidencias pueden clasificarse en los siguientes tipos:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img15.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Evidencia documental
              p.mb-0 Corresponde a información contenida en documentos y registros del Sistema de Gestión de la Calidad, tales como procedimientos, manuales, actas, informes, indicadores, formatos diligenciados y bases de datos. Es uno de los tipos de evidencia más utilizados en auditorías.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img16.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Evidencia testimonial
              p.mb-0 Se obtiene mediante entrevistas o declaraciones del personal. Permite conocer cómo se desarrollan las actividades en la práctica. Sin embargo, debe confirmarse con evidencia documental o de observación.
              br
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img17.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Evidencia física u observacional
              p.mb-0 Se obtiene a través de la observación directa de procesos, instalaciones, equipos o actividades en ejecución. Permite verificar si lo que está documentado realmente se cumple.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img18.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Evidencia analítica
              p.mb-0 Surge del análisis de datos, indicadores de gestión, tendencias, resultados comparativos o evaluaciones estadísticas. Facilita identificar desviaciones, riesgos u oportunidades de mejora.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C06.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") Para que una evidencia sea válida debe cumplir con criterios de suficiencia, pertinencia y confiabilidad. El auditor no debe basar sus conclusiones en percepciones personales, sino en información objetiva que pueda ser verificada y respaldada.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img19.svg', alt='Imagen decorativa')
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Responsables de las evidencias
    p.mb-5(data-aos="fade-down") La responsabilidad sobre las evidencias en una auditoría interna es compartida, pero claramente diferenciada entre el equipo auditor y la organización auditada. Cada parte cumple un rol específico para garantizar la objetividad, confiabilidad y trazabilidad de la información recopilada.
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          p.mb-5(data-aos="fade-down") Por un lado, el equipo auditor es responsable de:
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Planificar la obtención de evidencias conforme a los criterios y alcance definidos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Solicitar información pertinente y suficiente.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Verificar que la evidencia sea objetiva, verificable y relacionada con los criterios de auditoría.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Documentar adecuadamente los hallazgos en los papeles de trabajo.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Custodiar la información con confidencialidad.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img22.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          p.mb-5(data-aos="fade-down") Por otro lado, la organización auditada es responsable de:
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Proporcionar acceso oportuno a la información requerida.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Facilitar registros, documentos y datos verídicos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Designar personal competente para atender entrevistas y aclaraciones.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Garantizar que la información suministrada sea completa y actualizada.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img23.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-10(data-aos="flip-up")
              img(src='@/assets/curso/tema3/img24.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C05.px-5.py-3
            .p-4
              p.mb-0 Es importante resaltar que el auditor no crea la evidencia, sino que la recopila y la evalúa. La evidencia pertenece al proceso auditado; el auditor únicamente la analiza para determinar conformidad o no conformidad frente a los criterios establecidos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-0(data-aos="fade-down") Una adecuada definición de responsabilidades fortalece la transparencia del proceso y evita conflictos o malentendidos durante la ejecución de la auditoría.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Registro y documentación de observaciones
    .row.justify-content-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img25.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") El registro de observaciones constituye una etapa crítica dentro de la auditoría interna, ya que permite dejar evidencia objetiva y trazable de los hallazgos identificados durante el proceso.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Toda observación debe redactarse con claridad, precisión y objetividad, evitando juicios personales o interpretaciones subjetivas. Debe estar sustentada en evidencia verificable y relacionada directamente con los criterios de auditoría definidos (norma, procedimiento, requisito legal, entre otros).
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para una adecuada documentación, se recomienda que el registro incluya como mínimo los siguientes elementos:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Registro de observaciones
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Proceso auditado:
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Área o proceso evaluado.
              tr
                td(data-aos="fade-down") Criterio de auditoría:
                td(data-aos="fade-down") Norma, procedimiento o requisito evaluado.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evidencia objetiva:
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Documento, registro, entrevista u observación directa que soporta el hallazgo.
              tr
                td(data-aos="fade-down") Descripción del hallazgo:
                td(data-aos="fade-down") Redacción clara de la situación encontrada.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tipo de hallazgo:
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conformidad, no conformidad menor, no conformidad mayor, oportunidad de mejora.
              tr
                td(data-aos="fade-down") Responsable del proceso:
                td(data-aos="fade-down") Persona o cargo relacionado con el hallazgo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fecha:
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fecha de identificación.
        
</template>

<script>
export default {
  name: 'Tema3',
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
