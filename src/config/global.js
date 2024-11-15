export default {
  global: {
    componenteFormativo: 'Proceso de negociación',
    descripcionCurso:
      'Con los procesos de globalización y de internacionalización de las economías, los aspectos relacionados con la negociación están a la orden del día, lo que ha permitido un mayor desarrollo conceptual en el área. Aplicando, entre otros aspectos, los contratos de negociación, los cuales se deben llevar a cabo, basados en las normas existentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Negociación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias y tácticas de negociación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Etapas de la negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Etapa 1. Antes de la negociación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etapa 2. Durante la negociación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Etapa 3. Después de la negociación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contrato',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Contrato comercial o de venta',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de contratos comerciales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos de un contrato comercial',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Formato de un contrato de compraventa',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Contrato civil de prestación de servicios',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Normas legales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normas cambiarias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Normas del comercio internacional',
            hash: 't_5_3',
          },
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '1. Negociación',
      referencia:
        'Berberl, J., Ramón, M. & Vázquez, R. (2012). <em>La Selección de Mercados Preferentes como Clave en la Internacionalización Empresarial.</em>',
      tipo: 'Revista web',
      link:
        'https://revistas.tec.ac.cr/index.php/tec_empresarial/article/view/582/507',
    },
    {
      tema: '1. Negociación',
      referencia:
        'Parra, J., Santiago, E., Murillo, M. & Atonal, C. (2010). <em>Estrategias para negociaciones exitosas.</em>',
      tipo: 'Artículo web',
      link: 'https://www.redalyc.org/pdf/730/73013006009.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'hace referencia a una decisión que se toma de manera común entre una o más personas; de igual manera, puede hacerse entre una junta o tribunal, dado el caso.',
    },
    {
      termino: 'Compendio',
      significado:
        'resumen o recopilación de información que presenta de manera concisa los puntos más relevantes de un tema específico.',
    },
    {
      termino: '<em>Minimax</em>',
      significado:
        'se basa en la estrategia de minimizar la posible pérdida máxima que se puede sufrir.',
    },
    {
      termino: 'Mobiliario',
      significado:
        'conjunto de objetos y elementos que se utilizan para amueblar y decorar un espacio, proporcionando funcionalidad y comodidad.',
    },
    {
      termino: 'Negociar',
      significado:
        'implica intercambiar propuestas, discutir intereses y buscar soluciones que sean aceptables para todas las partes involucradas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M. (2012). <em>Contratos Mercantiles.</em> Colombia: Universidad de Ibagué. ',
    },
    {
      referencia:
        'Arcaya, M. (2009). <em>Los Seis Pasos de la Negociación.</em> Buenos Aires: El Cid Editor.',
    },
    {
      referencia:
        'Banco Nacional de Comercio Exterior. (2001). <em>Técnicas de negociación internacional.</em> 2ª ed. México: Bancomext.',
    },
    {
      referencia:
        'Broseta, M. (1985). <em>Manual de Derecho Mercantil.</em> Madrid. ',
    },
    {
      referencia:
        'Gil, I., Berenger, G., González M. & Fuentes M. (2007). Segmentando Clientes a partir del valor del servicio. <em>Cuadernos de Economía y Dirección de le Empresa, 31, 031-066.</em>',
    },
    {
      referencia:
        'Fisher, R., Ury, W. & Patton, B. (1993). <em>Sí... ¡de acuerdo!: Cómo negociar sin ceder.</em> Ed. Norma.',
    },
    {
      referencia:
        'Función Pública. (1887). <em>Ley 57 de 1887. Código Civil de Colombia.</em> ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=39535',
    },
    {
      referencia:
        'Función Pública. (1971). <em>Decreto 410 de 1971. Código Civil de Comercio.</em> ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=41102',
    },
    {
      referencia:
        'Greco, O. (2005). <em>Diccionario de comercio exterior.</em> Argentina: Ed. Valletta Ediciones.',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. (2006). <em>Dirección de Marketing.</em> México: Pearson Educación.',
    },
    {
      referencia:
        'Maubert, J. 1993). <em>Negociar: Las Claves para Triunfar.</em> Barcelona: Marcombo.',
    },
    {
      referencia:
        'Milio, I. (2004). <em>Diseño y comercialización de productos turísticos locales y regionales.</em> Madrid: Paraninfo.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). <em>Manual del empresario sobre las negociaciones comerciales.</em> Recuperado de: ',
      link:
        'http://www.mincit.gov.co/estudios-economicos/estudios-y-publicaciones/publicaciones/manual-del-empresario-sobre-las-negociaciones-come',
    },
    {
      referencia:
        'Ovejero, A. (Ed.). (2004). Técnicas de Negociación. Madrid: McGraw Hill. ',
    },
    {
      referencia:
        'Paucar, J. (2006). <em>Contratos mercantiles.</em> 6.ª ed., Biblioteca Jurídica Dike: Medellín.',
    },
    {
      referencia:
        'Puchol, L., Núñez, A. & Puchol, I. (2010). <em>El Libro de la Negociación.</em> Madrid: Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Real Academia Española. (2024). <em>Definiciones de diversos conceptos.</em> ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Rodríguez M. & Ramos, J. (1988). <em>Técnicas de Negociación.</em> México: McGraw Hill.',
    },
    {
      referencia:
        'Salla, J., Ortega, J. (2008). <em>Plan Estratégico de Relaciones Públicas.</em> Madrid: Bosch Editor. ',
    },
    {
      referencia:
        'Scott. (1991). <em>Cómo negociar con ventaja.</em> Madrid: Paraninfo.',
    },
    {
      referencia: 'Zapata, A. (2005). <em>Negociación.</em> Bogotá: Ecoe.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder de la Línea de producción',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Mercedes Useche Céspedes',
          cargo: 'Líder expertos temáticos',
          centro:
            'Centro de Gestión de Mercados y TIC – Regional Distrito Capital',
        },
        {
          nombre: 'Carlos Arturo Aristizábal Rodríguez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan José Botello Castellanos',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Elsa Cristina Arenas Martínez',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Zulma Yurany Vianchá Rodríguez',
          cargo: 'Líder de la Línea de producción',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Jhon Jairo Buitrago Pastrana',
          cargo: 'Gestor de Curso',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Sur Colombiano – Regional Huila',
        },
        {
          nombre: 'Janet Lucía Villalba Triana',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Héctor Salinas Castellanos',
          cargo: 'Guionista',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
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
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
