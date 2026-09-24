import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { LandingPage } from "@/pages/landing";
import { NotFoundPage } from "@/pages/not-found";

function RouterView() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  if (pathname === "/" || pathname === "/index.html") {
    return <LandingPage />;
  }

  return <NotFoundPage />;
}

export function App() {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  );
}

export default App;
