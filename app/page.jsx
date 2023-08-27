import Request from '@/components/Request';
import { CharactersProvider } from '@/context/CharactersProvider';

export default async function Home() {
  return (
    <CharactersProvider>
      <header className="sh flex justify-center bg-secondary w-full py-5">
        <a className="" href="/">
          <h1 className="inline ml-5 text-lg font-semibold text-primary">
            Directorio Rick & Morty
          </h1>
        </a>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center px-5 lg:px-24">
        <section className=" w-full">
          <Request />
        </section>
      </main>
      <footer className="w-full px-5 lg:px-24 text-white text-right">
        <a
          href="https://github.com/inoguez"
          target="_blank"
          className="hover:underline"
        >
          Ian Noguez ©
        </a>
      </footer>
    </CharactersProvider>
  );
}
