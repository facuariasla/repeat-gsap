import Layout from "./components/Layout";
import ScreenFive from "./screens/ScreenFive";
import ScreenFour from "./screens/ScreenFour";
import ScreenOne from "./screens/ScreenOne";
import ScreenSix from "./screens/ScreenSix";
import ScreenThree from "./screens/ScreenThree";
import ScreenTwo from "./screens/ScreenTwo";

function App() {
  return (
    <Layout>
      <ScreenOne/>
      <ScreenTwo/>
      <ScreenThree/>
      <ScreenFour/>
      <ScreenFive/>
      <ScreenSix/>
    </Layout>
  );
}

export default App;
