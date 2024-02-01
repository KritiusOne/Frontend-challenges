import img from "../assets/diego.jpg"
import { Github } from "../icons/Github"
import { Instagram } from "../icons/Instagram"
import { LinkedIn } from "../icons/LinkedIn"
import { Badge } from "./Badge"
export const Card: React.FC = ()=>{
  const h:string = "30"
  const w:string = "30"
  return (
    <main className="bg-[#242323] sm:w-3/5 sm:h-4/5 flex justify-center itemps-center w-2/3 h-2/3 flex-col">
      <header className="flex justify-between items-center w-full flex-col p-4 flex-grow">
        <section className="flex justify-center w-full">
          <img src={img} alt="image of avatar" className="w-1/4 rounded-full object-cover aspect-square sm:w-1/4" />
        </section>
        <section className="flex justify-center items-center flex-col gap-3 flex-grow">
          <h1 className="text-3xl text-[#c2c2c2] sm:text-md"> Jonh Doe </h1>
          <Badge />
          <p className="text-balance text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur nostrum omnis repudiandae dolorem eum laboriosam quod ut est rem nobis voluptates culpa animi enim optio, minus, iure nisi ab?
          </p>
        </section>
      </header>
      <footer className="bg-[#1f1e1e] flex flex-row justify-around items-center h-20">
        <Instagram width={w} height={h} />
        <LinkedIn width={w} height={h} />
        <Github width={w} height={h} />
      </footer>
    </main>
  )
}