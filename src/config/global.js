export default {
  global: {
    Name: 'Ejecución de la auditoría interna y acciones de mejora',
    Description:
      'Este componente desarrolla la ejecución de la auditoría interna, abordando el proceso de comunicación, la recolección de evidencias, la identificación de no conformidades y la formulación de acciones correctivas. Asimismo, orienta la adecuada documentación, la reunión de cierre y el seguimiento de mejora, fortaleciendo competencias técnicas y éticas del auditor interno de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades del proceso de auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de comunicación en la auditoría',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de comunicación aplicadas en la auditoría',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Contacto inicial con la organización auditada',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Asignación de roles y responsabilidades del equipo auditor',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Recolección de la información preliminar',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reunión de apertura y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Recursos necesarios', hash: 't_2_1' },
          {
            numero: '2.2',
            titulo: 'Sitios y modalidades de auditoría',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Participación de los auditados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recopilación de evidencias y documentación de observaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proceso para recopilar evidencias',
            hash: 't_3_1',
          },
          { numero: '3.2', titulo: 'Tipos de evidencias', hash: 't_3_2' },
          {
            numero: '3.3',
            titulo: 'Responsables de las evidencias',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Registro y documentación de observaciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'No conformidades, correcciones y acciones correctivas',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'No conformidad', hash: 't_4_1' },
          {
            numero: '4.2',
            titulo: 'Correcciones y acciones correctivas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Seguimiento y verificación de eficacia',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Reunión de cierre',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Asistentes', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Presentación de hallazgos', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Acciones posteriores', hash: 't_5_3' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Finalización de la auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Asignación de tareas y responsabilidades',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Elaboración y entrega del informe general',
            hash: 't_6_2',
          },
          { numero: '6.3', titulo: 'Cierre formal del proceso', hash: 't_6_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Actividad orientada a eliminar la causa de una no conformidad detectada, con el fin de prevenir su repetición.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Medida implementada para eliminar la causa de una posible no conformidad antes de que ocurra.',
    },
    {
      termino: 'Alcance de la auditoría',
      significado:
        'Delimitación de los procesos, áreas, periodos y criterios que serán evaluados durante la auditoría.',
    },
    {
      termino: 'Auditor interno',
      significado:
        'Persona competente e independiente del proceso auditado, encargada de evaluar el cumplimiento de los criterios establecidos.',
    },
    {
      termino: 'Criterio de auditoría',
      significado:
        'Requisito, norma o lineamiento contra el cual se compara la evidencia obtenida.',
    },
    {
      termino: 'Ejecución de la auditoría',
      significado:
        'Etapa en la que se recopila y analiza información mediante entrevistas, revisión documental y observación directa.',
    },
    {
      termino: 'Evidencia objetiva',
      significado:
        'Información verificable basada en hechos, datos o registros que respaldan los hallazgos de auditoría.',
    },
    {
      termino: 'Hallazgo de auditoría',
      significado:
        'Resultado de la evaluación de la evidencia frente a los criterios establecidos.',
    },
    {
      termino: 'Informe de auditoría',
      significado:
        'Documento que presenta de manera estructurada los resultados, conclusiones y recomendaciones del proceso.',
    },
    {
      termino: 'Lista de verificación',
      significado:
        'Herramienta utilizada por el auditor para orientar la revisión sistemática de requisitos y procesos.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque sistemático orientado a optimizar el desempeño del sistema de gestión de forma permanente.',
    },
    {
      termino: 'No conformidad',
      significado:
        'Incumplimiento de un requisito especificado en una norma, procedimiento o política.',
    },
    {
      termino: 'Plan de auditoría',
      significado:
        'Documento que define los objetivos, alcance, cronograma y responsables del proceso auditor.',
    },
    {
      termino: 'Programa de auditoría',
      significado:
        'Conjunto de una o más auditorías planificadas para un periodo determinado.',
    },
    {
      termino: 'Reunión de cierre',
      significado:
        'Espacio formal en el que se comunican los resultados y conclusiones al equipo auditado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arter, D. R. (2003). <em>Auditorías de calidad para mejorar la productividad</em> (3.ª ed.). ASQ Quality Press.',
      link: '',
    },
    {
      referencia:
        'Canela López, J. R. (2004). <em>La gestión por calidad total en la empresa moderna</em>. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Cantú Delgado, H. (1997). <em>Desarrollo de una cultura de calidad</em> (1.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Deming, W. E. (1986). <em>Calidad, productividad y competitividad: La salida de la crisis</em>. Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Harrington, J., & Harrington, J., Jr. (1997). <em>Administración total del mejoramiento continuo</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). ISO 9001:2015 <em>Quality management systems – Requirements</em>. ISO.',
      link: '',
    },
    {
      referencia:
        'Maldonado, J. Á. (2015). <em>Fundamentos de calidad total</em>.',
      link: '',
    },
    {
      referencia:
        'Mateo Comprés, R. J. (2009). <em>Sistemas de gestión de la calidad: Un camino hacia la satisfacción del cliente (Parte I)</em>. Suprema Qualitas.',
      link:
        'https://www.squalitas.com/es/blog/articulo/sistemas-de-gestion-de-la-calidad-un-camino-hacia-la-satisfaccion-del-cliente-parte-i',
    },
    {
      referencia:
        'Mora Vanegas, C. (2001–2002). <em>Calidad: Auditoría en la calidad</em>.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018). <em>Guía Técnica Colombiana GTC-ISO 19011: Directrices para la auditoría de sistemas de gestión</em>. ICONTEC Internacional.',
      link: '',
    },
    {
      referencia:
        'Sánchez Gómez, A. (2005). <em>Definición genérica de auditoría y sus etapas</em>. Gestiopolis.',
      link: '',
    },
    {
      referencia:
        'Serna Gómez, H. (2008). <em>Gerencia estratégica</em> (10.ª ed.). 3R Editores.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional Abierta y a Distancia. (s.f.). <em>Evidencias de auditoría</em>. UNAD.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alejandro Mantilla Cáceres',
          cargo: 'Experto temático',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
