import { InfiniteDataView } from "./components/InfiniteDataView";
import storeItems from "./store/items";

const App = () => {
  return (
    <div className="App">
      <InfiniteDataView items={storeItems} />
    </div>
  );
};

export default App;
