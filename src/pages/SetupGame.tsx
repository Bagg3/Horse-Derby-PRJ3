import { Link } from 'react-router-dom';

const SetupGame = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-600">
      <Link to="/" className="absolute left-3 top-3">
        <button className="rounded-full bg-slate-400 px-3 py-1 text-lg font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
          Tilbage
        </button>
      </Link>
      <h1 className="mb-5 text-4xl font-bold text-white">Setup Spillere</h1>
      <div className="mb-5 flex h-[60%] w-[50%] flex-row gap-8 rounded-lg bg-slate-400 shadow-lg">
        <input
          className=" relative left-4 top-5 mb-2 flex h-1/5 w-1/3 rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
          placeholder="Navn"
        ></input>
        <input
          className="relative inset-x-0 top-5 mb-2 flex h-1/5 w-1/5 rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
          placeholder="Mængde"
        ></input>
        <select className="mb-5 h-16 w-48 rounded-full bg-slate-200 text-lg font-bold text-black">
          <option className="bg-red-500" value="option1">
            Hest 1
          </option>
          <option className="bg-green-500" value="option2">
            Hest 2
          </option>
          <option className="bg-blue-800" value="option3">
            Hest 3
          </option>
          <option className="bg-yellow-400" value="option4">
            Hest 4
          </option>
        </select>
      </div>
      <Link to="/game">
        <button className="mb-5 h-16 w-64 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
          Start Spil
        </button>
      </Link>
    </div>
  );
};

export default SetupGame;

// Navnefelt er egne componenter
// Dropdown er egne componenter
// Navnefelt og dropdown er egne componenter sammen
