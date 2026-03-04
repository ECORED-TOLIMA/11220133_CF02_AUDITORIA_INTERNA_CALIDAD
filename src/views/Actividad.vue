<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, etapas y responsabilidades del proceso de ejecución de la auditoría interna, así como el tratamiento de no conformidades y acciones de mejora en el marco de un Sistema de Gestión de la Calidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El objetivo principal de la auditoría interna es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sancionar a los responsables de incumplimientos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar culpables de errores y señalarlos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar el grado de cumplimiento frente a criterios establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elaborar informes financieros anuales en una organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Un criterio de auditoría corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El requisito contra el cual se compara la evidencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La opinión del auditor frente a la cafetería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una sugerencia del auditado.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una mejora propuesta.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'La evidencia objetiva debe ser:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Confidencial y subjetiva.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Verificable y sustentada en hechos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Basada en percepciones del auditor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opcional si el auditado acepta el hallazgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Una no conformidad se configura cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hay incumplimiento frente a un requisito.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Existe una mejora posible.', esCorrecta: false },
            { id: 'c', texto: 'El auditor tiene dudas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El proceso puede optimizarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La corrección consiste en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar el sistema documental completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar al responsable del proceso.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Despedir a los auditados.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Solucionar el incumplimiento detectado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La acción correctiva busca:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la causa del incumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Corregir el documento afectado sin que el auditor se dé cuenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Justificar la no conformidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerrar rápidamente el hallazgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Durante la reunión de apertura se define principalmente:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las sanciones.', esCorrecta: false },
            { id: 'b', texto: 'El cronograma y alcance.', esCorrecta: true },
            { id: 'c', texto: 'Las no conformidades.', esCorrecta: false },
            { id: 'd', texto: 'Las acciones correctivas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'El registro de observaciones debe ser:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'General y ambiguo.', esCorrecta: false },
            { id: 'b', texto: 'Basado en suposiciones.', esCorrecta: false },
            { id: 'c', texto: 'Opcional.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Claro, preciso y documentado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El seguimiento posterior a la acción correctiva busca verificar:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Si el auditor quedó satisfecho.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Si el auditado aceptó el hallazgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eficacia de la acción implementada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Si el informe fue entregado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'La reunión de cierre tiene como propósito:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Negociar los hallazgos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Presentar resultados y conclusiones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Redactar el informe.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Planear las vacaciones con el auditor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Una evidencia documental puede ser:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un procedimiento aprobado.', esCorrecta: true },
            { id: 'b', texto: 'Una percepción verbal.', esCorrecta: false },
            { id: 'c', texto: 'Una opinión del auditor.', esCorrecta: false },
            { id: 'd', texto: 'Un rumor organizacional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'En auditoría, objetividad significa:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Defender la empresa.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ser flexible con los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actuar sin sesgos personales.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Reducir hallazgos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'El informe de auditoría debe:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluir opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser claro, estructurado y sustentado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar mencionar requisitos incumplidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser confidencial incluso para la dirección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La evidencia testimonial es válida cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Está respaldada por registros o verificación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El auditor confía en el entrevistado.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'No existe documentación.', esCorrecta: false },
            { id: 'd', texto: 'El auditado lo solicita.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Una observación en auditoría es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una no conformidad mayor.', esCorrecta: false },
            { id: 'b', texto: 'Un delito empresarial.', esCorrecta: false },
            { id: 'c', texto: 'Una oportunidad de mejora.', esCorrecta: true },
            { id: 'd', texto: 'Una acción correctiva.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'El alcance de la auditoría define:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las sanciones.', esCorrecta: false },
            { id: 'b', texto: 'El presupuesto anual.', esCorrecta: false },
            { id: 'c', texto: 'Las mejoras obligatorias.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Los procesos y límites a evaluar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'La causa raíz se analiza en la etapa de:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reunión de apertura.', esCorrecta: false },
            { id: 'b', texto: 'Corrección inmediata.', esCorrecta: false },
            { id: 'c', texto: 'Acción correctiva.', esCorrecta: true },
            { id: 'd', texto: 'Presentación de hallazgos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El cierre formal del proceso implica:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar los registros.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Confirmar cumplimiento de actividades planificadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar al auditor, ya que detectó muchos hallazgos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Repetir la auditoría.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La participación de los auditados debe ser:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pasiva.', esCorrecta: false },
            { id: 'b', texto: 'Limitada.', esCorrecta: false },
            { id: 'c', texto: 'Opcional.', esCorrecta: false },
            { id: 'd', texto: 'Activa y colaborativa.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La auditoría interna aporta valor cuando:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Genera aprendizaje y mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se limita a cumplir un requisito interno.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reduce hallazgos.', esCorrecta: false },
            { id: 'd', texto: 'Se evita documentar.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos clave relacionados con la ejecución de la auditoría, orientados a la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
