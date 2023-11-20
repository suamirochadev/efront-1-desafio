import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center w-full">
        <div className="flex justify-between max-w-3xl w-full lg:flex m-10 mx-4">
          <p className="flex text-dark-40 text-2xl pb-10">
            Codêlandia
          </p>
          <p className="text-dark-40 text-2xl">
          blog
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-10 max-w-3xl w-full px-4">
          <input 
            type="Search" 
            className="bg-white/[0.20] text-dark-40 rounded py-2 px-2 focus:outline-none focus:ring max-w-4xl w-full"
            placeholder="Pesquisar no blog..."
          />
        <img src="/../search.svg" alt="" className="inline mx-2  "/>
      </div>
      
      <div className="flex-1 min-h-full w-full bg-dark-30">
        {/* INICIO DOS POSTS */}
        {/* BLOG POST 1 */}
        <div className="items-center flex-col w-full lg:flex pt-24 px-4">
          <div
            className="px-5 py-4 bg-dark-40 rounded-lg"
          >
            <div className='flex justify-between p-6 pl-0'>
              <p className={`m-0 max-w-[90ch] text-base opacity-50`}>
              02 de jul, 2021
              </p>
              <Image
              src="\..\heart.svg"
              alt="Coração"
              width={25}
              height={25}
              />
            </div>
            <h2 className={`mb-3 text-2xl`}>
            Agora é oficial: o Windows 11 está vindo
            </h2>
            <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
            A chegada do Windows 11 marca um novo capítulo na evolução dos sistemas operacionais. Com recursos inovadores, design moderno e melhorias de desempenho, promete oferecer uma experiência envolvente para usuários.
            </p>
          </div>
        {/* FIM DO BLOG POST 1 */}
        {/* BLOG POST 2 */}
          <div className="items-center flex-col w-full lg:flex pt-12">
            <div
              className="px-5 py-4 bg-dark-40 rounded-lg"
            >
              <div className='flex justify-between p-6 pl-0'>
                <p className={`m-0 max-w-[90ch] text-base opacity-50`}>
                15 de mai, 2022
                </p>
                <Image
                src="\..\heart.svg"
                alt="Coração"
                width={25}
                height={25}
                />
              </div>
              <h2 className={`mb-3 text-2xl`}>
              Tim Berners-Lee vai leiloar código-fonte da web
              </h2>
              <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
              O renomado inventor da World Wide Web, Sir Tim Berners-Lee, está prestes a realizar um leilão único que marca um capítulo significativo na história da tecnologia. 
              </p>
            </div>
        {/* FIM DO BLOG POST 2 */}
          {/* BLOG POST 3 */}
          <div className="items-center flex-col w-full lg:flex pt-12">
              <div
                className="px-5 py-4 bg-dark-40 rounded-lg"
              >
                <div className='flex justify-between p-6 pl-0'>
                  <p className={`m-0 max-w-[90ch] text-base opacity-50`}>
                  09 de abril, 2023
                  </p>
                  <Image
                  src="\..\heart.svg"
                  alt="Coração"
                  width={25}
                  height={25}
                  />
                </div>
                <h2 className={`mb-3 text-2xl`}>
                Tem Firefox novo no pedaço e você vai querer migrar
                </h2>
                <p className={`m-0 max-w-[90ch] text-sm opacity-50`}>
                Prepare-se para uma revolução na sua experiência de navegação, pois o Firefox está de volta com uma versão totalmente renovada, trazendo recursos emocionantes que certamente conquistarão seu coração digital.
                </p>
              </div>
          {/* FIM DO BLOG POST 3 */}
            {/* BLOG POST 4 */}
            <div className="items-center flex-col w-full lg:flex pt-12 pb-24">
                <div
                  className="px-5 py-4 bg-dark-40 rounded-lg"
                >
                  <div className='flex justify-between p-6 pl-0'>
                    <p className={`m-0 max-w-[90ch] text-base opacity-50`}>
                    11 de agosto, 2023
                    </p>
                    <Image
                    src="\..\heart.svg"
                    alt="Coração"
                    width={25}
                    height={25}
                    />
                  </div>
                  <h2 className={`mb-3 text-2xl`}>
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
