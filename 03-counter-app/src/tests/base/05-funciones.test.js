import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {


  test('getUser debe de retornar un objeto', () => {
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
  };

    const user = getUser();

    expect(user).toEqual(userTest);

  });

  // getUsuarioActivo debe retornar un objeto

  test('getUsuarioActivo debe retornar un objeto', () => {
    
    const nombre = 'Cristian';

    const userTest2 = {
      uid: 'ABC567',
      username: nombre
  }

    const user2 = getUsuarioActivo(nombre);

    expect(user2).toEqual(userTest2);

  });

})