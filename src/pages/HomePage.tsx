const HomePage = () => {
  return (
    <>
      <main className="relative flex items-start justify-center w-screen min-h-screen bg-white md:items-center">
        <div className="flex items-stretch justify-between w-full gap-8 md:w-10/12 ">
          <section className="w-full h-full bottom-0 absolute md:relative md:w-6/12 md:max-h-[800px] md:flex md:justify-center md:items-stretch md:bg-gradient-to-br from-sky-200 to-sky-100 md:rounded-2xl md:bg-blue-400 overflow-hidden">
            <img
              src="/images/korea1.jpg"
              alt="hero image"
              className="absolute inset-0 object-cover w-full h-full md:static md:object-cover md:w-full md:h-full md:rounded-2xl"
            />
          </section>
          <section className="z-50 flex flex-col justify-start w-full p-8 md:justify-center md:w-6/12 md:p-0">
            <img src="/images/logo.png" alt="logo kmii" className="w-32" />
            <h1 className="font-extrabold leading-tight md:leading-[1.1] text-4xl md:text-3xl lg:text-4xl xl:text-7xl text-slate-900 mt-4 md:mt-8">
              Cari Rumah Allah di Korea Selatan
            </h1>
            <p className="mt-2 mb-4 text-lg md:text-xl lg:text-2xl md:mb-8 md:mt-4 text-slate-600">
              Mari luangkan waktu untuk beribadah di Negeri Gingseng
            </p>
            <button className="px-6 py-3 text-lg text-white bg-purple-700 rounded-full md:px-8 md:py-3 w-fit">
              Explore Now
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
