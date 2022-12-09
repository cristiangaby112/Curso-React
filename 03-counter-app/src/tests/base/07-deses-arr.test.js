import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en desestruturacion', () => {

  test('debe de retornar un string y un numero', () => {
    // const array = ['ABC', 123];
    
    const [letras, numeros] = retornaArreglo();

    console.log(typeof letras)
    console.log(typeof numeros)
    // expect(arr).toEqual(array)

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');

  });
})