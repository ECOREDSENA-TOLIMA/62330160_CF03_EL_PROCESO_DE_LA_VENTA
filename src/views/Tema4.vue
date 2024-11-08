<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Contrato

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='')
      .col-12.col-lg-7
        p Los procesos de negociación se formalizan a través de la celebración de un contrato, el cual, más que un documento se convierte en el marco que regirá las relaciones comerciales entre las partes, puesto que, en él, se estipula todo lo pactado en la negociación.
        p Los contratos legales, sin importar de qué tipo sean, están regidos por instituciones gubernamentales en cada país. Por esa razón, toda esta temática recogerá citas de artículos consignados en el Código de Comercio o el Código Civil de Colombia.
        p.mb-0 El artículo 864 del Código de Comercio define el contrato como un acuerdo de dos o más partes para constituir, regular o extinguir una relación jurídica patrimonial y salvo estipulación en contrario, se entenderá celebrado en el lugar de residencia del proponente y en el momento en que este reciba la aceptación de la propuesta.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-4
          p A su vez, el artículo 1495 del Código civil dice: “el contrato o convenio como un acto por el cual una parte se obliga para con otra a dar, hacer o no hacer alguna cosa. Ese dar, hacer o no hacer son las prestaciones de la obligación”.
          p.mb-0 Es así como, dada la multiplicidad de objetivos que puede perseguir un contrato, un contrato puede también definirse como “una relación jurídico-negocial”. (Álvarez, 2012).

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Contrato comercial o de venta

    p.mb-5(data-aos="fade-right") No obstante, en su área de desempeño, la mayoría de los contratos que deberán establecer serán de tipo comercial, los cuales hacen referencia a “un acuerdo jurídico bilateral que tiene por objeto una acción de comercio” y su regulación se encuentra en los artículos 905 al 967 del Código de Comercio indicando:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Compraventa 
          p.text-center La compraventa es un contrato en que una de las partes se obliga a trasmitir la propiedad de una cosa y la otra a pagarla en dinero. El dinero que el comprador da por la cosa vendida se llama precio.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Precio
          p.text-center Cuando el precio consista parte en dinero y parte en otra cosa, se entenderá permuta si la cosa vale más que el dinero y venta en el caso contrario.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Títulos valores
          p.text-center Para los efectos de este artículo se equipararán a dinero los títulos valores de contenido crediticio y los créditos comunes representativos de dinero.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Requisitos de un contrato

    p.mb-5(data-aos="fade-right") Estos requisitos hacen referencia a los elementos que dan legitimidad a un contrato, sin los cuales el acto contractual pierde validez y, por consiguiente, se considera nulo. Encontrando:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_2.svg', alt='')
      .col-lg-9.col-12
        TabsA.color-acento-botones
          .tarjeta.color-primario.p-4(titulo="Dos partes capaces")
            p Que quienes lo firman tengan absoluta capacidad personal y jurídica para contraer dichas obligaciones. 
          .tarjeta.color-primario.p-4(titulo="La voluntad y consentimiento")
            h4 La voluntad y consentimiento
            p Hace referencia a un acto libre sin vicios o presiones que obliguen a una de las partes.
          .tarjeta.color-primario.p-4(titulo="Objeto")
            p Debe establecerse claramente la finalidad y legalidad del contrato, ya sea un objeto jurídico o material.
          .tarjeta.color-primario.p-4(titulo="Causa")
            p Se refiere a los motivos y razones que generan la necesidad del acuerdo (no es necesario que quede expresa en el documento).
          .tarjeta.color-primario.p-4(titulo="Formalidades")
            p Son los requisitos y estipulaciones para cada una de las partes, que deben quedar consagradas en el documento y que dan legitimidad al acuerdo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_3.png', alt='')
      .col-lg-7.col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Personas o partes que intervienen en un contrato
        p Inicialmente y por principio básico, las partes que participan en la celebración de un contrato comercial son el vendedor y el comprador, el primero es quien ofrece el producto o servicio y el segundo, quien lo recibe y paga por este.
        p.mb-4 No obstante, según el tipo de producto o servicio, la complejidad o garantías que requiera alguno de los negociadores, los nombres varían o aparecerán otros, tales como:
        .row
          .col-lg-6.col-12
            ul.lista-ul--color.lista-title-b.mb-3
              li.mb-0.py-1
                i.fas.fa-certificate
                h4.mb-0 En un contrato de seguro
            ul.lista-ul--color.ms-3.mb-0
              li 
                i.fas.fa-check
                p.mb-0 El asegurador.
              li 
                i.fas.fa-check
                p.mb-0 Tomador.
              li 
                i.fas.fa-check
                p.mb-0 El asegurado.
              li 
                i.fas.fa-check
                p.mb-0 El beneficiario.
          .col-lg-6.col-12
            ul.lista-ul--color.lista-title-b.mb-3
              li.mb-0.py-1
                i.fas.fa-certificate
                h4.mb-0 En un contrato de arriendo
            ul.lista-ul--color.ms-3.mb-0
              li 
                i.fas.fa-check
                p.mb-0  Arrendador.
              li 
                i.fas.fa-check
                p.mb-0  Arrendatario.
              li 
                i.fas.fa-check
                p.mb-0  Codeudor.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-xl-5.col-lg-6.col-12.mb-lg-2
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Características de los contratos mercantiles
        p.mb-4 Las principales características del contrato comercial son:
        .row
          .col-lg-6.col-12
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-play
                p.mb-1 Bilateral.
              li 
                i.fas.fa-play
                p.mb-1 Consensual.
              li 
                i.fas.fa-play
                p.mb-1 Oneroso.
              li 
                i.fas.fa-play
                p.mb-1 De ejecución instantánea.
          .col-lg-6.col-12
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-play
                p.mb-1 De libre discusión.
              li 
                i.fas.fa-play
                p.mb-1 Principal.
              li 
                i.fas.fa-play
                p.mb-1 Nominado.
      .col-xl-6.col-lg-5.col-10.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img_4.svg', alt='')

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Tipos de contratos comerciales

    p.mb-4(data-aos="fade-right") Adicional al contrato de compraventa, que es el más importante y utilizado en las empresas, a continuación, se hará referencia a otros contratos comerciales que deben conocerse y que tal vez, también se deban manejar y negociar.
    p.mb-5(data-aos="fade-right") Por lo anterior y de acuerdo con Álvarez (2012), los contratos pueden clasificarse desde diferentes puntos de vista, de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de su objeto

    p.mb-5(data-aos="fade-right") Se incluyen los siguientes:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.mb-4
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Contrato de comisión") 
            p.mb-4 El contrato de comisión es “una especie de mandato por el cual se encomienda a una persona que se dedica profesionalmente a ello la ejecución de uno o varios negocios en nombre propio, pero por cuenta ajena” (Artículo 1287 y s.s. Código de Comercio).
            p.mb-4 Las personas involucradas son:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 #[b Comisionista:] es la persona encargada de llevar a cabo uno o varios negocios por cuenta de alguien más que lo contrata, denominado comitente.
                li 
                  i.fas.fa-play
                  p.mb-1 #[b Comitente:] es quien encomienda al comisionista para realizar uno o varios negocios.
            p.mb-4 De acuerdo con el artículo 1288 del Código de Comercio, el comisionista acepta el trato con el comitente de la siguiente forma “se presumirá aceptada una comisión cuando se confiera a personas que públicamente ostenten el carácter de comisionistas, por el solo hecho de que no la rehúsen dentro de los tres días siguientes a aquel en que recibieron la propuesta respectiva”.
          div(numero="2" titulo="Contrato de agencia comercial") 
            p.mb-4 De acuerdo con el Código de Comercio: “un comerciante asume en forma independiente y estable el cargo de promover o explotar negocios en un determinado ramo y dentro de una zona específica como representante o agente de un empresario” (Artículo 1317 y s.s. Código de comercio).
            p.mb-4 Las personas involucradas son:
            .tarjeta.tarjeta-white.p-4
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-play
                  p.mb-1 #[b Agente:] la persona que recibe dicho encargo, este debe tener su propia empresa. Requiere de una relativa estabilidad.
                li 
                  i.fas.fa-play
                  p.mb-1 #[b El empresario:] quien encarga su negocio o servicios a un agente dentro de una zona específica.
          div(numero="3" titulo="Contrato de consignación o estimatorio") 
            p.mb-4 Dice el artículo 1377 del Código de Comercio “una persona llamada consignatario contrae la obligación de vender una mercancía de otra llamada consignante, previa fijación de un precio que aquel debe entregar a este”.
            p.mb-4 Según el mismo artículo, el consignatario puede vender la mercancía a mayor precio y conservar esa ganancia. Su compromiso es entregar el valor de la mercancía al consignatario, de esta forma “el consignatario tendrá derecho a hacer suyo el mayor valor de la venta de las mercancías y deberá pagar al consignante el precio de las que haya vendido o no le haya devuelto al vencimiento del plazo convenido o en su defecto, del que resultare de la costumbre.”
          div(numero="4" titulo="Contrato de fiducia") 
            p.mb-4 De acuerdo con el Código de Comercio, Libro cuarto título XI artículo 1226 de la Superintendencia Financiera de Colombia, el fideicomiso es “un negocio jurídico en que una persona llamada fiduciante o fideicomitente, transfiere uno o más bienes a otra llamada fiduciaria, quien se obliga administrarlos o a enajenarlos para cumplir una finalidad determinada por el constituyente a favor de este o de un tercero llamado beneficiario o fideicomisario”.
            p.mb-4 Es importante saber que “solo los establecimientos de crédito y las sociedades fiduciarias, especialmente autorizados por la Superintendencia Bancaria, podrán tener la calidad de fiduciarios”.
            p.mb-4 Dice el artículo 1228 que “la fiducia constituida entre vivos deberá constar en escritura pública registrada según la naturaleza de los bienes.” Por otra parte “la constituida mortis causa, deberá serlo por testamento”. No está prohibido hacer negocios fiduciarios secretos o mayores a 20 años.
          div(numero="5" titulo="Contrato de <em>leasing</em>") 
            p.mb-4 En Colombia, este tipo de contrato hace parte de los contratos atípicos, por eso no hay ninguna disposición legal que sirva para emitir un concepto jurídico. Los decretos 148 (1949) y 913 (1993) definen este contrato, pero no estipula sus reglas. Se trata de un contrato de arrendamiento en el cual existe la opción de compra.
            p.mb-4 Una de las definiciones más claras la ofrece el profesor Broseta (1985) “la existencia de una operación de financiación a mediano o largo plazo, mediante la cual quien necesita un bien (normalmente maquinaria o bienes de equipo) contrata con un intermediario financiero para que este lo adquiera del fabricante, con el fin de cederle su uso por tiempo determinado durante el pago de un canon”. Cuando el plazo del contrato se termina, el bien regresa a manos del propietario o de quien lo tenía, si es que decide adquirirlo (generalmente a través de un negocio a su favor).
            p.mb-4 Hay dos tipos de contratos #[em leasing]: financiero y operativo. El primero tiene como agentes a la compañía de financiamiento (“la #[em leasing]”) y una persona natural o jurídica (“el locatario”). Generalmente, aquí se ofrece desde el inicio la opción de obtener el bien a través de un acuerdo a favor del locatario. El #[em leasing] operativo, cuyos involucrados se denominan arrendador y arrendatario rara vez ofrece esta opción de adquirir el bien y si lo hace es con el precio que tiene el bien en el mercado.
          div(numero="6" titulo="Contrato de <em>factoring</em>") 
            p.mb-4 Este contrato también es atípico. De acuerdo con el Banco de la República, se define como: “el acuerdo por el cual, una empresa comercial denominada cliente, contrata con una entidad financiera denominada compañía de facturación, para que esta le preste un conjunto de servicios en los que se incluye principalmente la financiación de sus créditos con sus clientes, asumiendo el riesgo del cobro, a cambio de una contraprestación”. Al igual que el contrato de #[em leasing], no está reglamentado específicamente por ninguna ley en Colombia.
          div(numero="7" titulo="Contrato de franquicia") 
            p.mb-4 La RAE (2024) define la franquicia, como la “concesión de derechos de explotación de un producto, actividad o nombre comercial, otorgada por una empresa a una o varias personas en una zona determinada”.
            p.mb-4 De acuerdo con Paucar (2006), “El concepto de franquicia, que inicialmente fue visto como una exención para no pagar derechos por mercancías, se concreta hoy en términos de mercado como un sistema de comercialización de productos y servicios”. Entendiéndose que la franquicia es una forma muy apropiada de darle cabida a las pequeñas empresas, evadiendo de alguna forma el inmenso poder de las multinacionales que controlan los mercados.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_5.png', alt='')
      .col-lg-6.col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de los efectos que surte
        p.mb-4 Se dividen en:
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Contratos principales
        p Son los que surten efectos por sí mismos, sin recurrir a otros.
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Contratos accesorios
        p Son los contratos en los que sus efectos jurídicos dependen de la existencia de otro contrato.
          
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-6.col-12.order-lg-1.order-2
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista del nombre
        p.mb-4 Que le da la ley o la costumbre comercial, ellos son:
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Nominativos
        p Son los que tienen un nombre dado por las razones anteriores.
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Innominados
        p Son aquellos que no tienen nombre.
      .col-lg-4.col-10.order-lg-2.order-1.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_6.png', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de la forma
      .col-12
        p.mb-4(data-aos="fade-right") Debido a la poca formalidad que caracteriza a la actividad comercial, es necesario resaltar el carácter vinculante para las partes y de validez ante la ley que tiene cualquier tipo de contrato. Desde este punto de vista los contratos se dividen en:
        ul.lista-ul--color.lista-title-b.mb-4
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Formales
        p.mb-4(data-aos="fade-right") Son “aquellos a los que la ley les exige una forma determinada”. (Álvarez, 2012, p. 24). Los contratos formales se dividen a su vez en solemnes, que son los que la forma es requisito indispensable para garantizar su validez y producir los efectos contemplados en el Artículo 1500 del Código Civil, además la solemnidad puede acordarse entre las partes. Por otro lado, en los no solemnes solo se exige la forma en el momento de practicar una prueba en juicio.
        ul.lista-ul--color.lista-title-b.mb-4
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 No formales
        p.mb-5(data-aos="fade-right") Es aquel en que, a pesar de no seguirse la formalidad, el vínculo no deja de surgir por la ausencia de la misma.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-3.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_7.png', alt='')
      .col-lg-7.col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de la obligación para las partes
        p.mb-4 Se dividen en:
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Contratos limitados o condicionales
        p Son aquellos en los que las obligaciones que genera se sujetan a una condición suspensiva o resolutoria.
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Contratos absolutos
        p Son aquellos en los que su eficiencia no está sometida a una condición.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista del acuerdo o consentimiento entre las partes

    p.mb-5(data-aos="fade-right") Se dividen en:

    .row.h-100.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-6.mb-4.mb-lg-2
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/sl2-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Consensuales
              p Son los que se perfeccionan con el solo consentimiento de las partes. Al respecto, el Artículo 1500 del Código Civil prescribe la naturaleza consensual de los contratos mercantiles.
      .col-12.col-lg-6
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/sl2-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Reales
              p Son aquellos que para su perfeccionamiento requieren de la tradición de la cosa, en consonancia con el Artículo 1500 del Código Civil (Álvarez, 2012).

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista del tipo de las obligaciones que consagra

    p.mb-5(data-aos="fade-right") Se dividen en:
    
    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.col-12.tarjeta.color-primario-a1.p-5
        .row.justify-content-center
          .col-6.col-lg-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/sl1-a.svg', alt='')
          .col-12.col-lg-10
            h4.text-center Onerosos
            p.mb-0 Es la característica natural de los contratos mercantiles, en ellos se “tiene por objeto la utilidad de las dos partes, gravándose cada uno en beneficio del otro” (Álvarez, 2012, p. 24). Sin embargo, también se deben tener en cuenta los contratos gratuitos o de beneficencia.
      .col-lg.col-12.tarjeta.color-primario-a3.p-5
        .row.justify-content-center
          .col-6.col-lg-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/sl1-b.svg', alt='')
          .col-12.col-lg-10
            h4.text-center Gratuitos o de beneficencia
            p.mb-0 Son aquellos en los que una de las partes acuerda una prestación sin exigir nada a cambio. Se da en el caso de “asegurar el cumplimiento o para alcanzar el objeto de un contrato oneroso”. (Álvarez, 2012, p. 24).

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_8.png', alt='')
      .col-lg-6.col-12
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de su aplicación en el tiempo
        p.mb-4 Se dividen en:
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Instantáneos
        p Son los contratos que se cumplen en un solo instante. 
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Sucesivos o de ejecución diferida
        p Son aquellos en los que su prestación puede ser cumplida de manera periódica.
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de su tipicidad
        p.mb-4 Se dividen en:
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Típicos
        p Son los descritos específicamente por la ley o reconocidos a nivel social.
        ul.lista-ul--color.lista-title-b.mb-3
          li.mb-0.py-1
            i.fas.fa-certificate
            h4.mb-0 Atípicos
        p Adolecen de descripción legal o normativa.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Contrato desde el punto de vista de la parte objeto de la obligación
    
    p.mb-4(data-aos="fade-down") Se dividen en:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              h4 Unilaterales
              p En ellos la obligación recae solo en una de las partes.
            .col-lg-6.order-lg-2.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/slid-1a.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/slid-1b.png', alt='')
            .col-lg-6.text-start
              h4 Bilaterales
              p Ambas partes se obligan de manera recíproca. 
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              h4 Plurilaterales
              p Se obligan a cumplir de objeto más de dos partes.
            .col-lg-6.order-lg-2.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/slid-1c.png', alt='')

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Elementos de un contrato comercial

    p.mb-4(data-aos="fade-down") Dentro del contrato escrito existe un conjunto de disposiciones que se denominan, cláusulas. La RAE (2024) define ‘cláusula’ como: “Cada una de las disposiciones de un contrato, tratado, testamento o cualquier otro documento análogo, público o privado”. En tal sentido, las principales cláusulas de un contrato comercial son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.color-primario-b.p-4
          .col-lg-3.col-6.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img_11.svg', alt='')
          .col-lg-5.col-12 
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 El objeto del contrato.
              li 
                i.fas.fa-play
                p.mb-1 El precio de las mercancías.
              li 
                i.fas.fa-play
                p.mb-1 La forma de envío de las mercancías.
              li 
                i.fas.fa-play
                p.mb-1 Duración.
              li 
                i.fas.fa-play
                p.mb-1 El momento y la forma de pago.
              li 
                i.fas.fa-play
                p.mb-1 El momento y lugar de entrega de las mercancías.
              li 
                i.fas.fa-play
                p.mb-1 Entrega de los documentos.
              li 
                i.fas.fa-play
                p.mb-1 Certificaciones de productos o servicios.
              li 
                i.fas.fa-play
                p.mb-1 Responsabilidad sobre el producto.
          .col-lg-4.col-12 
            ul.lista-ul--color
              li 
                i.fas.fa-play
                p.mb-1 Patentes y marcas.
              li 
                i.fas.fa-play
                p.mb-1 Vigencia del contrato.
              li 
                i.fas.fa-play
                p.mb-1 Rescisión por incumplimiento.
              li 
                i.fas.fa-play
                p.mb-1 Legislación aplicable.
              li 
                i.fas.fa-play
                p.mb-1 Solución de controversias.
              li 
                i.fas.fa-play
                p.mb-1 Reformas del contrato.
              li 
                i.fas.fa-play
                p.mb-1 Confidencialidad.
              li 
                i.fas.fa-play
                p.mb-1 Cesión.
              li 
                i.fas.fa-play
                p.mb-1 Terminación.

    p.mb-4(data-aos="fade-down") En general, las cláusulas son bastante explícitas en cuanto a su contenido; para ello, es importante que la redacción sea clara, coherente y lo más detallada posible, para evitar vicios y vacíos que afecten el cumplimiento por alguna de las partes. En el mercado, a través de manuales impresos, instructivos de algunas entidades y hasta en plataformas web, existe multiplicidad de formatos. Si los pequeños empresarios no cuentan con un abogado o experto comercial, pueden utilizar estos formatos con la respectiva adecuación a sus productos, servicios o necesidades puntuales.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Formato de un contrato de compraventa

    .tarjeta.color-acento-contenido-a.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0.p-lg-5
          img(src="@/assets/curso/temas/tema4/img_10.svg")
        .col-md.col-lg-7
          .titulo-segundo.color-acento-contenido
            h3 Formatos de contratos de compraventa
          p.mb-4 A continuación, se presentan formatos de contratos de compraventa que cumplen con lo dispuesto en los artículos 525 a 533 del Código de Comercio. Son sencillos de diligenciar y de fácil comprensión. Se pueden utilizar como guía, tanto para comprender las disposiciones o contenido de cada una de las cláusulas como para diseñar los contratos que se requieran para los proyectos. Estos se harán más complejos, agregándole más cláusulas, ya sea por la naturaleza del producto o servicio, por las garantías que requieran las partes o las disposiciones estatutarias de las empresas o legales del país. 
          
          a.boton.color-acento-botones(href="https://www.lawdepot.com/mx/contrato-de-compraventa/?webuser_data_id=187470605" target="_blank")
            span Enlace web
            i.fas.fa-file-code
    
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Contrato civil de prestación de servicios

    p.mb-4(data-aos="fade-down") Debido a la dinámica del mercado colombiano y, más específicamente, a la necesidad de generar empleo y facilitar las relaciones para algunos trabajos y servicios temporales, existe un tipo de contrato ampliamente conocido y de uso frecuente, que se denomina contrato de prestación de servicios. 
    p.mb-5(data-aos="fade-down") Se trata de un contrato civil o comercial, donde una persona, natural o jurídica, se compromete u obliga a brindar a otra persona o empresa, sus servicios, ya sea profesionales u operativos, en un tiempo determinado y por un valor específico. No se trata de un contrato de trabajo, sino de naturaleza civil o de obligación comercial, ya que se utiliza también para la contratación de servicios específicos y adquisición de algunos productos ligados a un servicio personal.

    .tarjeta.color-acento-contenido-a.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/resume.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Contrato de prestación de servicios
              p Si desea conocer un formato de contrato de prestación de servicios, se invita a que descargue el siguiente documento que relaciona el Ministerio de Justicia y Derecho.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Contrato_de_prestacion_de_servicios_Contractual.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    




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
