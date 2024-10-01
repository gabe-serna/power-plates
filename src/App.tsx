import { ButtonLG, ButtonMD, Heading1, Paragraph } from "./components/Typography";
import { MapPin, UtensilsCrossed } from "lucide-react";

function App() {
  return (
    <>
      <nav className="fixed flex px-12 py-2 lg:px-20 items-center justify-between w-full h-12 lg:h-20 bg-white z-20">
        <Heading1 className="text-xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">
          Power Plates
        </Heading1>
        <ButtonMD variant="primary">Shop</ButtonMD>
      </nav>
      <section
        id="hero"
        className="relative w-full h-screen pt-12 lg:pt-20 flex flex-col px-12 lg:px-20"
      >
        <Heading1 className="text-3xl 2xl:text-6xl xl:text-5xl lg:text-4xl mt-20 lg:mt-48 font-semibold">
          We Make Food. You Make Progress.
        </Heading1>
        <Paragraph className="mt-2">
          Delicious meal prep at your doorstep, tailored to your goals.
        </Paragraph>
        <div
          id="values"
          className="flex flex-col lg:flex-row w-full lg:space-x-8 mt-4"
        >
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg w-full lg:w-1/2">
            <MapPin className="min-h-7 min-w-7 mx-3 stroke-slate-600" />
            <input
              type="text"
              placeholder="Enter Delivery Address"
              className="w-full rounded-lg py-4 focus:outline-none mr-3"
            ></input>
          </div>
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg min-w-max w-full lg:w-1/6">
            <UtensilsCrossed className="min-h-7 min-w-7 mx-3 stroke-slate-600" />
            <select
              title="Select Goal"
              defaultValue={"Maintenence"}
              className="w-full rounded-lg py-4 focus:outline-none mr-3"
            >
              <option value="Maintenence">Maintenence</option>
              <option value="Bulking">Bulking</option>
              <option value="Cutting">Cutting</option>
            </select>
          </div>
        </div>
        <ButtonLG className="w-max mt-8">Find Plans</ButtonLG>
      </section>
      <section
        id="info"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 225% 190% at bottom, black 0%, black 49.8%, black 49.95%, transparent 50%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 225% 190% at bottom, black 0%, black 49.8%, black 49.95%, transparent 50%, transparent 80%)"
        }}
        className="w-full h-screen bg-slate-800 pt-12 lg:pt-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-between px-12 lg:px-20"
      >
        <div className="flex items-start justify-center w-full flex-col">
          <Heading1 className="text-white text-xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">
            Why Power Plates?
          </Heading1>
          <Paragraph
            style={{ width: "clamp(45ch, 50%, 75ch)" }}
            className="text-slate-400 mt-8"
          >
            We deliver fresh, personalized meals to match your fitness goals—whether
            you're bulking, cutting, or maintaining. Expertly crafted and
            nutritionally balanced, we make hitting your goals effortless and
            delicious.
          </Paragraph>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="src\assets\fit-couple.png" />
        </div>
      </section>
    </>
  );
}

export default App;
