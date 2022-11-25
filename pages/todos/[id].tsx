import { useRouter } from "next/router";
import { createContext, useState } from "react";
import type { AppProps } from "next/app";

export const Context = createContext<{
  state: number;
  setState: (val: number) => void;
}>({ state: 0, setState: () => {} });

export default function DetailPage({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const id = router.query.id as string;
  const [state, setState] = useState(0);

  return (
    <>
      <p>詳細ページ</p>
      <Context.Provider value={{ state, setState }}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}
