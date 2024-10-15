import styles from "../../styles/home.module.css";
import Image from "next/image";

import hero from "../../src/app/assets/hero.png";

export default function Home() {
  return (
    <div className="bg-black min-h-screen min-w-full flex items-center justify-center m-auto">
      <div className="flex-col justify-center items-center">
        <Image priority src={hero} alt="Hero Image" />
        <div className="text-center text-white font-bold text-2xl my-10">
          Sistema feito para você organizar <br />
          seus estudos e tarefas!
        </div>
        <div className="flex items-center justify-center gap-5 m-auto ml-12">
          <section
            className="bg-slate-200 py-2 px-6 rounded-md cursor-pointer 
          hover:scale-105 duration-75 transform hover:bg-white "
          >
            <strong className="text-black">+12 posts</strong>
          </section>
          <section
            className="bg-slate-200 py-2 px-6 rounded-md cursor-pointer hover:scale-105 
          duration-75 transform hover:bg-white "
          >
            <strong className="text-black">+90 comentários</strong>
          </section>
        </div>
      </div>
    </div>
  );
}
