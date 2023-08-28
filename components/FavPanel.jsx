'use client';
import { useCharacterContext } from '@/context/CharactersProvider';
import Card from './Card';

function FavPanel() {
  const { characters, toggleFavorite } = useCharacterContext();

  const favoriteCharacters = characters.filter(
    (character) => character.isFavorite
  );

  const charactersBySpecies = favoriteCharacters.reduce((acc, character) => {
    if (!acc[character.species]) {
      acc[character.species] = [];
    }
    acc[character.species].push(character);
    return acc;
  }, {});

  return (
    <div className="py-8 px-5">
      <h2 className="text-primary font-bold text-sm  md:text-lg mb-5">
        Personajes Favoritos por Especie
      </h2>
      {Object.keys(charactersBySpecies).map((species) => (
        <div key={species}>
          <h3 className="text-lg font-semibold mb-2 text-slate-100">
            {species}
          </h3>
          <ul className="flex flex-col gap-4 mb-4">
            {charactersBySpecies[species].map((character) => (
              <li key={character.id} className="inline-block">
                <Card data={character} onToggleFavorite={toggleFavorite} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default FavPanel;
