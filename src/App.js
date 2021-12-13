import { Layout } from "./componets/Layout";
import CartProvider from "./ContextApi/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;
