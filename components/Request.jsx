'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

function Request({ repo }) {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error obteniendo datos:', error));
  }, [currentPage]);
  return (
    <div className="flex flex-col gap-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {characters.map((character) => (
          <Card key={character.id}>
            <li className="grid grid-cols-3 h-full">
              <div className="block w-full ">
                <img
                  className="object-cover w-full h-full"
                  src={character.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col p-5 col-span-2">
                <a className=" font-semibold text-primary" href={character.url}>
                  <span>{character.name}</span>
                </a>
                <span>
                  {character.status} - {character.gender}
                </span>
                <span>{character.species}</span>
              </div>
            </li>
          </Card>
        ))}
      </ul>
      <footer>
        <button
          className="text-primary w-fit bg-secondary rounded-lg px-4"
          onClick={handlePreviousPage}
        >
          {'<- Pagina Anterior'}
        </button>
        <button
          className="text-primary w-fit bg-secondary rounded-lg px-4"
          onClick={handleNextPage}
        >
          {'Siguiente pagina ->'}
        </button>
      </footer>
    </div>
  );
}

export default Request;
