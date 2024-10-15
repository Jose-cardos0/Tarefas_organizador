import Link from "next/link";

export function Header() {
  return (
    <header
      className="w-full flex items-center 
    justify-around
     bg-black
     "
    >
      <div
        className="w-full flex items-center
         justify-between mx-7
      mt-3"
      >
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <h1
              className="flex gap-2
         font-bold text-xl text-white mr-5 "
            >
              Tarefas <p className=" font-bold text-xl text-red-600">+</p>
            </h1>
          </Link>
          <Link href={"/dashboard"}>
            <button
              className=" bg-white rounded-xl
             text-black px-3 cursor-pointer
              hover:bg-red-600 hover:text-white font-bold"
            >
              Minhas tarefas
            </button>
          </Link>
        </div>
        <div
          className=" flex items-center 
        justify-center gap-6  font-bold"
        >
          <button
            className="bg-white rounded-xl
             text-black px-3 cursor-pointer
              hover:bg-red-600 hover:text-white"
          >
            Acessar
          </button>
        </div>
      </div>
    </header>
  );
}
