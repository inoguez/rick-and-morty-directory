'use client';
import React, { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (page) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      const characterData = data.results.map((character) => ({
        ...character,
        isFavorite: false,
      }));
      setCharacters((prevCharacters) => [...prevCharacters, ...characterData]);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
    }
  };

  const toggleFavorite = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id
          ? { ...character, isFavorite: !character.isFavorite }
          : character
      )
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        fetchCharacters,
        toggleFavorite,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  return useContext(CharacterContext);
}
