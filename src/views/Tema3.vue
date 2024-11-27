<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Etapas de la negociación

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema3/img_1.png', alt='')

    p.mb-5(data-aos="fade-right") Según Puchol, Núñez & Puchol (2010), un proceso de negociación está compuesto por las siguientes etapas:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Proceso de la negociación</i>
        figure
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema3/fig-3a.svg', alt='Figura que relaciona los tres procesos que se encuentran en la negociación, los cuales se dan antes, durante y después de la negociación. ')  
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema3/fig-3b.svg', alt='Figura que relaciona los tres procesos que se encuentran en la negociación, los cuales se dan antes, durante y después de la negociación. ') 
      
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Etapa 1. Antes de la negociación

    p.mb-5(data-aos="fade-right") Algunos autores como Ovejero (2004), Puchol, Núñez & Puchol (2010), involucran aquí las que otros denominan #[b fase previa y de preparación]. Esta es la etapa más importante del proceso, pues dentro de ella, se deben contemplar los siguientes temas:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Búsqueda de información

    p.mb-5(data-aos="fade-right") Debe cubrir los siguientes aspectos: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Los oponentes") 
            p.mb-4 Cuanto más se conozca de la otra parte, mejores serán las condiciones para obtener un resultado favorable. Algunos aspectos a estudiar son:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Su historia de negociación en cuanto a resultados y objetivos anteriores, estrategias utilizadas, su cumplimiento de acuerdos, personas que han intervenido y que se sabe intervendrán.
                li 
                  i.fas.fa-play
                  p.mb-1 Calcular los puntos fuertes y débiles a nivel interno y externo, las necesidades percibidas y la estrategia de negociación de la otra parte.
                li 
                  i.fas.fa-play
                  p.mb-1 Conocer la cultura y el estilo de negociación de los negociadores de la contraparte.
                li 
                  i.fas.fa-play
                  p.mb-1 Identificar lo que desea la contraparte, lo que es esencial y lo que es deseable, pero no esencial, además de aspectos accesorios de su oferta en donde puede ceder con facilidad.
                li 
                  i.fas.fa-play
                  p.mb-1 Definir además con mucha claridad qué va a aceptar, que no va a aceptar, que va a pedir con más vehemencia y en qué puntos puede llegar a un acuerdo.
          div(numero="2" titulo="La negociación") 
            p.mb-4 Se trata de planear y buscar información desde el punto de vista del negociador y de su oponente. Al respecto es relevante lo siguiente:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Temas prioritarios y de segunda línea para ambas partes.
                li 
                  i.fas.fa-play
                  p.mb-1 Necesidades importantes por resolver de los dos.
                li 
                  i.fas.fa-play
                  p.mb-1 Antecedentes de negociación con otras empresas, de otros lugares. 
                li 
                  i.fas.fa-play
                  p.mb-1 Consecuencias económicas y sociales para ambos de no cerrar el trato. 
                li 
                  i.fas.fa-play
                  p.mb-1 Consecuencias para ambos de no cerrar el trato, relacionadas con el entorno, el medio ambiente, clientes y proveedores.
          div(numero="3" titulo="Margen de maniobra o poder de negociación que tendrá el equipo") 
            p.mb-4 Hay que tener en cuenta: 
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Persona delegada para realizar la negociación y cerrar el trato.
                li 
                  i.fas.fa-play
                  p.mb-1 Persona a quien se debe informar sobre el acontecer del proceso, a través de qué medios y con qué frecuencia.
          div(numero="4" titulo="La oferta") 
            p.mb-4 Al tratarse de una venta, se debe conocer completamente:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 El producto o servicio que se ofrece, sus especificaciones técnicas, colores, sabores, presentaciones, tamaños, empaque, cuidados que se debe tener. 
                li 
                  i.fas.fa-play
                  p.mb-1 Sus atributos y beneficios; es decir, cuáles son sus prestaciones y qué beneficios le otorga al consumidor. 
                li 
                  i.fas.fa-play
                  p.mb-1 El tiempo en que puede entregarse. 
                li 
                  i.fas.fa-play
                  p.mb-1 La garantía a cubrir: puede definirse como hasta qué punto se respalda un producto por un defecto que presente, generalmente en el proceso de fabricación o sus materiales. 
                li 
                  i.fas.fa-play
                  p.mb-1 El servicio técnico o de apoyo, que necesite el consumidor para el uso del producto o servicio. 
                li 
                  i.fas.fa-play
                  p.mb-1 La instalación. Algunos productos, como máquinas, necesitan instalación y adecuación del sitio en donde se van a ubicar. 
                li 
                  i.fas.fa-play
                  p.mb-1 Asesoría y acompañamiento, que por la complejidad del producto se requiere facilitar al cliente. 
                li 
                  i.fas.fa-play
                  p.mb-1 Precio. 
                li 
                  i.fas.fa-play
                  p.mb-1 Descuentos por pronto pago, especiales, por temporada o por volumen. 
                li 
                  i.fas.fa-play
                  p.mb-1 Bonificaciones a entregar por la compra (más producto, dinero, otro producto), que en la práctica son descuentos.
          div(numero="5" titulo="Los objetivos de la negociación") 
            p.mb-4 Son los siguientes aspectos a tener en cuenta:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Definir los objetivos de la negociación: es decir, tener claro qué se busca del proceso. Pueden fijarse objetivos máximos, medios, mínimos y línea de ruptura.
                li 
                  i.fas.fa-play
                  p.mb-1 Alternativas frente a posibles problemas, en cuanto al logro de los objetivos definidos.
          div(numero="6" titulo="Conformación del equipo de negociación") 
            p.mb-4 Tener en cuenta lo siguiente:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Número de integrantes.
                li 
                  i.fas.fa-play
                  p.mb-1 Nombre de los integrantes. 
                li 
                  i.fas.fa-play
                  p.mb-1 Roles a desempeñar por integrantes.
                li 
                  i.fas.fa-play
                  p.mb-1 Posible acompañamiento de un experto interno o externo. 
                li 
                  i.fas.fa-play
                  p.mb-1 Señales a utilizar.
          div(numero="7" titulo="El equilibrio de fuerzas") 
            p.mb-4 Fortalezas y debilidades de ambas partes. Pueden resumirse en el siguiente cuadro propuesto por Puchol, Núñez, & Puchol (2010):
            figure
              img(src='@/assets/curso/temas/tema3/img_2.svg', alt='Cuadro que relaciona el equilibrio de las fuerzas, destacando aspectos como los puntos fuertes y débiles, de ellos y nosotros, de acuerdo a lo planteado por los autores.')
          div(numero="8" titulo="Planear el desarrollo de la negociación") 
            p.mb-4 Con los siguientes aspectos claves:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Diseñar estrategias y tácticas a utilizar.
                li 
                  i.fas.fa-play
                  p.mb-1 Posibles respuestas a preguntas previsibles.
                li 
                  i.fas.fa-play
                  p.mb-1 Preguntas a formular.
          div(numero="9" titulo="Ayudas para la negociación") 
            p.mb-4 A tener en cuenta las siguientes:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 Cálculos matemáticos.
                li 
                  i.fas.fa-play
                  p.mb-1 Presentación de diapositivas. 
                li 
                  i.fas.fa-play
                  p.mb-1 Uso de tablero.
                li 
                  i.fas.fa-play
                  p.mb-1 Gráficos explicativos.
                li 
                  i.fas.fa-play
                  p.mb-1 Muestras de productos. 
                li 
                  i.fas.fa-play
                  p.mb-1 Catálogos. 
                li 
                  i.fas.fa-play
                  p.mb-1 Manuales de usuario.
                li 
                  i.fas.fa-play
                  p.mb-1 Folletos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Identificación de los intereses de la contraparte

    p.mb-5(data-aos="fade-right") Más allá de lo manifestado, se debe conocer qué es lo que la contraparte quiere #[b realmente], qué opciones pueden preferir entre las que se le ofrecen, cuáles son las limitaciones y cuál será el punto en donde puede romper la negociación.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Consecución del MAAN

    p.mb-5(data-aos="fade-right") También conocido como MAPAN, es la traducción del acrónimo inglés de BATNA (Best Alternative to a Negotiate Agreement). Fue propuesto por Fisher & Ury (1981) y criticado y mejorado luego en 1992 por los mismos autores (1993). 

    .bloque-texto-g.bloque-texto-g.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 MAAN significa la “mejor alternativa a un acuerdo negociado”; es decir, lo que se puede hacer si no se logra un acuerdo satisfactorio durante la negociación. De acuerdo con Fisher, Ury & Patton (1993) “…es el único criterio que puede protegerlo de aceptar acuerdos que son demasiado desfavorables y de rechazar términos que sería conveniente aceptar”. En consecuencia, si el negociador no tiene claro que hará en caso de no lograr un acuerdo, estará negociando a ciegas, debido a que no tendrá un marco de referencia que lo guíe.

    p.mb-5(data-aos="fade-right") De acuerdo con Fisher, Ury & Patton (1993, p.120), el MAAN puede determinarse a través de los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-b.p-4
          .col-lg-3.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_3.svg', alt='')
          .col-lg-9.col-12 
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span #[strong(style="color:#000000") 1]
                p.mb-2 Inventar una lista de acciones que se podrían realizar en caso de no llegar a un acuerdo.
              li 
                .lista-ol--cuadro__vineta
                  span #[strong(style="color:#000000") 2]
                p.mb-2 Mejorar algunas de las ideas más prometedoras y convertirlas en alternativas prácticas.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span #[strong(style="color:#000000") 3]
                p.mb-0 Seleccionar en forma tentativa la mejor de estas alternativas.

    p.mb-5(data-aos="fade-right") También es importante averiguar cuál es el MAAN de la contraparte y procurar que esta no conozca la del negociador.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Establecer la ZOPA (Zona de Posible Acuerdo)

    p.mb-5(data-aos="fade-right") Antes de negociar, se deben marcar los límites mínimos y máximos, de lo que se quiere alcanzar, como de lo que se dispone a ceder. Puchol, Núñez & Puchol (2010), enumeran las zonas en que se mueve toda negociación:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-6.col-12.order-lg-1.order-2
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Utopía") 
            p.mb-2 Son objetivos muy difíciles de alcanzar.
          div(numero="2" titulo="Ideal") 
            p.mb-2 Es un acuerdo bastante conveniente.
          div(numero="3" titulo="Equilibrio") 
            p.mb-2 Cuando se obtiene, abre la puerta para futuros acuerdos.
          div(numero="4" titulo="Mínimo") 
            p.mb-2 Zona de poco beneficio, que se obtiene cuando se arriesga a romper la negociación.
          div(numero="5" titulo="Ruptura o reserva") 
            p.mb-2 Cuando no se llega a ningún acuerdo las partes se levantan de la mesa.
      .col-lg-6.col-12.order-lg-2.order-1.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_4.png', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Preparación de la agenda
      .col-12
        p.mb-5(data-aos="fade-right") Cada actor debe preparar su agenda, pero todos los actores deben ponerse de acuerdo, en la agenda definitiva de la negociación, la cual debe seguirse de manera estricta. Los apartes que debe llevar una agenda, en concepto de Puchol, Núñez & Puchol (2010), son:
      .col-lg-7.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Temas a tratar y orden de discusión: aspectos prioritarios y tema de inicio o puente.
          li 
            i.fas.fa-play
            p.mb-1 Temas que deben ser condición de otros.
          li 
            i.fas.fa-play
            p.mb-1 Fecha de la negociación y horario de las reuniones.
          li 
            i.fas.fa-play
            p.mb-1 Tiempo que debe durar la negociación.
          li 
            i.fas.fa-play
            p.mb-1 Pausas para descanso y alimentación.
      .col-lg-5.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Espacios para reflexión.
          li 
            i.fas.fa-play
            p.mb-1 Número de personas que participará.
          li 
            i.fas.fa-play
            p.mb-1 Participación en la reunión de terceros.
          li 
            i.fas.fa-play
            p.mb-1 Lugar de la negociación.
          li 
            i.fas.fa-play
            p.mb-1 Registro de lo que se va negociando.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Condicionantes de la negociación

    p.mb-5(data-aos="fade-right") Son aquellos aspectos que representan límites y condiciones a la negociación. De acuerdo con Puchol, Núñez & Puchol (2010), son:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-7.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Acuerdos previos o costumbres comerciales ya establecidas.
          li 
            i.fas.fa-play
            p.mb-1 Límites de autoridad.
          li 
            i.fas.fa-play
            p.mb-1 Límites de política.
      .col-lg-5.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Límites financieros.
          li 
            i.fas.fa-play
            p.mb-1 Límites tecnológicos.
          li 
            i.fas.fa-play
            p.mb-1 Límites legales.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Definición del equipo de negociación

    p.mb-5(data-aos="fade-right") Hindle (1998), citado por Puchol, Núñez & Puchol (2010, p.78), afirma que las personas que integran el equipo pueden ser:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_5.svg', alt='')
      .col-lg-9.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="El líder")
            p Dirige y coordina su equipo, da inicio a la reunión, otorga el uso de la palabra, realiza y recibe ofertas, acepta o rechaza.
          div(numero="2" titulo="El poli bueno o agente bueno")
            p Se ocupa de crear un ambiente favorable.
          div(numero="3" titulo="El poli malo o agente malo")
            p Hace el papel contrario al anterior, por lo que su trabajo es molestar a la contraparte sin que llegue a abandonar el proceso.
          div(numero="4" titulo="El ordenancista")
            p Maneja los ritmos de la negociación.
          div(numero="5" titulo="El hombre escoba")
            p Tiene como papel es estar atento a todas las señales del adversario y registrar aspectos tales como: tomar nota de reacciones, el lenguaje verbal y no verbal, la actuación de los integrantes de su propio equipo, hacer cálculos matemáticos sobre las diferentes alternativas que se presenten, los roles que asumen los integrantes del equipo contrario y registrar las conclusiones y acuerdos parciales.
    
    p.mb-5(data-aos="fade-right") Los integrantes del equipo deben ubicarse en la mesa de la siguiente manera, según los autores previos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Integrantes del equipo</i>
        figure
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema3/fig-4a.svg', alt='Figura que relaciona el ordenamiento de los integrantes del equipo, previamente descritos.')  
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema3/fig-4b.svg', alt='Imagen que relaciona el ordenamiento de los integrantes del equipo, previamente descritos.') 
      
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entrenamiento de los negociadores

    p.mb-5(data-aos="fade-right") Las personas que van a negociar deben prepararse de manera teórica y práctica, en temas como escucha activa y técnicas de asertividad, entre otros aspectos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Preparación del ambiente físico

    p.mb-4(data-aos="fade-right") Esta preparación es fundamental, por razones prácticas y psicológicas, dada su influencia en la conducta humana. Esta preparación debe incluir:

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-4.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_6.png', alt='')
      .col-lg-8.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 El lugar de la reunión y el espacio concreto depende de los objetivos que se persiguen con la reunión. En consecuencia, el lugar podrá ser la sede de trabajo de uno de los actores o preferiblemente un sitio neutral. Además, la elección de la sala o salón también responde a los mismos objetivos; por lo tanto, es necesario tener en cuenta aspectos como un tamaño acorde con el número de participantes, a razón de dos metros cuadrados por asistente, para así lograr un ambiente en el que las personas se sientan a gusto y no quieran abandonar antes de tiempo. Además, el lugar debe favorecer la comunicación entre todos y no permitir la creación de grupos informales.
          li 
            i.fas.fa-play
            p.mb-1 El espacio además debe ser cerrado para facilitar la discreción del proceso.
          li 
            i.fas.fa-play
            p.mb-1 También se deben tener en cuenta la iluminación que no debe ser muy intensa, los colores de las paredes deben ser suaves; la temperatura del ambiente no debe ser ni muy caliente ni muy fría; debe haber buena ventilación y aislamiento contra ruidos.
          li 
            i.fas.fa-play
            p.mb-1 El mobiliario, aunque no se crea, es más importante aún, debido a que tiene influencia tanto física como simbólica sobre el comportamiento de las personas, sus relaciones interpersonales e intergrupales. Por tal motivo, es importante decidir su forma y tamaño.
          li 
            i.fas.fa-play
            p.mb-1 En cuanto a la mesa, según un estudio realizado por M. Belvin, citado por Ovejero (2004), normalmente las personas se sienten más a gusto en una mesa redonda, que en cualquiera que tenga otra forma y a una distancia mínima, pero tampoco muy grande que le quite dinamismo a la reunión. Puchol, Núñez, Puchol (2010), muestran distintos tipos de mesa de negociación bajo el siguiente esquema:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Tipos de mesa de negociación</i>
        figure
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema3/fig-5a.svg', alt='Figura que relaciona los tipos de mesa de negociación, incluyendo aspectos como el clima amistoso, la mesa redonda (negociación cooperativa) y los equipos en caras opuestas (negociación competitiva).')  
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema3/fig-5b.svg', alt='Imagen que relaciona los tipos de mesa de negociación, incluyendo aspectos como el clima amistoso, la mesa redonda (negociación cooperativa) y los equipos en caras opuestas (negociación competitiva).') 
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Las sillas deben ser medianamente cómodas; es decir, no tan rígidas que cansen a las personas muy rápido, ni tan blandas para que quieran dormir en ellas.
          li 
            i.fas.fa-play
            p.mb-1 Deben ofrecerse bebidas para mostrar un deseo de acogida.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-a5.p-4
          .col-lg-2.col-6.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_7.svg', alt='')
          .col-lg-10.col-12 
            p #[b Importante:] en toda negociación, el 80 % de los resultados se deben a la preparación y el 20 % restante a la interacción.
            p No se debe:
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 Evaluar la posición de la contraparte desde nuestra cultura.
              li 
                i.fas.fa-play
                p.mb-1 Realizar procesos de negociación internacional sin prepararse previamente.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Etapa 2. Durante la negociación

    p.mb-5(data-aos="fade-right") Al igual que la primera etapa, el momento llamado durante la negociación, también contempla un proceso que consta de los siguientes puntos:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Inicio
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-7.col-12.order-lg-1.order-2
        p No puede decirse que este es el inicio de la negociación, puesto que en realidad el verdadero inicio se encuentra en la primera etapa, que es el antes de la negociación. Por consiguiente, el inicio de la segunda etapa es cuando se encuentran los negociadores.
        p.mb-4 En esta parte del proceso:
        .row.align-items-center
          .col-lg-3.col-12.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img_9.svg', alt='')
          .col-lg-9.col-12
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 Las partes se conocen.
              li 
                i.fas.fa-play
                p.mb-1 Es importante crear un ambiente de confianza.
              li 
                i.fas.fa-play
                p.mb-1 Se declaran las metas y los objetivos de ambos.
              li 
                i.fas.fa-play
                p.mb-1 Se deben explorar las necesidades de la contraparte en cuanto a:
            ul.lista-ul--color.ms-4
              li 
                i.fas.fa-check
                p.mb-0 Lo que realmente quiere.
              li 
                i.fas.fa-check
                p.mb-0 Sus estrategias de negociación.
              li 
                i.fas.fa-check
                p.mb-0 Sus tácticas de negociación.
      .col-lg-5.col-10.order-lg-2.order-1.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_8.png', alt='')

    p.mb-5(data-aos="fade-right") Esto hace que este encuentro deba ser #[b amistoso] y #[b tranquilo], normalmente la conversación se inicia con un tema diferente al de la negociación, que puede ser tópico de actualidad o la presentación de las empresas para, de manera gradual, acercarse al objeto de la negociación. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10.tarjeta.color-primario-b.p-4
        p.mb-0 Al entrar en materia, la parte vendedora presenta su oferta; para ello, debe presentar por escrito los términos económicos (precio, forma de pago, plazos y descuentos) y las especificaciones técnicas. Si se desea llegar pronto a un acuerdo, ambas partes deben hacerse concesiones para manifestar la voluntad de negociar.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Argumentación

    p.mb-5(data-aos="fade-right") Los negociadores deben tener preparado para el momento de la negociación una serie de razones por las cuales la contraparte debe considerar la oferta o respuestas a posibles preguntas u objeciones. Por consiguiente, las características de los productos o servicios se deben traducir en beneficios para la contraparte, pero también el oferente debe ser consciente de sus puntos débiles para poder minimizarlos y destacar los puntos fuertes, a través de la argumentación. De acuerdo con Puchol, Núñez & Puchol (2010), los componentes de un argumento son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-6.col-12.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_10.png', alt='')
      .col-lg-6.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Declaración") 
            p.mb-2 La idea que se busca es que la contraparte crea.
          div(numero="2" titulo="Datos") 
            p.mb-2 Los hechos que apoyan la declaración.
          div(numero="3" titulo="Garantía") 
            p.mb-2 Oración que sirve de enlace entre los datos y la declaración.
          div(numero="4" titulo="Apoyo") 
            p.mb-2 Oración que garantiza la misma garantía.
          div(numero="5" titulo="Reserva") 
            p.mb-2 Palabra que restringe el valor de la declaración.

    p.mb-5(data-aos="fade-right") En la argumentación se debe tener especial cuidado con el manejo de las palabras; para ello, se debe tener en cuenta lo que recomiendan Puchol, Núñez & Puchol (2010):
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-7.order-lg-1.order-2
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 1]
            p.mb-2 Usar lenguaje proactivo o positivo.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 2]
            p.mb-2 No usar palabras que puedan poner al negociador en una situación de desventaja.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 3]
            p.mb-2 No emplear la palabra no.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 4]
            p.mb-2 Utilizar los verbos conjugados en presente o en futuro, en vez del condicional.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 5]
            p.mb-2 Evitar las palabras #[b sin embargo] y #[b pero].
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 6]
            p.mb-2 No emitir calificativos, pueden producir desconfianza, es mejor justificar o describir.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 7]
            p.mb-2 Evitar dar órdenes.
      .col-lg-3.col-6.order-lg-2.order-1.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_11.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-10
        p Al presentar los argumentos, aparecen las objeciones, las cuales son inherentes al proceso, por lo que son verdaderas oportunidades para construir una relación de negocios duradera, puesto que al solucionarlas se genera confianza mutua. Al respecto Puchol, Núñez & Puchol (2010), plantean las siguientes maneras de manejar las objeciones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-10.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_12.png', alt='')
      .col-lg-5.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-play
            p.mb-1 Aceptar las objeciones con seguridad.
          li 
            i.fas.fa-play
            p.mb-1 Escuchar.
          li 
            i.fas.fa-play
            p.mb-1 Hacer un alto antes de responder y precisarlas.
          li 
            i.fas.fa-play
            p.mb-1 Responder por medio de:
        ul.lista-ul--color.ms-4
          li 
            i.fas.fa-check
            p.mb-0 Hacer preguntas aclaratorias. 
          li 
            i.fas.fa-check
            p.mb-0 Repetir la pregunta.
          li 
            i.fas.fa-check
            p.mb-0 Responder a posibles desventajas con ventajas.
          li 
            i.fas.fa-check
            p.mb-0 Provocar al otro para que haga objeciones. 
          li 
            i.fas.fa-check
            p.mb-0 Alargar el tiempo.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Comunicación

    p.mb-4(data-aos="fade-right") Que de acuerdo con Maubert (1993), es “…un estado de ánimo común entre aquel que comunica (el emisor) y el que recibe la comunicación (el receptor) …”. Esto puede entenderse además como un intercambio de mensajes y por lo tanto, se constituye en el eje transversal de la negociación, debido a que por medio de ella, se manifiesta la interacción entre las partes, en el momento en que cada una anuncia a la otra sus planteamientos.
    p.mb-5(data-aos="fade-right") La comunicación no siempre será fluida, en ocasiones estará interrumpida por barreras que la entorpecen, la distorsionan o definitivamente la eliminan. Estas barreras son según Maubert (1993):
    
    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.col-12.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/sl1-a.svg', alt='')
        h4.text-center Barreras físicas
        p.mb-0 Es el ruido ocasionado por factores del ambiente, problemas propios del medio por el cual se realiza o fallas técnicas en los mismos.
      .col-lg.col-12.tarjeta.color-primario-a2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/sl1-b.svg', alt='')
        h4.text-center Barreras psicológicas
        p.mb-0 Residen en la personalidad, las ideas, la cultura, los afectos o el estado de ánimo de los actores o de su capacidad para emitir o recibir los mensajes (conocimiento del idioma o lenguaje específico), por lo que se filtran o distorsionan los mismos.
      .col-lg.col-12.tarjeta.color-primario-a3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/sl1-c.svg', alt='')
        h4.text-center Barreras sociológicas
        p.mb-0 Son los obstáculos puestos por la interacción con personas o grupos de las mismas, debido a que pueden distorsionar los mensajes.

    p.mb-5(data-aos="fade-right") Mediante la comunicación se transmiten mensajes de manera consciente e inconsciente a través de dos tipos de lenguaje. 

    .row.h-100.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-6.mb-4.mb-lg-2
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl2-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Lenguaje verbal o de palabras
              p Es el que se manifiesta a través de las palabras, bien sea habladas o escritas y por lo tanto, las personas son conscientes y responsables de su uso.
      .col-12.col-lg-6
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl2-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Lenguaje no verbal
              p Se evidencia a través de movimientos corporales, los cuales se realizan, en la mayoría de los casos, inconscientes.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-6.col-xl-5.col-10.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_13.png', alt='')
      .col-lg-6.col-xl-5.col-12
        p.mb-4 Al respecto, Rodríguez & Ramos (1998), plantean que en la interacción que sucede en la negociación se manifiestan los siguientes aspectos:
        ul.lista-ul--color
          li 
            i.fas.fa-play
            p.mb-0 El yo o la dimensión interior de la persona.
          li 
            i.fas.fa-play
            p.mb-0 Los valores.
          li 
            i.fas.fa-play
            p.mb-0 Sus intenciones, las cuales no se manifiestan al inicio del proceso.
          li 
            i.fas.fa-play
            p.mb-0 Las expectativas o presunciones sobre la conducta de los demás.
          li 
            i.fas.fa-play
            p.mb-0 Mensajes no verbales.
          li 
            i.fas.fa-play
            p.mb-0 Mensajes verbales.
          li 
            i.fas.fa-play
            p.mb-0 La conducta.

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        p Por su parte, Puchol, Núñez & Puchol (2010), hacen la siguiente clasificación, específicamente, sobre diferentes las formas de lenguaje no verbal:
      .col-lg-10.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 La ausencia o presencia de la persona.
          li 
            i.fas.fa-play
            p.mb-1 La ubicación que toma la persona en un recinto.
          li 
            i.fas.fa-play
            p.mb-1 Quedarse en silencio o por el contrario hablar, aplaudir o cantar.
          li 
            i.fas.fa-play
            p.mb-1 La vestimenta que se use.
          li 
            i.fas.fa-play
            p.mb-1 Algunos síntomas fisiológicos como ruborizarse, sudar, temblor en las manos o de la voz.
          li 
            i.fas.fa-play
            p.mb-1 La postura que la persona adopta con su cuerpo ante diferentes situaciones.
          li 
            i.fas.fa-play
            p.mb-1 Los gestos que se realizan al llevarse las manos a alguna parte del cuerpo como la cara, la boca o la cabeza.
          li 
            i.fas.fa-play
            p.mb-1 Las expresiones de la cara, tales como abrir o cerrar los ojos, levantar las cejas o mover los labios.
          li 
            i.fas.fa-play
            p.mb-1 Por medio del contacto físico entre las personas se expresan sentimientos, mediante apretones de manos, en los brazos, los hombros o pequeños golpes en la espalda.
          li 
            i.fas.fa-play
            p.mb-1 La distancia que toman las personas para hablar se denomina proxemia.
  
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Saber hacer preguntas

    p.mb-5(data-aos="fade-right") En la interacción de propuestas y contrapropuestas se necesita saber hacer preguntas que lleven a esclarecer los interrogantes que vayan surgiendo en el proceso. Dependiendo del interés que se tenga y del momento que se esté atravesando, pueden hacerse preguntas abiertas, cerradas o de confrontación.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Saber escuchar

    p.mb-5(data-aos="fade-right") Si el negociador practica la escucha activa; es decir, estar atentos a la comunicación verbal y no verbal del otro, podrá ayudar a obtener la mayor información posible sobre la contraparte, además de construir confianza.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-5.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_14.png', alt='')
      .col-lg-8.col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Dominar las emociones
        p.mb-4 Las emociones son propias de la condición del ser humano; por lo tanto, es inevitable experimentarlas. Frente a esta realidad, lo que queda por hacer es manejarlas y hasta cierto punto controlarlas. En caso de no hacerlo, estas pueden influir, casi siempre de manera negativa en la negociación.
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Realizar peticiones
        p.mb-4 Puede verse como algo sencillo, pero en la práctica, se deben desarrollar las habilidades propuestas por Puchol, Núñez & Puchol (2010):
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Pedir lo que se necesita con un ligero incremento, pensando en el posterior regateo que haga la contraparte.
          li 
            i.fas.fa-play
            p.mb-1 Hacer la petición a la persona adecuada, que es quien realmente tiene el poder de decidir.
          li 
            i.fas.fa-play
            p.mb-1 Hacer la petición basada en razones sólidas y lógicas.
          li 
            i.fas.fa-play
            p.mb-1 Prepararse para la contrapetición.
          li 
            i.fas.fa-play
            p.mb-1 Prever los problemas que pueda acarrearle. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Regatear

    p.mb-5(data-aos="fade-right") Es una costumbre arraigada en algunos países del mundo, por lo que se debe estudiar primero la cultura de la contraparte, para saber si está dispuesta a entrar en el juego de “tira y afloje” para solicitar rebajas en el precio o alguna contraprestación en cuanto a plazos para el pago, programas de asesoría o mantenimiento gratis, de acuerdo con los intereses de las partes. Al respecto, Puchol, Núñez & Puchol (2010) recomiendan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-b.p-4
          .col-lg-2.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_15.svg', alt='')
          .col-lg-10.col-12 
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 Tener tacto en el regateo para no ocasionar un desacuerdo que lleve a la ruptura de la negociación.
              li 
                i.fas.fa-play
                p.mb-1 Regatear algo de interés.
              li 
                i.fas.fa-play
                p.mb-1 Tener en cuenta los límites fijados para la negociación, el MAAN y el ZOPA.
      
    p.mb-5(data-aos="fade-right") Las siguientes son posibles opciones de conducta frente a la propuesta o contrapropuesta de acuerdo con Bancomext (2010):

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2a.svg', alt='')
          h4.text-center Rechazar
          p En caso de rechazar la primera oferta, esta se debe rechazar con una justificación convincente; por ello, es importante recoger la información necesaria para poder convencer. La contraparte se verá obligada a hacer una contrapropuesta.
      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2b.svg', alt='')
          h4.text-center Aceptar y cerrar el trato
          p En caso de aceptar la primera oferta, se debe procurar que todos los puntos de la lista de verificación se cumplan al cierre de la negociación.
      .col-lg-4.col-12.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2c.svg', alt='')
          h4.text-center Proponer una contraoferta
          p Una vez conocidas las posiciones de las partes, es momento de hacer pequeñas concesiones para mantener activa la negociación, a la vez que se abordan temas de interés común.
          
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Hacer concesiones

    p.mb-5(data-aos="fade-right") Es sacrificar aspectos poco importantes para una parte, pero que son muy importantes para la otra, con el objetivo de llegar a consolidar el acuerdo. Puchol, Núñez & Puchol (2010), recomiendan lo siguiente a la hora de hacer concesiones:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-3.col-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img_16.svg', alt='')
      .col-xl-7.col-lg-9.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 No exigir condiciones excesivas para no correr el riesgo de incumplir.
          li 
            i.fas.fa-play
            p.mb-1 Preguntarse:
        ul.lista-ul--color.ms-3.mb-0
          li 
            i.fas.fa-check
            p.mb-1 En qué puntos ceder.
          li 
            i.fas.fa-check
            p.mb-1 A cambio de qué se puede ceder. No se puede dar algo a cambio de nada.
          li 
            i.fas.fa-check
            p.mb-1 Límite de las posibles concesiones.
          li 
            i.fas.fa-check
            p.mb-1 Si se hacen varias concesiones, tenerlas en cuenta en su conjunto.
          li 
            i.fas.fa-check
            p.mb-1 No olvidar los límites (MAAN y ZOPA).
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 No creer nunca que la contraparte hará lo mismo que nosotros bajo las mismas circunstancias.
          li 
            i.fas.fa-play
            p.mb-1 Nunca discutir varios asuntos al mismo tiempo, es mejor uno a la vez.
          li 
            i.fas.fa-play
            p.mb-1 Decir las cosas de manera clara y concisa, sin entrar en la minuciosidad.
          li 
            i.fas.fa-play
            p.mb-1 Escuchar al otro sin interrumpirlo.
          li 
            i.fas.fa-play
            p.mb-1 Hacer sentir al otro que estamos haciendo un gran esfuerzo y que estamos en nuestro límite.

    p.mb-5(data-aos="fade-right") Al respecto, es importante analizar las siguientes posibles concesiones, según Bancomext (2010):

    .row.mb-4.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          p.pb-0.mb-0 <b>Tabla 1. </b> <em>Posibles concesiones</em>
        .tabla-b.color-acento-contenido.mb-5
          table
            thead
              tr.text-center.bg-header-table
                th Descuentos 
                th Servicios 
                th Promoción 
                th Tiempo 
                th Pago 
            tbody
              tr
                td 
                  p Por la compra de grandes volúmenes de producto. 
                  p Por la repetición de pedidos. 
                td 
                  p Capacitación al personal para dar mantenimiento a los equipos. 
                  p Servicio posventa sin costo.
                td 
                  p Entrega y difusión de material promocional. 
                td 
                  p Plazos de entrega más rígidos. 
                td 
                  p Mejores condiciones de pago (plazos) y crédito. 
                  p Comisiones más altas. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 ¿Qué hacer en caso de estancamiento?

    p.mb-5(data-aos="fade-right") Puchol, Núñez & Puchol (2010), plantean que en un proceso de negociación el estancamiento puede surgir en dos tipos de situaciones:

    .row.h-100.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-6.mb-4.mb-lg-2
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl4-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 El punto muerto
              p Sucede cuando una de las partes o ambas se niegan a negociar un aspecto en particular.
      .col-12.col-lg-6
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl4-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 La ruptura
              p Se presenta cuando alguno de los negociadores se niega a negociar la totalidad de temas a tratar.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-8.col-12.order-lg-1.order-2
        .row.justify-content-center.align-items-center.cajon.color-secundario.m-0.p-4.mb-4
          .col-lg-2.col-4.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_17.svg', alt='')
          .col-lg-10.col-12 
            p.mb-0 El estancamiento surge cuando no se progresa en la negociación.
        p.mb-4 Puchol, Núñez & Puchol (2010), hacen las siguientes recomendaciones para superar una situación de estancamiento:
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Dejar de lado el tema que produjo el estancamiento para avanzar en otros, luego se retomará.
          li 
            i.fas.fa-play
            p.mb-1 Continuar con el mismo tema.
          li 
            i.fas.fa-play
            p.mb-1 Solicitar a la contraparte explicar las razones por las cuales se niega a negociar el tema.
          li 
            i.fas.fa-play
            p.mb-1 Buscar soluciones alternativas.
          li 
            i.fas.fa-play
            p.mb-1 Suspender la sesión.
          li 
            i.fas.fa-play
            p.mb-1 Buscar un mediador para conciliar las diferencias.
      .col-lg-4.col-8.order-lg-2.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_16.png', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 ¿Quién debe hacer la primera oferta?
      .col-12
        p.mb-4(data-aos="fade-right") Puchol, Núñez & Puchol (2010), observan que quien esté mejor preparado en cuanto al conocimiento del producto y de la contraparte, debe hacer la primera oferta, con un ingrediente de agresividad que no la ofenda.
        p.mb-4(data-aos="fade-right") Al final de esta etapa, es importante mencionar las recomendaciones hechas por Bancomext (2010):
      .col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Dejar que la contraparte haga el primer movimiento, este será el límite superior.
          li 
            i.fas.fa-play
            p.mb-1 No debe mostrarse enfadado al primer escollo, hay que buscar equilibrio emocional.
          li 
            i.fas.fa-play
            p.mb-1 Normalmente, la oferta inicial no es aceptada, entonces, es el momento de revisar la estrategia inicial y renovarla con la nueva información recolectada acerca de la contraparte.
          li 
            i.fas.fa-play
            p.mb-1 Con la información recolectada, puede conocerse el motivo del rechazo a la primera oferta, ello implica trabajar en las objeciones planteadas; para consiguiente, se debe encontrar el #[em minimax] (los límites, mínimo y máximo) de la contraparte.
          li 
            i.fas.fa-play
            p.mb-1 Se debe identificar el motivo de la resistencia de la contraparte. Estos son algunos de los más frecuentes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-6.col-12.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_18.png', alt='')
      .col-lg-6.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Lógicas") 
            p.mb-2 Precios, entregas anticipadas.
          div(numero="2" titulo="Emocionales") 
            p.mb-2 Temas afectivos, percepciones personales y subjetivas.
          div(numero="3" titulo="Cambio") 
            p.mb-2 El cambio de entorno, lo desconocido.
          div(numero="4" titulo="Probando <em>minimax</em>") 
            p.mb-2 Está probando los límites mínimos y máximos.
          div(numero="5" titulo="Reglas organizacionales") 
            p.mb-2 Los presupuestos, las políticas o ciertas normas en muchas ocasiones se convierten en objeciones.
          div(numero="6" titulo="Reglas personales") 
            p.mb-2 Algunas personas tienen sus propias reglas y estas obstaculizan los procesos de negociación.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Es posible que en esta etapa se presenten el desacuerdo y el conflicto. Su manejo tiene dos variantes:

    .row.h-100.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-6.mb-4.mb-lg-2
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl5-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Correcto o adecuado
              p Si se hace de esta manera, se estrecharán las relaciones entre los negociadores.
      .col-12.col-lg-6
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl5-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Incorrecto o inadecuado
              p Las diferencias aumentan, al tratarse de esta manera.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-6.col-xl-5.col-12.mb-4.mb-lg-2
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Algunas características del conflicto son: 
        ul.lista-ul--color.ms-3.mb-0
          li 
            i.fas.fa-check
            p.mb-1 Denota diferentes puntos de vista.
          li 
            i.fas.fa-check
            p.mb-1 Saca a relucir los verdaderos deseos y necesidades.
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Estar preparados para cualquier reacción.
          li 
            i.fas.fa-play
            p.mb-1 Ser amable al escuchar y no ser efusivo.
        ul.lista-ul--color.lista-title.mt-4.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Etapa de acuerdos
        p.mb-4 De llegarse a un acuerdo, Bancomext (2010), recomienda:
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Asegurarse o confirmar que se ha entendido perfectamente.
          li 
            i.fas.fa-play
            p.mb-1 Fijar por escrito los acuerdos a los que se vaya llegando, para evitar posteriores malentendidos.
          li 
            i.fas.fa-play
            p.mb-1 Considerar que un acuerdo es adecuado cuando protege la satisfacción de ambas partes.
      .col-lg-6.col-xl-5.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_19.png', alt='')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Etapa 3. Después de la negociación

    p.mb-5(data-aos="fade-right") Al finalizar el proceso Puchol, Núñez & Puchol (2010) plantean seguir los siguientes pasos:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Hacer un compendio final

    p.mb-5(data-aos="fade-right") Es hacer una revisión general de los temas ya tratados y acordados, como de aquellos que se dejaron para el final. De este compendio se extraen los acuerdos y compromisos para cada una de las partes, Puchol, Núñez & Puchol (2010), recomiendan al respecto:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-b.p-4
          .col-lg-3.col-8.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_20.svg', alt='')
          .col-lg-9.col-12 
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-play
                p.mb-1 Verificar el cumplimiento de lo acordado.
              li 
                i.fas.fa-play
                p.mb-1 Revisar si lo acordado era lo que las dos partes esperaban.
              li 
                i.fas.fa-play
                p.mb-1 Verificar si las partes están satisfechas con los acuerdos.
              li 
                i.fas.fa-play
                p.mb-1 Verificar si se cumplen todos los términos y condiciones.
              li.mb-0
                i.fas.fa-play
                p.mb-1 Retomar algunos puntos de interés que fueron desestimados en el proceso.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Cerrar la negociación o la venta

    p.mb-5(data-aos="fade-right") Con un acuerdo favorable a las dos partes, sin dejar de lado que puede ocurrir que no se logre el acuerdo. Puchol, Núñez & Puchol (2010), argumentan que si se llega a un acuerdo es necesario:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_21.svg', alt='')
      .col-lg-8.col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Integrar todos los acuerdos en un documento contrato, que puede ser de compra-venta o de prestación de servicios.
          li 
            i.fas.fa-play
            p.mb-1 Supervisar la redacción del contrato y si es del caso contar con la participación de un abogado.
          li 
            i.fas.fa-play
            p.mb-1 Los términos empleados deben significar lo mismo para ambas partes.
          li 
            i.fas.fa-play
            p.mb-1 Prever sanciones a los incumplimientos que puedan ocurrir.
          li 
            i.fas.fa-play
            p.mb-1 Prever mecanismos de solución de posibles conflictos y la participación de mediadores, según el caso.
          li 
            i.fas.fa-play
            p.mb-1 Resaltar las ventajas que ha obtenido la otra parte y ser modestos con las propias.
        p.mt-4.mb-4 En caso de no lograr el acuerdo, los autores aconsejan:
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Dejar abierta la posibilidad de realizar otra negociación.
          li 
            i.fas.fa-play
            p.mb-1 Terminar la negociación de manera cordial, evitando los insultos causados por los desacuerdos.
          li 
            i.fas.fa-play
            p.mb-1 Conservar, dentro de lo posible, la relación personal.
      
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Aprender de las experiencias del proceso

    p.mb-5(data-aos="fade-right") Buscando evaluar la actuación propia y de la contraparte. Esto ayudará a mejorar desempeños futuros. En la evaluación Puchol, Núñez & Puchol (2010), proponen analizar:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-6.col-12.mb-lg-2
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Hacer una recopilación sobre los hechos ocurridos durante la negociación en cuanto a:
        ul.lista-ul--color.ms-3.mb-0
          li 
            i.fas.fa-check
            p.mb-1 Participantes de cada bando.
          li 
            i.fas.fa-check
            p.mb-1 Roles que desempeñaron.
          li 
            i.fas.fa-check
            p.mb-1 Duración del proceso.
          li 
            i.fas.fa-check
            p.mb-1 Temas de fácil y de difícil negociación.
          li 
            i.fas.fa-check
            p.mb-1 Estrategias y tácticas utilizadas por ambas partes.
          li 
            i.fas.fa-check
            p.mb-1 Percepción frente al clima vivido en la negociación.
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Analizar el desempeño propio en la negociación: 
        ul.lista-ul--color.ms-3.mb-0
          li 
            i.fas.fa-check
            p.mb-1 Logro de objetivos y magnitud de dicho logro.
          li 
            i.fas.fa-check
            p.mb-1 Errores cometidos.
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Oportunidades de mejora para el futuro:
        ul.lista-ul--color.ms-3.mb-0
          li 
            i.fas.fa-check
            p.mb-1 Aspectos actuales que vale la pena conservar. 
          li 
            i.fas.fa-check
            p.mb-1 Aspectos actuales que se deben cambiar.
      .col-lg-4.col-10.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img_22.svg', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Identificar los factores de riesgo
      .col-12
        p.mb-4(data-aos="fade-right") Puede ayudar a evitarlos y así escapar a futuros fracasos. Puchol, Núñez & Puchol (2010), plantean las principales causas de fracaso en un proceso de negociación:
      .col-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-play
            p.mb-1 Las creencias, valores o la personalidad de los negociadores pueden influir de manera decisiva en el proceso.
          li 
            i.fas.fa-play
            p.mb-1 Las concepciones éticas o morales de los negociadores pueden llevar a emitir juicios o adoptar conductas que pongan en riesgo la negociación.
          li 
            i.fas.fa-play
            p.mb-1 La realización de la negociación a través de medios electrónicos, impide hacer lectura de la comunicación no verbal de las partes, la cual ayuda a determinar las verdaderas motivaciones de las personas.
          li 
            i.fas.fa-play
            p.mb-1 La cultura de cada uno de los negociadores, hace que las personas juzguen comportamientos y actitudes desde su propio punto de vista, sin tener en cuenta la cultura de la persona que tienen en frente.
          li 
            i.fas.fa-play
            p.mb-1 Las diferentes restricciones que tienen las empresas en cuanto a sus políticas comerciales, de devoluciones y de cartera, tiempos y volúmenes de producción y de entrega, se constituyen en riesgos para la negociación.
          li 
            i.fas.fa-play
            p.mb-1 El riesgo de no permanencia en el mercado por parte de las empresas, puede afectar a ambas partes, debido a que esta puede traer consecuencias como ausencia de respaldo en los productos y servicios o el no pago de las obligaciones contraídas.
          li 
            i.fas.fa-play
            p.mb-1 Debido al cambio permanente en las condiciones de mercado, en cuanto a fluctuaciones de los precios de las materias primas y el valor de las divisas, las empresas deben hacer ofertas que tienen validez limitada en el tiempo, lo que en ocasiones puede representar un riesgo para la negociación.





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
