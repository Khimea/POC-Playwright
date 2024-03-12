Feature: Login page

  Scenario: Escenario 1
    Given Dirigirse a demoblaze website
    When Seleccionar producto Samsung galaxy s7
      * Añadir producto al carro
      * Volver al home
      * Seleccionar producto Sony xperia z5
      * Añadir producto al carro
      * Volver al cart
      * Crear orden de compra
      * Completar formulario compra
      * Comprar orden
    Then Compra exitosa