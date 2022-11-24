import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const Context = createContext<{
  state: number;
  setState: (val: number) => void;
}>({ state: 0, setState: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(0);
  return (
    <Context.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
