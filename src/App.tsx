import { ButtonLG, ButtonMD, Heading1, Paragraph } from "./components/Typography";
import { MapPin, UtensilsCrossed } from "lucide-react";

function App() {
  return (
    <>
      <nav className="fixed z-20 flex items-center justify-between w-full h-12 px-12 py-2 bg-white lg:px-20 lg:h-20">
        <Heading1 className="text-xl font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl">
          Power Plates
        </Heading1>
        <ButtonMD variant="primary">Shop</ButtonMD>
      </nav>
      <section
        id="hero"
        className="relative flex flex-col w-full h-screen px-12 pt-12 lg:pt-20 lg:px-20"
      >
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
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg min-w-max w-full lg:w-1/6">
            <UtensilsCrossed className="mx-3 min-h-7 min-w-7 stroke-slate-600" />
            <select
              title="Select Goal"
              defaultValue={"Maintenence"}
              className="w-full py-4 mr-3 rounded-lg focus:outline-none"
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
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 225% 190% at bottom, black 0%, black 49.8%, black 49.95%, transparent 50%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 225% 190% at bottom, black 0%, black 49.8%, black 49.95%, transparent 50%, transparent 80%)"
        }}
        className="flex flex-col-reverse items-center justify-center w-full h-screen px-12 pt-12 lg:justify-between bg-slate-800 lg:pt-20 lg:flex-row-reverse lg:px-20"
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
          <img
            className="object-contain w-full max-h-full"
            src="src\assets\fit-couple.png"
          />
        </div>
      </section>
      <section
        id="plans"
        className="w-full h-screen px-12 pt-12 lg:pt-20 lg:px-20 bg-slate-800"
      ></section>
    </>
  );
}

export default App;
