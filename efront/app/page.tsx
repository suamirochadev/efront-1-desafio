import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center w-full">
        <div className="flex justify-between max-w-3xl w-full lg:flex m-10 mx-4">
          <p className="flex text-dark-40 text-lg pb-10 sm:text-2xl">
            Codêlandia
          </p>
          <p className="text-dark-40 text-lg sm:text-2xl">
          blog
          </p>
        </div>
      </div>
      <div className="relative mb-10 w-full max-w-3xl md:flex px-5">
        <label htmlFor="Search" className="sr-only"> Search </label>
        <input
          type="text"
          id="Search"
          placeholder="Pesquisar no blog..."
          className="w-full rounded-md text-dark-40 bg-white/[0.20] focus:outline-none p-2 placeholder-white/70 ps-10 text-sm sm:text-lg"
        />
        <span className="absolute inset-y-0 grid w-10 place-content-center">
          <button type="button" className=" text-dark-40 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      
      <div className="flex-1 min-h-full w-full bg-dark-30">
        {/* INICIO DOS POSTS */}
        {/* BLOG POST 1 */}
        <div className="items-center flex-col md:flex pt-24 px-4">
          <div
            className="px-5 py-4 bg-dark-40 max-w-3xl rounded-lg"
          >
            <div className='flex justify-between p-6 pl-0'>
              <p className={`m-0 max-w-[90ch] text-sm opacity-50 sm:text-base`}>
              02 de jul, 2021
              </p>
              <Image
              src="\..\heart.svg"
              alt="Coração"
              width={25}
              height={25}
              />
            </div>
            <h2 className={`mb-3 text-lg sm:text-2xl`}>
            Agora é oficial: o Windows 11 está vindo
            </h2>
            <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
            A chegada do Windows 11 marca um novo capítulo na evolução dos sistemas operacionais. Com recursos inovadores, design moderno e melhorias de desempenho, promete oferecer uma experiência envolvente para usuários.
            </p>
          </div>
        {/* FIM DO BLOG POST 1 */}
        {/* BLOG POST 2 */}
          <div className="items-center flex-col w-full md:flex pt-12">
            <div
              className="px-5 py-4 bg-dark-40 max-w-3xl rounded-lg"
            >
              <div className='flex justify-between p-6 pl-0'>
                <p className={`m-0 max-w-[90ch] text-sm opacity-50 sm:text-base`}>
                15 de mai, 2022
                </p>
                <Image
                src="\..\heart.svg"
                alt="Coração"
                width={25}
                height={25}
                />
              </div>
              <h2 className={`mb-3 text-lg sm:text-2xl`}>
              Tim Berners-Lee vai leiloar código-fonte da web
              </h2>
              <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
              O renomado inventor da World Wide Web, Sir Tim Berners-Lee, está prestes a realizar um leilão único que marca um capítulo significativo na história da tecnologia. 
              </p>
            </div>
        {/* FIM DO BLOG POST 2 */}
          {/* BLOG POST 3 */}
          <div className="items-center flex-col w-full md:flex pt-12">
              <div
                className="px-5 py-4 bg-dark-40 max-w-3xl rounded-lg"
              >
                <div className='flex justify-between p-6 pl-0'>
                  <p className={`m-0 max-w-[90ch] text-sm opacity-50 sm:text-base`}>
                  09 de abril, 2023
                  </p>
                  <Image
                  src="\..\heart.svg"
                  alt="Coração"
                  width={25}
                  height={25}
                  />
                </div>
                <h2 className={`mb-3 text-lg sm:text-2xl`}>
                Tem Firefox novo no pedaço e você vai querer migrar
                </h2>
                <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
                Prepare-se para uma revolução na sua experiência de navegação, pois o Firefox está de volta com uma versão totalmente renovada, trazendo recursos emocionantes que certamente conquistarão seu coração digital.
                </p>
              </div>
          {/* FIM DO BLOG POST 3 */}
            {/* BLOG POST 4 */}
            <div className="items-center flex-col w-full md:flex pt-12 pb-24">
                <div
                  className="px-5 py-4 bg-dark-40 max-w-3xl rounded-lg"
                >
                  <div className='flex justify-between p-6 pl-0'>
                    <p className={`m-0 max-w-[90ch] text-sm opacity-50 sm:text-base`}>
                    11 de agosto, 2023
                    </p>
                    <Image
                    src="\..\heart.svg"
                    alt="Coração"
                    width={25}
                    height={25}
                    />
                  </div>
                  <h2 className={`mb-3 text-lg sm:text-2xl`}>
                  John McAfee, criador do antivírus McAfee, morre
                  </h2>
                  <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
                  Hoje, prestamos homenagem a um verdadeiro pioneiro que moldou a maneira como enfrentamos as ameaças digitais diárias. 
                  </p>
                </div>
            {/* FIM DO BLOG POST 4 */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
