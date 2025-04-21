

function App() {
  return (
    <>
    <div className='content-page px-4 '>
      <header className='flex justify-between items-center py-2 my-2'> 
        <div className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
          </svg>
        </div>
        <nav>
          <ul className='flex items-center gap-8 '>
            <li className='nav-link'>
              <a className='' href="/">
              Home
              </a>
            </li>
            <li className='nav-link'>
              <a className='' href="/">
              Explore
              </a>
              
            </li>
            <li className='nav-link'>
              <a className='' href="/">
              Authors
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className='flex  items-center gap-4'>
            <li >
              <a className="btn-login" href="">Log in</a>
            </li>
            <li>
              <a className="btn-sing-up" href="">
                Sing up for free
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="mx-auto">
        {/* Card Principal recipe */}
        <section className="h-96 space-y-5">
          <h1 className="text-black text-3xl text-center" >The Recipe Months</h1>
          {/* Card */}
          <div className="flex flex-col bg-gradient-to-r from-stone-100 to-sky-50 shadow md:flex-row justify-between h-full  overflow-hidden rounded-r-full">
          {/* author */}
          <div className="w-full md:w-1/6">
            <div className="group relative block bg-black h-full cursor-pointer">
              <img
                alt="chef"
                src="/src/assets/gato.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-95 transition-opacity group-hover:opacity-50"
              />
              {/* author details */}
              <div className="relative flex flex-col justify-between h-full p-4 z-10">
                {/* top info */}
                <div className="grid ">
                  <p className="text-sm font-medium text-yellow-300 uppercase">Chef Principal</p>
                  <p className="italic text-sm font-medium text-yellow-600 uppercase">& Hotel marryot</p>
                </div>

                {/* bottom section with name + hidden text */}
                <div className="flex flex-col justify-end">
                  <p className="md:text-base  lg:text-xl   md:font-semibold xl:font-bold text-white  transition-all duration-300 group-hover:-translate-y-4">
                    Carlos 
                  </p>
                  <div className="transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugiat!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content recipe */}
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 ">
            <div className="grid  
                  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 
                  gap-y-16 gap-x-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[300px] flex-shrink-0 bg-white  shadow  border-4 border-gray-50 "
              >
                <img
                  alt=""
                  src="/src/assets/gato2.jpg"
                  className="h-56 w-full object-fill"
                />
              <div className="p-2">
                    <dl>
                      <div>
                        <dt className="sr-only">Time</dt>
                        <dd className="text-sm text-center text-gray-500">50 minutes</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Recipe</dt>
                        <dd className="font-medium text-center">Chicken Sandwich</dd>
                      </div>
                    </dl>
                    <div className="mt-3 flex justify-center items-center gap-8 text-xs">
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="size-4 text-gray-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">Persons</p>

                          <p className="font-medium">5</p>
                        </div>
                      </div>

                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="size-4 text-yellow-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">reviews</p>

                          <p className="font-medium">7.9/10</p>
                        </div>
                      </div>
                    </div>
              </div>
                
              </div>
            ))}
            </div>
          </div>
          {/* END content recipe */}
        </div>

        </section>
        
        <section className="grid grid-cols-4 gap-2 my-40 bg-white">
        {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="min-w-auto min-h-150 transform duration-500 hover:-translate-y-12 group"
                
              >
              <div className="h-full group-hover:bg-opacity-0 min-h-150 hover:bg-opacity-75 transform duration-300">
                <div className="bg-black  p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-blue-500">
                    01 
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> Aaaaaa </p>
                </div>
              </div>


              </article>

            ))}
            
            
        </section>
      </main>
      <footer className='bg-amber-100 mt-20'>
        <h1>Footer</h1>
      </footer>
    </div>
    </>
  )
}

export default App
