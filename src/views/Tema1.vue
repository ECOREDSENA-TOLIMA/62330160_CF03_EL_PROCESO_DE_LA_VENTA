<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Negociación

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-2.col-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img_2.svg', alt='')
      .col-lg-10.col-12
        p.mb-2 De manera general, la palabra negociación viene del latín Negotiari, que significa comerciar o realizar una transacción. Sin embargo, como anotan Rodríguez & Ramos (1998), se ha ampliado el uso de la palabra para hacerla más incluyente y así utilizarla en todos los ámbitos en que se desempeña el ser humano, de manera que se piense como un “…proceso de tratar algún asunto, con el fin de llegar a una solución satisfactoria”.
        p.mb-2 Los autores, también afirman que “…la negociación no es un acto sino un proceso…”, mediante el cual el hombre utiliza argumentos y motivaciones para dirimir sus problemas de una manera pacífica o civilizada; es decir, sin utilizar la violencia.

    .bloque-texto-g.bloque-texto-g.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A su vez, los procesos de globalización y de internacionalización de las economías, así como los procesos de negociación, permiten definiciones más amplias del término, tal como la que propone el Banco Nacional de Comercio Exterior de México - Bancomext, que en su publicación Técnicas de Negociación Internacional, realizada en (2001), plantea que la negociación es “…el proceso mediante el cual, las partes involucradas - donde una posee o puede hacer algo que la otra desea y viceversa - se comunican recíprocamente, con el objetivo de lograr un acuerdo que brinde las bases para un correcto entendimiento que ayude a la consecución de las necesidades y, por lo tanto, la satisfacción de las partes interesadas”.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Integrantes de una negociación
    
    p.mb-5(data-aos="fade-right") Un proceso de negociación tiene unos integrantes, que según Bancomext (2001), son: 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1A.svg', alt='')
          .tarjeta.color-morado.p-3(x="87%" y="23%" numero="+")
            p.mb-0 Es quien representa a la empresa que demanda o busca un producto o servicio.
          .tarjeta.color-morado.p-3(x="87%" y="50%" numero="+")
            p.mb-0 Es quien representa a la empresa que ofrece un producto o servicio.
            p.mb-0 Ovejero (2004), también incluye a los expertos, que son asesores, mediadores o árbitros.
          .tarjeta.color-morado.p-3(x="87%" y="77%" numero="+")
            p.mb-0 Algunos autores no incluyen este aspecto por no referirse a una persona, pero es importante conocerlo. Para asuntos comerciales, es el producto o servicio sujeto de la transacción. En otros tipos de negociaciones, como las de tipo laboral o político, se negocian condiciones para las personas o voluntades entre las partes.
      .col-12.d-block.d-lg-none
        figure
          img(src='@/assets/curso/temas/tema1/info-1B.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Acuerdos comerciales
    
    p.mb-4(data-aos="fade-right") Por tratarse de una negociación de tipo comercial, el objetivo final será llegar a un acuerdo comercial, que no es más que un convenio celebrado por dos o más partes que se ponen de acuerdo en temas de interés para todos. Los acuerdos comerciales se utilizan para formalizar una transacción comercial, que puede ser una venta de un producto o un servicio, una permuta o un arrendamiento de un bien.
    p.mb-5(data-aos="fade-right") Los acuerdos comerciales más utilizados son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris-b")
          .row(titulo="La concesión")
            .col-12.mb-4.mb-md-0
              p Es un acuerdo mediante el cual una empresa que es dueña de una marca reconocida y posicionada, concede el uso de la misma a otra empresa, llamada concesionaria, en un mercado de interés para la primera. En contraprestación, la empresa concesionaria deberá cumplir ciertas condiciones de volúmenes de compra, de exclusividad en la venta del producto o por lo menos en su categoría y de aportes por sus utilidades que fijará el dueño de la marca.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/sl1-a.png', alt='')
          .row(titulo="La franquicia")
            .col-12.mb-4.mb-md-0
              p Es un acuerdo comercial en el que una empresa llamada #[b franquiciante], concede a otra llamada #[b franquiciado], el derecho de explotar en un sitio determinado el uso de su marca, sus conocimientos, su imagen y sus productos. En contraprestación, el franquiciado deberá pagar por estos derechos, un pago inicial y un porcentaje de sus ventas.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/sl1-b.png', alt='')
          .row(titulo="El <em>leasing</em> o arrendamiento financiero")
            .col-12.mb-4.mb-md-0
              p Es un acuerdo mediante el cual una entidad financiera que actúa como arrendador, adquiere un producto, que puede ser un bien inmueble o una máquina o vehículo de transporte para ser arrendado a una persona natural o jurídica, quien, como arrendatario, se compromete a pagar un canon o tarifa de arrendamiento mensual por un determinado lapso de tiempo y al final tendrá opción de compra del bien. La ventaja que tiene este acuerdo es que el arrendatario no tiene que realizar la inversión para adquirir el bien y, además, como el arrendamiento es un gasto, lo puede deducir de su pago de impuesto sobre la renta.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/sl1-c.png', alt='')
          .row(titulo="El acuerdo de depósito")
            .col-12.mb-4.mb-md-0
              p Es un arreglo mediante el cual una persona natural o jurídica, llamada depositante, quien posee una mercancía de valor y necesita dinero en efectivo, solicita a una entidad financiera, llamada depositaria dicho dinero por un período de tiempo determinado, la cual le exigirá el depósito de las mercancías hasta que el depositante devuelva el dinero prestado. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/sl1-d.png', alt='')
          .row(titulo="Un acuerdo de comisión")
            .col-12.mb-4.mb-md-0
              p Es aquel en que una persona natural o jurídica interesada en comprar o vender un bien, acuerda con un tercero la consecución, según sea el caso, de un vendedor o un comprador para dicho bien, a cambio de un porcentaje sobre el valor de la venta o la compra llamado comisión.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/sl1-e.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Dimensiones de la negociación

    p.mb-5(data-aos="fade-right") Scott (1991), plantea que la negociación tiene tres dimensiones:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/sl2-a.png", alt="")
          .crd_hover_txt--body.w-100
            h5.mb-3 El contenido o los temas por discutir
            p.mb-0 Dependen de los intereses de los negociadores.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/sl2-b.png", alt="")
          .crd_hover_txt--body.w-100
            h5.mb-3 Los procedimientos
            p.mb-0 Son los diferentes componentes de la negociación, como son la planeación, el control de las reuniones, la preparación de la agenda, la organización del espacio físico, los asuntos a negociar y el ritmo del proceso.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/sl2-c.png", alt="")
          .crd_hover_txt--body.w-100
            h5.mb-3 La interacción personal
            p.mb-0 Se da entre las partes que se disponen a negociar. Ello comprende la influencia que trata de ejercer cada uno en el otro y sus reacciones.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Aspectos a negociar

    p.mb-5(data-aos="fade-right") Los aspectos a negociar, según Bancomext (2001), son: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="El ambiente en que ambos actúan") 
            p.mb-4 Es importante por su impacto en el proceso, ya que representa el contexto en que se realiza el mismo.
            figure
              img(src="@/assets/curso/temas/tema1/sl3-a.png", alt="")
          div(numero="2" titulo="Objetivos de la negociación") 
            p.mb-4 Es lo que persigue cada parte dentro del proceso. Lo más importante es que coincidan con los objetivos de la organización. Debe tenerse muy en cuenta:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul.mb-0
                li 
                  i.fas.fa-check
                  p.mb-2 Consolidar una relación basada en la confianza. 
                li 
                  i.fas.fa-check
                  p.mb-2 Lograr condiciones para que ambas partes obtengan beneficios.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-2 Realizar negocios de manera constante, es decir, a largo plazo.
            figure
              img(src="@/assets/curso/temas/tema1/sl3-b.png", alt="")


    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-8.order-lg-1.order-2
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Temas a negociar

        p.mb-4(data-aos="fade-right") Bancomext (2001), también plantea que los temas más comunes a tratar son:

        ul.lista-ul--color
          li 
            i.fas.fa-play
            p.mb-1 El precio de los bienes o servicios a negociar.
          li 
            i.fas.fa-play
            p.mb-1 Especificaciones del producto o servicio.
          li 
            i.fas.fa-play
            p.mb-1 Cantidades a transar.
          li 
            i.fas.fa-play
            p.mb-1 Condiciones de entrega (lugar y plazo). 
          li 
            i.fas.fa-play
            p.mb-1 Servicio de apoyo requerido.
          li 
            i.fas.fa-play
            p.mb-1 Forma de pago.
          li 
            i.fas.fa-play
            p.mb-1 Plazos para el pago. 
          li 
            i.fas.fa-play
            p.mb-1 Monto y referencia (nacional o internacional) de la tasa de interés de financiación si es del caso. 
          li 
            i.fas.fa-play
            p.mb-1 Descuentos por volumen o por pronto pago. 
          li 
            i.fas.fa-play
            p.mb-1 Pago de impuestos, seguros, transporte y manipulación de mercancías.
          li 
            i.fas.fa-play
            p.mb-1 Pago de derechos arancelarios. 
          li 
            i.fas.fa-play
            p.mb-1 Divisa utilizada para la transacción comercial, en caso de ser una transacción internacional.
          li 
            i.fas.fa-play
            p.mb-1 Tipo de acuerdo comercial a utilizar. 
          li 
            i.fas.fa-play
            p.mb-1 Entidades que servirán para el arbitraje en caso de conflictos entre las partes. En este orden, se pueden mencionar: entidades de derecho privado como las Cámaras de Comercio nacionales e internacionales, agremiaciones o bancos y entidades de derecho público, como ministerios, embajadas o consulados. 
          li 
            i.fas.fa-play
            p.mb-1 Instrumentos para garantizar el pago, tales como cartas de crédito, pagarés, letras de cambio o pólizas de cumplimiento o estabilidad.
      .col-8.col-lg-4.order-lg-2.order-1.mb-5.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Tipos de negociación

    p.mb-5(data-aos="fade-right") Existen múltiples maneras de ver los diferentes tipos de negociación; por ello, a continuación, se buscará adaptar la clasificación que hacen Rodríguez & Ramos (1998), quienes plantean ocho categorías y lo que representan: 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-2A.svg', alt='')
          .tarjeta.color-morado.p-3(x="12%" y="46%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Negociación intrapersonal. (Reflexión personal). 
              li 
                i.fas.fa-angle-right
                | Negociación interpersonal. (Dos o más personas). 
              li 
                i.fas.fa-angle-right
                | Negociación organizacional. (Dentro de una organización). 
              li 
                i.fas.fa-angle-right
                | Negociación interorganizacional. (Entre dos o más organizaciones). 
              li 
                i.fas.fa-angle-right
                | Negociación internacional. (Entre estados u organizaciones de diferentes naciones o países). 
          .tarjeta.color-morado.p-3(x="31.5%" y="46%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | De individuos con individuos. 
              li 
                i.fas.fa-angle-right
                | De individuos con grupos. 
              li 
                i.fas.fa-angle-right
                | De grupos con grupos. 
          .tarjeta.color-morado.p-3(x="51.5%" y="46%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Negociaciones directas. 
              li 
                i.fas.fa-angle-right
                | Negociaciones indirectas (a través de mediadores). 
          .tarjeta.color-morado.p-3(x="71.5%" y="46%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Comerciales. 
              li 
                i.fas.fa-angle-right
                | Políticas. 
              li 
                i.fas.fa-angle-right
                | Religiosas.
              li 
                i.fas.fa-angle-right
                | Técnicas. 
              li 
                i.fas.fa-angle-right
                | Afectivas.
          .tarjeta.color-morado.p-3(x="12%" y="92%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Horizontales. 
              li 
                i.fas.fa-angle-right
                | Verticales. 
              li 
                i.fas.fa-angle-right
                | Oblicuas. 
          .tarjeta.color-morado.p-3(x="31.5%" y="92%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Amistosas o polémicas. 
              li 
                i.fas.fa-angle-right
                | Abiertas y sinceras o manipuladas. 
          .tarjeta.color-morado.p-3(x="51.5%" y="92%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Libres o forzadas. 
              li 
                i.fas.fa-angle-right
                | Morales o legales. 
          .tarjeta.color-morado.p-3(x="71.5%" y="92%" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Cara a cara
              li 
                i.fas.fa-angle-right
                | Telefónico. 
              li 
                i.fas.fa-angle-right
                | Epistolar. 
              li 
                i.fas.fa-angle-right
                | A base de representantes. 
              li 
                i.fas.fa-angle-right
                | Vía internet. 
      .col-12.d-block.d-lg-none
        figure
          img(src='@/assets/curso/temas/tema1/info-2B.svg', alt='')
      
    p.mb-5(data-aos="fade-right") Los procesos de negociación en que estos actores interactúan: fabricantes, proveedores de servicios e intermediarios comerciales, tienen que ver con las transacciones de compra y venta de productos y servicios, así como la realización de alianzas comerciales. Estas alianzas están destinadas a conformar canales de distribución para los productos o servicios fabricados o prestados. También es importante tomar la clasificación que hacen Puchol, Núñez & Puchol (2010), según las intenciones de los actores que participan:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fondo-5.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/tema1/sl2-a.svg' alt='')
        h4 Negociación distributiva
        p Implica que cada una de las partes se queda con la mitad, pero supone que uno gana y otro pierde.
      .tarjeta.fondo-5.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/tema1/sl2-b.svg' alt='')
        h4 Negociación integrativa 
        p Cuando las partes se ponen de acuerdo para colaborar en el desarrollo o el aumento de lo negociado, para que al final ambos puedan ganar. 
      .tarjeta.fondo-5.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/tema1/sl2-c.svg' alt='')
        h4 Negociación cooperativa
        p Cuando las partes se ponen de acuerdo para obtener condiciones que individualmente no se obtienen. 
      .tarjeta.fondo-5.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/tema1/sl2-d.svg' alt='')
        h4 Negociación punitiva
        p Se presenta cuando una de las partes le causa algún tipo de daño a la otra; de esta manera, el infractor le garantiza al afectado que cesará en su conducta si el último accede a algo que el infractor le pide. 
      .tarjeta.fondo-5.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/tema1/sl2-e.svg' alt='')
        h4 Negociación multifase
        p Cuando después de un primer acuerdo, se hacen otros nuevos en el futuro.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Estilos de negociación

    p.mb-5(data-aos="fade-right") Hablar de estilos de negociación se ha tornado polémico y, por lo tanto, las diferentes visiones han enriquecido el conocimiento al respecto. Quien identifica primero unos estilos de negociación es Scott (1991), según él, en la práctica, pueden distinguirse tres posibles estilos de negociación, de acuerdo a quién negocia: 

    .row.h-100.justify-content-center.mb-5
      .col-lg-4.col-12.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/sl4-a.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center El luchador
              p Quien tiene una alta orientación al logro. 
      .col-lg-4.col-12.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/sl4-b.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center El colaborador
              p Quien pone todo al descubierto, confronta opiniones y logra acuerdos.
      .col-lg-4.col-12.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/sl4-c.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center El compromisario
              p Quien siempre busca un compromiso al hacer tratos.

    p.mb-4(data-aos="fade-right") Esta clasificación se basa en la relación entre la orientación al logro y el interés por las personas; es decir, dos de los rasgos de personalidad que tiene un líder, en este caso un negociador.

    p.mb-5(data-aos="fade-right") Estos estilos dan origen a las dos formas de negociación más conocidas, que ya se mencionaron en los tipos de negociación, pero por su importancia se tratarán en este apartado: la negociación competitiva y la cooperativa. Estas dos formas pueden verse también como posiciones que suelen adoptarse por cada una de las partes. Sus principales características según Ovejero (2004), son las siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Negociaciones cooperativas vs competitivas</i>
        figure
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='Figura que relaciona los aspectos que caracterizan a una negociación cooperativa vs una negociación competitiva; destacando que siempre en lo competitivo prima el beneficio propio y no se piensa en el otro.')  
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='Figura que relaciona los aspectos que caracterizan a una negociación cooperativa vs una negociación competitiva; destacando que siempre en lo competitivo prima el beneficio propio y no se piensa en el otro.') 
      
    p.mb-5(data-aos="fade-right") El mismo autor aclara que “…la negociación tal vez sea el proceso psicosociológico más complejo en las relaciones humanas, dada la mezcla de cooperación y competición que se necesita”. Esto indica que la negociación competitiva y cooperativa son más bien complementarias y no excluyentes entre sí. Justamente dice: “Un análisis más profundo muestra que los elementos competitivos y cooperativos están inextricablemente entrelazados. En la práctica no pueden separarse.” 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img_4.png', alt='')
      .col-lg-5.col-12
        p Esta visión lleva además a pensar que el objetivo fundamental de la negociación es que todos ganen y nadie pierda, lo que puede sonar bastante idealista, pero si se le ve desde el punto de vista de la creación de valor, como mencionan Lax & Sebenius (1991), citados en Ovejero, (2004) “…la esencia de la negociación está en ampliar la tarta, en perseguir ganancias conjuntas”.
        p Una posición contraria frente a los estilos de negociación es la adoptada por Rodríguez & Ramos (1998), quienes también se apoyan en las teorías del liderazgo para entender la negociación, pero utilizan concretamente la teoría del liderazgo situacional. De esta manera, plantean que un buen líder o negociador no se caracteriza por su estilo de negociación, sino más bien por las diferentes conductas específicas que utiliza, de acuerdo con la situación que afronta.

    p.mb-5(data-aos="fade-right") En consecuencia, Rodríguez & Ramos (1998) ilustran siete conductas que corresponden a los mismos valores o motivaciones del negociador:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2.d-none.d-sm-none.d-lg-block
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Valor o motivo dinámico del negociador</i>
        figure
          img(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='Figura que relaciona el valor o motivo dinámico del negociador, donde por cada motivación, se representa una conducta.')  
      .col-12.mb-4.mb-lg-2.d-block.d-lg-none
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Valor_o_motivo_dinamico_del_negociador.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Motivaciones y conductas del negociador

    p.mb-5(data-aos="fade-right") Lo anterior sirve como preámbulo a la siguiente temática.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Personalidad del negociador

    p.mb-5(data-aos="fade-right") Rodríguez & Ramos (1998) plantean que, en gran medida, el éxito de la negociación se nutre de la personalidad del negociador y de sus conductas durante el proceso. Por consiguiente, un negociador debe caracterizarse por lo que se conoce comúnmente como madurez psicológica, la cual implica los siguientes aspectos, dentro de los rasgos de personalidad: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img_5.png', alt='')
      .col-lg-6.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-play
            p.mb-0 Autocontrol: manejar sus emociones. 
          li 
            i.fas.fa-play
            p.mb-0 Disposición hacia la autocrítica: reconocer sus errores para mejorar. 
          li 
            i.fas.fa-play
            p.mb-0 Empatía. 
          li 
            i.fas.fa-play
            p.mb-0 Superación del egocentrismo. 
          li 
            i.fas.fa-play
            p.mb-0 Tolerancia al fracaso: aceptar la realidad.
          li 
            i.fas.fa-play
            p.mb-0 Asertividad: decir cualquier cosa sin agresividad.
          li 
            i.fas.fa-play
            p.mb-0 Honestidad. 
          li 
            i.fas.fa-play
            p.mb-0 Sinceridad. 
          li 
            i.fas.fa-play
            p.mb-0 Lealtad. 
          li 
            i.fas.fa-play
            p.mb-0 Legalidad. 
          li 
            i.fas.fa-play
            p.mb-0 Respeto a los derechos de los demás. 
          li 
            i.fas.fa-play
            p.mb-0 Consideración de los valores de los demás.
          li 
            i.fas.fa-play
            p.mb-0 Apertura a los demás: confianza en ellos. 
          li 
            i.fas.fa-play
            p.mb-0 Flexibilidad.
          li 
            i.fas.fa-play
            p.mb-0 Claridad de ideas: es comprender de manera adecuada una situación, luego de observar de manera cuidadosa las situaciones, analizar y sintetizar. 
          li 
            i.fas.fa-play
            p.mb-0 Creatividad.

    .row.fondo-1.px-md-5.px-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Conductas de un buen negociador
      .col-12
        p.mb-5(data-aos="fade-right") Basado en estos rasgos de personalidad, según Rodríguez & Ramos (1998), un buen negociador debe adoptar las siguientes conductas: 
      .col-12
        ul.lista-ul--color
          li 
            i.fas.fa-play
            p.mb-0 “Se centra en los intereses, no en las posiciones…”. Si el negociador hace caso omiso de la posición de su contraparte, puede determinar sus verdaderos intereses.
          li 
            i.fas.fa-play
            p.mb-0 “Distingue bien entre las personas y los problemas…”. Es duro con el problema, pero suave con la persona, no entra en confrontación.
          li 
            i.fas.fa-play
            p.mb-0 “Manifiesta y explícita las emociones…”. Entiende que estas son fundamentales para el proceso. 
          li 
            i.fas.fa-play
            p.mb-0 “Evita el dogmatismo…”, para no polemizar.
          li 
            i.fas.fa-play
            p.mb-0 “Retroalimenta…”. Con ello muestra respeto por la contraparte. 
          li 
            i.fas.fa-play
            p.mb-0 “Evita hacer juicios de valor”. Nunca se conoce bien a una persona.
          li 
            i.fas.fa-play
            p.mb-0 “Observa mucho y objetivamente…”, para estar atento al lenguaje no verbal, el cual muestra los sentimientos. 
          li 
            i.fas.fa-play
            p.mb-0 “Escucha activamente”. Importante para conocer las necesidades.
          li 
            i.fas.fa-play
            p.mb-0 “Pregunta”. Esto sirve para obtener información. 
          li 
            i.fas.fa-play
            p.mb-0 “Recurre al dramatismo”, para persuadir.
          li 
            i.fas.fa-play
            p.mb-0 “Utiliza mucho el método de la lluvia de ideas”. Para generar mayores alternativas.
          li 
            i.fas.fa-play
            p.mb-0 “Es persistente y tenaz sin obstinación”. No hay que darse por vencido.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
