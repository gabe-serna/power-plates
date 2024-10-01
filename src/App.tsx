import { ButtonLG, Heading1 } from "./components/Typography";

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
        <Heading1 className="text-3xl 2xl:text-6xl xl:text-5xl lg:text-4xl mt-28 lg:mt-40">
          We Make Food, You Make Progress
        </Heading1>
      </section>
      <section
        id="info"
        className="w-full h-screen bg-slate-800 pt-12 lg:pt-20"
      ></section>
    </>
  );
}

export default App;
