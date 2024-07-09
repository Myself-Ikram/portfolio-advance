import { ReactElement } from "react";
import About from "./pages/about";
import Home from "./pages/home";
import { COLORS } from "./constants/constant";

const screens: { name: string; comp: any }[] = [
  {
    name: "Home",
    comp: Home,
  },
  {
    name: "About",
    comp: About,
  },
];

function App() {
  return (
    <div className=" bg-white text-black">
      {/* <p>Hello</p> */}
      {/* <About /> */}
      {screens.map((item, idx) => (
        <div
          className="h-screen md:h-halfscreen lg:h-screen"
          style={{
            backgroundColor: idx % 2 === 0 ? COLORS.DARKBLUE : COLORS.BLUE,
          }}
        >
          <item.comp />
        </div>
      ))}
    </div>
  );
}

export default App;
