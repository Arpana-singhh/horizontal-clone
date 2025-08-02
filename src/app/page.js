import Image from "next/image";
import Hero from "./components/Hero"
import Insight from "./components/Insights"
import Work from "./components/Work"
import Platform from "./components/Platforms"
import Service from "./components/Service"
import Branch from "./components/Branch"
import "../../public/assets/styles/global.css"
export default function Home() {
  return (
  <>
    <Hero/>
    <div className="main-sub-section">
      <div className="fader"></div>
      <Insight/>
      <Work/>
      <Platform/>
      <div className="fader"></div>
      <div className="fader"></div>
      <Service/>
      <Branch/>
    </div>
  </>
  );
}
