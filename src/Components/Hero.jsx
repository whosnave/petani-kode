import Tani from "../Assets/petani.svg";

const Hero = () => {
  return (
    <div className=" bg-slate-800 text-white py-[80px] px-9 text-left ">
      <div className="ml-25">
        <h1 className="text-[58px] font-bold mb-2 drop-shadow-md tracking-tight">
          Petani Kode
        </h1>
        <p className="text-left text-2xl mb-[-3px] font-light">
          Belajar budidaya kode <span className="italic">(coding)</span> dengan
          tutorial yang mudah <br />
          dipahami.
          <span className="italic"> Mostly</span> pakai Linux.
        </p>
        <div className=" flex flex-row gap-3">
          <button className="bg-teal-600 px-3 py-2 my-6 rounded-[10px] hover:bg-teal-700 transition">
            <a href="#">Mulai Belajar</a>
          </button>
          <button className="text-teal-100 bg-teal-400/10 border-1 border-teal-400/50 px-3 py-2 my-6 hover:bg-teal-800 transition rounded-lg">
            <a href="#">Join Newsletter</a>
          </button>
        </div>
      </div>

      <img
        className="origin-bottom-right right-38 -bottom-48 static md:absolute w-100 md:w-92 lg:w-125 mb-120"
        src={Tani}
        alt=""
      />
    </div>
  );
};

export default Hero;