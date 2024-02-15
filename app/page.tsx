"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import QuizHome from "./assets/quiz-start6.jpg"
import Button from "./components/button/Button";
export default function Home() {
  const router = useRouter()
  const handleButtonClick = ()=>router.push("/quiz")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <div className="flex flex-col items-center justify-center gap-y-4">
    {/* <p className="px-6 text-xl text-gray-500 ">can you gusse the end of attack on titan and it will be gappy or sad finishing?</p> */}
      <Image src={QuizHome} alt="pic" className="max-h-[350px] rounded-lg "/>
      <p className="px-6 text-sm  text-gray-500 ">Let`s start the quiz?</p>
      <Button text="START QUIZ" onclick={handleButtonClick}/>

    </div>

    </main>
  
  );
}
