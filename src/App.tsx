import { ButtonLG, Heading1 } from "./components/Typography";
import { MapPin, UtensilsCrossed } from "lucide-react";

function App() {
  return (
    <>
      <nav className="fixed flex px-12 py-2 lg:px-20 items-center justify-between w-full h-12 lg:h-20 bg-white">
        <Heading1 className="text-xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold">
          Power Plates
        </Heading1>
        <ButtonLG variant="primary">Shop</ButtonLG>
      </nav>
      <section
        id="hero"
        className="w-full h-screen pt-12 lg:pt-20 flex flex-col px-12 lg:px-20"
      >
        <Heading1 className="text-3xl 2xl:text-6xl xl:text-5xl lg:text-4xl mt-32 lg:mt-48">
          We Make Food, You Make Progress
        </Heading1>
        <div id="values" className="flex flex-col lg:flex-row w-full space-x-8 mt-4">
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg w-1/2">
            <MapPin className="min-h-7 min-w-7 mx-3 stroke-slate-600" />
            <input
              type="text"
              placeholder="Enter Delivery Address"
              className="w-full rounded-lg py-4 focus:outline-none mr-3"
            ></input>
          </div>
          <div className="flex mt-8 items-center justify-center border-blue-500 border-2 lg:border-[3px] rounded-lg min-w-max w-1/6">
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
        <ButtonLG className="w-max mt-6">Find Plans</ButtonLG>
      </section>
      <section
        id="info"
        className="w-full h-screen bg-slate-800 pt-12 lg:pt-20"
      ></section>
    </>
  );
}

export default App;
