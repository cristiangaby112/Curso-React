import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;

    const heroe = getHeroeById(id);
    const heroesData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroesData);

    // console.log(heroe);
  });

  test("debe de retornar un undefined si heroes id no existe", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    // console.log(heroe);
    expect(heroe).toBe(undefined);

  });

  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroe = getHeroesByOwner(owner);
    // console.log(heroe);
    const heroeData = heroe.filter((h) => h.owner === owner);

    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const heroe = getHeroesByOwner(owner);
    // console.log(heroe.length);
    // const heroeData = heroe.filter(h => h.owner === owner)

    expect(heroe.length).toBe(2);
  });

  test("debe de retornar un arreglo vacion si los owner no existe", () => {
    const owner = "SDSDS";
    // console.log(heroe.length);

    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toBe(0);
  });
});
