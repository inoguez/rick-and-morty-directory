import Request from '@/components/Request';
import Image from 'next/image';

// const getCharactersData = async (page) => {
//   const res = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${page}`
//   );
//   const data = await res.json();

//   return data.results;
// };

export default async function Home() {
  // console.log(characters);
  return (
    <>
      <header className="bg-secondary w-full py-7">
        <a className="" href="/">
          <h1 className="inline ml-5 text-lg font-semibold text-primary">
            Directorio Rick & Morty{' '}
          </h1>
        </a>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center px-5 md:px-24 bg-gray-50">
        <div id="sidebar">
          <button className="bg-primary absolute right-0 top-1/2 p-3 rounded-s-full text-4xl">
            X
          </button>
        </div>
        <section className=" w-full">
          <Request />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
