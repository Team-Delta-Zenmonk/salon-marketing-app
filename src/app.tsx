import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { LandingPage } from "@/pages/landing";

export function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
