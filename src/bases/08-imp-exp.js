import heroes from "../data/heroes";

export const findHeroeById = (id) => heroes.find(heroe => heroe.id ===id);

export const findHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);