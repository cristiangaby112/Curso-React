describe("Pruebas en el archivo demo.test.js", () => {
  test("deben de ser iguales los string", () => {
    // 1. Inicializacion
    const mensaje = "Hola Mundo";

    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2); // ===
  });
});
