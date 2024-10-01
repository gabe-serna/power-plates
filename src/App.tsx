import { ButtonLG, ButtonMD, Heading1, Paragraph } from "./components/Typography";
import {
  MapPin,
  UtensilsCrossed,
  BicepsFlexed,
  Dumbbell,
  Droplets
} from "lucide-react";
import fitCouple from "./assets/fit-couple.png";
import manEating from "./assets/man-eating.webp";

function App() {
  return (
    <>
      <nav className="fixed left-0 right-0 z-20 flex items-center justify-between w-full h-12 px-12 py-2 mx-auto bg-white rounded-b-full lg:w-1/2 lg:px-20 lg:h-20">
        <Heading1 className="text-xl font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl text-nowrap">
          Power Plates
        </Heading1>
        <div className="flex flex-nowrap">
          <ButtonMD variant="tertiary" className="mr-4 text-nowrap">
            Log In
          </ButtonMD>
          <ButtonMD variant="secondary" className="text-nowrap">
            Sign Up
          </ButtonMD>
        </div>
      </nav>
      <section
        id="hero"
        className="relative flex flex-col w-full h-screen px-12 pt-12 lg:pt-20 lg:px-20"
      >
        <img
          src={manEating}
          alt="In shape man eating a salad"
          className="lg:block hidden hero-image absolute top-0 bottom-0 right-0 w-[40%] -z-10"
        />
        <Heading1 className="mt-20 text-3xl font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl lg:mt-48">
          We Make Food. You Make Progress.
        </Heading1>
        <Paragraph className="mt-2 text-stone-500">
          Delicious meal prep at your doorstep, tailored to your goals.
        </Paragraph>
        <div
          id="values"
          className="flex flex-col w-full mt-4 lg:flex-row lg:space-x-8"
        >
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg w-full lg:w-1/2">
            <MapPin className="mx-3 min-h-7 min-w-7 stroke-slate-600" />
            <input
              type="text"
              placeholder="Enter Delivery Address"
              className="w-full py-4 mr-3 rounded-lg focus:outline-none"
            ></input>
          </div>
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg min-w-max w-full lg:w-1/6 bg-white">
            <UtensilsCrossed className="mx-3 min-h-7 min-w-7 stroke-slate-600" />
            <select
              title="Select Goal"
              defaultValue={"Maintenence"}
              className="w-full py-4 rounded-lg mr-3rounded-lg focus:outline-none"
            >
              <option value="Maintenence">Maintenence</option>
              <option value="Bulking">Bulking</option>
              <option value="Cutting">Cutting</option>
            </select>
          </div>
        </div>
        <ButtonLG className="mt-8 w-max">Find Plans</ButtonLG>
      </section>
      <section
        id="info"
        className="flex flex-col-reverse items-center justify-center w-full h-screen px-12 pt-12 outline-none info-curve lg:justify-between bg-slate-800 lg:pt-20 lg:flex-row-reverse lg:px-20"
      >
        <div className="flex flex-col items-start justify-center w-full">
          <Heading1 className="text-xl font-semibold text-white 2xl:text-4xl xl:text-3xl lg:text-2xl">
            Why Power Plates?
          </Heading1>
          <Paragraph
            style={{ width: "clamp(45ch, 50%, 75ch)" }}
            className="max-w-full mt-4 text-slate-400"
          >
            We deliver fresh, personalized meals to match your fitness goals—whether
            you're bulking, cutting, or maintaining. Expertly crafted and
            nutritionally balanced, we make hitting your goals effortless and
            delicious.
          </Paragraph>
          <ButtonLG
            variant="secondary"
            className="mt-12 transition-colors border-slate-600 bg-slate-800 text-slate-500 hover:border-slate-500 hover:text-slate-400"
          >
            Learn More
          </ButtonLG>
        </div>
        <div className="flex items-center justify-center w-full h-1/2 lg:h-full ">
          <img className="object-contain w-full max-h-full" src={fitCouple} />
        </div>
      </section>
      <section
        id="plans"
        className="flex flex-col items-center w-full px-12 pt-24 pb-24 h-fit lg:h-screen lg:pt-32 lg:px-32 bg-slate-800"
      >
        <Heading1 className="text-xl font-semibold text-white 2xl:text-4xl xl:text-3xl lg:text-2xl">
          Personalized Plans for your Goals
        </Heading1>
        <div className="flex flex-col items-center justify-center mt-12 size-full lg:flex-row lg:space-x-12 max-lg:space-y-10">
          <figure className="flex flex-col items-center justify-center w-full p-8 lg:p-12 h-min lg:h-full lg:w-full gradient-border lg:min-w-72">
            <BicepsFlexed className="min-w-10 min-h-10 lg:min-w-16 lg:min-h-16 stroke-orange-400" />
            <div className="flex flex-col max-lg:w-[clamp(45ch,_50%,_75ch)] max-lg:max-w-full">
              <figcaption className="mt-4 text-xl font-semibold text-center text-white 2xl:text-4xl xl:text-3xl lg:text-2xl">
                Bulking
              </figcaption>
              <Paragraph className="max-w-[clamp(45ch,_50%,_75ch)] mt-2 lg:mt-4 text-center text-slate-400">
                Maximize muscle growth with high-protein meals that fuel strength and
                recovery.
              </Paragraph>
            </div>
          </figure>
          <figure className="flex flex-col items-center justify-center w-full p-8 lg:p-12 h-min lg:h-full lg:w-full gradient-border lg:min-w-72">
            <Dumbbell className="min-w-10 min-h-10 lg:min-w-16 lg:min-h-16 stroke-orange-400" />
            <figcaption className="mt-4 text-xl font-semibold text-center text-white 2xl:text-4xl xl:text-3xl lg:text-2xl">
              Maintaining
            </figcaption>
            <Paragraph className="max-w-[clamp(45ch,_50%,_75ch)] mt-2 lg:mt-4 text-center text-slate-400">
              Maintain your results with balanced meals that support peak performance
              and well-being.
            </Paragraph>
          </figure>
          <figure className="flex flex-col items-center justify-center w-full p-8 lg:p-12 h-min lg:h-full lg:w-full gradient-border lg:min-w-72">
            <Droplets className="min-w-10 min-h-10 lg:min-w-16 lg:min-h-16 stroke-orange-400" />
            <figcaption className="mt-4 text-xl font-semibold text-center text-white 2xl:text-4xl xl:text-3xl lg:text-2xl">
              Cutting
            </figcaption>
            <Paragraph className="max-w-[clamp(45ch,_50%,_75ch)] mt-2 lg:mt-4 text-center text-slate-400">
              Stay lean with low-calorie, nutrient-packed meals designed to burn fat
              while keeping you full.
            </Paragraph>
          </figure>
        </div>
      </section>
    </>
  );
}

export default App;
