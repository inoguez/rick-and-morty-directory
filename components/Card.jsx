'use client';

import { useCharacterContext } from '@/context/CharactersProvider';
import Fav from './Fav';
import Image from 'next/image';

function Card({ data, onToggleFavorite }) {
  const { id, name, image, url, isFavorite, gender, species, status } = data;

  const handleToggleFavorite = () => {
    onToggleFavorite(id);
  };

  return (
    <article className="card group relative bg-secondary rounded-2xl overflow-hidden h-full">
      <div className="grid grid-cols-3 h-full">
        <div className="block w-full ">
          <Image
            src={image}
            width={200}
            height={200}
            className="object-cover w-full h-full"
            alt={name}
            priority
          />
        </div>
        <div className="flex flex-row p-5 col-span-2 h-full justify-between">
          <div className="flex flex-col justify-between h-full">
            <h2 className=" font-semibold text-primary">
              <a href={url}>{name}</a>
            </h2>

            <div className="text-md font-light text-slate-400 flex items-center gap-2">
              <div
                className={`rounded-full ${
                  status === 'Alive'
                    ? 'bg-primary'
                    : status === 'Dead'
                    ? 'bg-red-700'
                    : 'bg-slate-500'
                } w-3 h-3 animate-pulse`}
              ></div>
              <span>
                {status} - {gender}
              </span>
            </div>

            <p className="text-third font-semibold">
              <span className="text-slate-400">Especie : </span>
              {species}
            </p>
          </div>
          <button
            className="mr-0 my-auto ml-auto h-fit flex justify-end items-center"
            onClick={handleToggleFavorite}
          >
            <Fav idle={false} isFavorite={isFavorite} />
          </button>
        </div>
      </div>
    </article>
  );
}
export default Card;
