<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generalidades del proceso de auditoría
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de auditoría interna constituye una secuencia estructurada de actividades orientadas a evaluar la conformidad y eficacia del Sistema de Gestión de la Calidad. De acuerdo con las directrices establecidas en la Organización Internacional de Normalización (ISO) y en la norma ISO 19011, la auditoría debe desarrollarse de manera planificada, objetiva y basada en evidencias verificables.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") En términos generales, el proceso inicia con la coordinación entre el auditor y la organización auditada, continúa con la recopilación y análisis de información, la ejecución de actividades de verificación y la documentación de hallazgos, y finaliza con la comunicación de resultados y el seguimiento correspondiente.
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") Este proceso no se limita a identificar incumplimientos; también permite reconocer buenas prácticas y oportunidades de mejora, fortaleciendo así el desempeño organizacional. Para que sea efectivo, requiere claridad en la comunicación, definición precisa de roles, preparación previa y rigurosidad en la obtención de evidencias.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En síntesis, las generalidades del proceso de auditoría establecen el marco metodológico que garantiza coherencia, transparencia y confiabilidad en cada una de sus etapas.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Proceso de comunicación en la auditoría
    .row.justify-content-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img03.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El proceso de comunicación en la auditoría interna constituye un eje transversal que acompaña todas las fases del ejercicio auditor, desde el contacto inicial hasta el cierre formal del proceso. Una comunicación adecuada garantiza claridad en los objetivos, confianza entre las partes y objetividad en la presentación de los hallazgos.
        p.mb-0(data-aos="fade-down") De acuerdo con las directrices para la auditoría de sistemas de gestión establecidas en la ISO 19011, la comunicación debe ser clara, veraz, oportuna, documentada y basada en evidencias verificables. El auditor no comunica opiniones personales, sino hechos sustentados en criterios previamente definidos.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-7.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img04.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-4
              p(data-aos="fade-down") La comunicación en auditoría permite:
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    ol.lista-ol--cuadro.lista-ol
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 1
                        | Coordinar actividades entre el equipo auditor y la organización auditada.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 2
                        | Facilitar la recolección de información objetiva.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 3
                        | Evitar malentendidos o interpretaciones erróneas.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 4
                        | Generar un ambiente de respeto y colaboración.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 5
                        | Garantizar que los hallazgos sean comprendidos por los responsables del proceso.
    .row.justify-content-center.mb-5
      .col.col-lg-6.col-12
        p.mb-0(data-aos="fade-down") El proceso comunicativo se desarrolla en diferentes momentos:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Contacto inicial con la organización auditada
          p Donde se establecen acuerdos preliminares sobre fechas, alcance y logística.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Reunión de apertura
          p En la que se presentan los objetivos, el equipo auditor y la metodología de trabajo.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Interacción durante la ejecución
          p Incluye entrevistas, solicitud de documentos y aclaración de información.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Comunicación de hallazgos
          p Donde se exponen observaciones y posibles no conformidades de manera objetiva.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          h4.text-center Reunión de cierre
          p En la que se presentan conclusiones y se aclaran inquietudes.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4
          p.mb-0(data-aos="fade-down") En síntesis, el proceso de comunicación en la auditoría no es un acto aislado, sino una dinámica continua que asegura transparencia, comprensión y eficacia en el desarrollo del Sistema de Gestión de la Calidad.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Técnicas de comunicación aplicadas en la auditoría
    p(data-aos="fade-down") La comunicación es una competencia esencial del auditor interno, ya que permite obtener información válida, verificar evidencias y mantener un ambiente profesional durante todo el proceso. Una comunicación adecuada favorece la cooperación del auditado y contribuye a la objetividad de los hallazgos.
    p.mb-5(data-aos="fade-down") Principales técnicas de comunicación en auditoría:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Entrevista estructurada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Consiste en formular preguntas previamente planificadas y alineadas con los criterios de auditoría. Permite verificar el conocimiento del personal, validar responsabilidades y contrastar la información documentada con la práctica real.
          .row(numero="2" titulo="Preguntas abiertas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Favorecen respuestas amplias y descriptivas, facilitando la comprensión de procesos. Por ejemplo: ¿Cómo se controla el cumplimiento de este procedimiento?
          .row(numero="3" titulo="Preguntas cerradas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se utilizan para confirmar información específica y concreta. Por ejemplo: ¿Este formato se diligencia diariamente?
          .row(numero="4" titulo="Preguntas de sondeo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten profundizar en una respuesta previa para obtener mayor detalle. Por ejemplo: ¿Puede explicar cómo se realiza ese control?
          .row(numero="5" titulo="Escucha activa")
            .col-12.mb-4.mb-md-0
              p.mb-0 Implica prestar atención sin interrumpir, observar el lenguaje verbal y no verbal, y confirmar la comprensión mediante la reformulación de ideas.
          .row(numero="6" titulo="Observación directa")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite verificar en tiempo real la ejecución de actividades y compararlas con los procedimientos establecidos.
          .row(numero="7" titulo="Comunicación asertiva")
            .col-12.mb-4.mb-md-0
              p.mb-0 Consiste en expresar observaciones y hallazgos de manera clara, objetiva y respetuosa, evitando juicios personales o interpretaciones subjetivas.
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block.g-0
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Durante la auditoría es muy importante que el auditor tenga en cuenta que existen preguntas que deben evitarse, tales como:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img11.svg", alt="alt").img50.m-auto
          h5.text-center Preguntas capciosas que sugieren la respuesta.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img12.svg", alt="alt").img50.m-auto
          h5.text-center Preguntas múltiples que generen confusión.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img13.svg", alt="alt").img50.m-auto
          h5.text-center Preguntas agresivas que provoquen confrontación.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img14.svg", alt="alt").img50.m-auto
          h5.text-center Preguntas basadas en suposiciones.
    p.mb-5(data-aos="fade-down") En el desarrollo de la auditoría, no basta con aplicar técnicas de entrevista y formulación de preguntas; también es fundamental adoptar comportamientos que fortalezcan la confianza, el respeto y la objetividad del proceso. Por ello, el auditor debe incorporar buenas prácticas comunicativas que faciliten el diálogo profesional y garanticen la claridad en la obtención de información:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Mantener contacto visual adecuado
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Utilizar lenguaje técnico claro y comprensible
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Evitar confrontaciones o interpretaciones personales
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Basar conclusiones únicamente en evidencias verificables
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") La aplicación adecuada de estas técnicas fortalece la confianza entre auditor y auditado, mejora la calidad de la información obtenida y contribuye al cumplimiento de los objetivos de la auditoría interna.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Contacto inicial con la organización auditada
    p(data-aos="fade-down") El contacto inicial constituye el primer acercamiento formal entre el auditor y la organización auditada. En esta etapa se establecen las bases del proceso, se aclaran expectativas y se coordinan los aspectos logísticos y técnicos que permitirán desarrollar la auditoría de manera organizada y eficiente.
    p.mb-5(data-aos="fade-down") Este contacto puede realizarse mediante comunicación escrita, virtual o presencial y debe incluir, como mínimo, los siguientes aspectos:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img19.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img20.svg", alt="alt").img100.m-auto
              p Comunicación formal con el auditado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img21.svg", alt="alt").img100.m-auto
              p Confirmación de la autoridad para realizar la auditoría.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img22.svg", alt="alt").img100.m-auto
              p Definición de objetivos, alcance, métodos y equipo auditor.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img23.svg", alt="alt").img100.m-auto
              p Solicitud de documentación inicial relevante del Sistema de Gestión de la Calidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img24.svg", alt="alt").img100.m-auto
              p Identificación de requisitos legales y otros requisitos aplicables.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img25.svg", alt="alt").img100.m-auto
              p Acuerdo sobre el grado de difusión de la información y manejo de la confidencialidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img26.svg", alt="alt").img100.m-auto
              p Programación de fechas y cronograma preliminar.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img30.svg", alt="alt").img100.m-auto
              p Definición de ubicación, condiciones de acceso, seguridad y salud en el trabajo.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img31.svg", alt="alt").img100.m-auto
              p Confirmación de asistencia de observadores o guías, si aplica.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img32.svg", alt="alt").img100.m-auto
              p Identificación de áreas de interés o preocupación por parte del auditado.
    p.mb-5(data-aos="fade-down") Adicionalmente, el auditor debe considerar algunos factores clave que inciden en la viabilidad del proceso:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Disponibilidad de información suficiente y apropiada.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Nivel de cooperación del auditado.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img29.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Tiempo y recursos adecuados para ejecutar la auditoría.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Un contacto inicial bien estructurado facilita la planificación, reduce riesgos de malentendidos y fortalece la confianza entre las partes, garantizando un desarrollo más fluido de la auditoría.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Asignación de roles y responsabilidades del equipo auditor
    p(data-aos="fade-down") La asignación de roles y responsabilidades es una etapa fundamental para garantizar que la auditoría se desarrolle de manera organizada, objetiva y eficiente. Esta labor es liderada por el auditor líder, en coordinación con el equipo auditor.
    p.mb-5(data-aos="fade-down") En una auditoría pueden participar los siguientes roles:
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C03(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img33.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Auditor líder
                p.mb-0 Dirige la auditoría, planifica las actividades, coordina y gestiona el equipo auditor, supervisa el trabajo de campo y toma decisiones finales sobre los hallazgos y conclusiones.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img34.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Auditores del equipo
                p.mb-0 Ejecutan los procedimientos de auditoría, realizan entrevistas, revisan documentos, recopilan evidencias objetivas y documentan los hallazgos en los papeles de trabajo.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img35.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Expertos técnicos
                p.mb-0 Aportan conocimientos especializados en áreas específicas. Asesoran técnicamente al equipo auditor, pero no asumen la responsabilidad de emitir hallazgos ni conclusiones.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img36.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Observadores
                p.mb-0 Acompañan el proceso, generalmente en representación de la organización auditada o con fines formativos. No intervienen ni influyen en la ejecución de la auditoría.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG03.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img37.png', alt='Imagen decorativa')
            h4 Auditor líder
            p.mb-0 Dirige la auditoría, planifica las actividades, coordina y gestiona el equipo auditor, supervisa el trabajo de campo y toma decisiones finales sobre los hallazgos y conclusiones.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG03.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img38.png', alt='Imagen decorativa')
            h4 Auditores del equipo
            p.mb-0 Ejecutan los procedimientos de auditoría, realizan entrevistas, revisan documentos, recopilan evidencias objetivas y documentan los hallazgos en los papeles de trabajo.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG03.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img39.png', alt='Imagen decorativa')
            h4 Expertos técnicos
            p.mb-0 Aportan conocimientos especializados en áreas específicas. Asesoran técnicamente al equipo auditor, pero no asumen la responsabilidad de emitir hallazgos ni conclusiones.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG03.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img40.png', alt='Imagen decorativa')
            h4 Observadores
            p.mb-0 Acompañan el proceso, generalmente en representación de la organización auditada o con fines formativos. No intervienen ni influyen en la ejecución de la auditoría.
    p.mb-5(data-aos="fade-down") Una vez definidos los roles, el auditor líder, junto con el equipo, distribuye las responsabilidades teniendo en cuenta:
    .row.justify-content-center.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img41.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Procesos a auditar.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img42.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Actividades específicas dentro de cada proceso.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img43.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Funciones que asumirá cada integrante del equipo.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img44.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Lugares o áreas físicas donde se realizará la auditoría.
    p.mb-5(data-aos="fade-down") La asignación no debe realizarse de forma arbitraria, sino considerando criterios técnicos y éticos como:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img45.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-4
              p.text-bold(data-aos="fade-down") 
                ul.lista-ul--color.mb-0(data-aos="fade-down")
                  li
                    i.fas.fa-magnifying-glass
                    p.mb-0 Independencia frente al proceso auditado.
                  li
                    i.fas.fa-magnifying-glass
                    p.mb-0 Competencia y experiencia en el tema asignado.
                  li
                    i.fas.fa-magnifying-glass
                    p.mb-0 Uso eficiente de los recursos disponibles.
                  li
                    i.fas.fa-magnifying-glass
                    p.mb-0 Diferenciación clara de funciones entre auditores, auditores en formación y expertos técnicos.
    p.mb-0(data-aos="fade-down") Una adecuada asignación de responsabilidades fortalece la transparencia del proceso y contribuye a obtener resultados confiables, objetivos y técnicamente sustentados.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Recolección de la información preliminar
    .row.justify-content-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img46.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") La recolección de la información preliminar es una etapa clave dentro del proceso de auditoría interna, ya que permite al equipo auditor comprender el contexto de la organización, sus procesos y el estado actual del Sistema de Gestión de la Calidad antes de iniciar la ejecución formal.
        p.mb-0(data-aos="fade-down") Esta fase facilita la planificación adecuada, la identificación de riesgos potenciales y la definición precisa del alcance y los criterios de auditoría. Entre los aspectos más relevantes se encuentran:
    .cajon.cajon.C03.p-5.mb-5
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Una adecuada recolección de información preliminar permite que la auditoría sea más objetiva, eficiente y enfocada en aspectos realmente relevantes, evitando improvisaciones y fortaleciendo la calidad del proceso auditor.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img52.svg', alt='Imagen decorativa')
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img53.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con la información preliminar recopilada y analizada, el auditor o el equipo auditor procede a elaborar el plan de auditoría, en el cual se definen las actividades, fechas, responsables, procesos a evaluar y métodos a utilizar. Este plan es remitido a la organización auditada para su revisión y confirmación, garantizando la coordinación oportuna, la disponibilidad de recursos y la aceptación formal de la auditoría programada.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Conocimiento de la organización y su contexto',
        texto:
          'Comprender la naturaleza del proceso auditado, su interacción con otros procesos y su contribución al cumplimiento de los objetivos del Sistema de Gestión de la Calidad.',
        imagen: require('@/assets/curso/tema1/img47.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Revisión documental inicial',
        texto:
          'Analizar manuales, procedimientos, instructivos, políticas, mapas de procesos, indicadores, registros y resultados de auditorías anteriores.',
        imagen: require('@/assets/curso/tema1/img48.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaluación preliminar del cumplimiento',
        texto:
          'Verificar si existen cambios recientes en el proceso, actualizaciones normativas o modificaciones en la estructura organizacional.',
        imagen: require('@/assets/curso/tema1/img49.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Identificación de riesgos y áreas críticas',
        texto:
          'Reconocer procesos con mayor impacto o antecedentes de no conformidades.',
        imagen: require('@/assets/curso/tema1/img50.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Definición de criterios y alcance',
        texto:
          'Confirmar los requisitos normativos, legales o internos que serán evaluados durante la auditoría.',
        imagen: require('@/assets/curso/tema1/img51.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
