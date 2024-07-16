import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className="relative flex items-start justify-center w-screen bg-white md:min-h-screen min-h-dvh ">
        <img
          src="/images/korea1.jpg"
          alt="hero image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <section className="z-50 flex flex-col justify-start w-full h-full p-8 md:w-10/12 md:p-0 md:mt-[10%]">
          <img src="/images/logo.png" alt="logo kmii" className="w-32" />
          <h1 className="font-extrabold leading-tight md:leading-[1.1] text-4xl md:text-3xl lg:text-4xl xl:text-7xl text-slate-900 mt-4 md:mt-8">
            Cari Rumah Allah di Korea Selatan
          </h1>
          <p className="mt-2 mb-4 text-lg md:text-xl lg:text-2xl md:mb-8 md:mt-4 text-slate-600">
            Mari luangkan waktu untuk beribadah di Negeri Gingseng
          </p>
          <Link
            to={"/mosques"}
            className="px-6 py-3 text-lg text-white bg-purple-700 rounded-full md:px-8 md:py-3 w-fit"
          >
            Explore Now
          </Link>
        </section>
      </main>
    </>
  );
};

export default HomePage;
