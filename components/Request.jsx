'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

import { useCharacterContext } from '@/context/CharactersProvider';

import Fav from '@/components/Fav';
import FavPanel from '@/components/FavPanel';

import { gsap } from 'gsap';

function Request() {
  const {
    characters,
    fetchCharacters,
    toggleFavorite,
    currentPage,
    setCurrentPage,
  } = useCharacterContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const tl = useRef();
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true }).from(menuRef.current, {
        xPercent: 100,
        duration: 0.3,
        ease: 'power1.out',
      });
    });
  }, []);

  useEffect(() => {
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col gap-5 py-5 lg:py-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {characters.map((character) => (
            <li key={character.id}>
              <Card data={character} onToggleFavorite={toggleFavorite} />
            </li>
          ))}
        </ul>
        <footer className="flex justify-center">
          <button onClick={handleNextPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="h-10 w-10 fill-primary hover:fill-secondary transition-all duration-200 rotate-180"
              viewBox="0 0 16 16"
            >
              {' '}
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />{' '}
            </svg>
          </button>
        </footer>
      </div>
      <div id="sidebar" className="">
        <div
          ref={menuRef}
          className="sh fixed overflow-x-visible whitespace-nowrap h-screen w-full sm:w-1/2 lg:w-1/3 top-0 right-0 bg-[#1b1b1b]/95 z-40"
        >
          <button
            className={`sh group bg-primary absolute ${
              isMenuOpen ? 'rotate-180 left-0' : ''
            } -left-16 top-1/2 p-3 rounded-s-full text-4xl z-50`}
            onClick={toggleMenu}
          >
            <Fav idle={true} />
          </button>
          <div className="h-full w-full overflow-y-scroll">
            <FavPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
