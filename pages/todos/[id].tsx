import { useRouter } from "next/router";
import { createContext, useState } from "react";
import type { AppProps } from "next/app";
import Link from "next/link";
import DeatilDisplay from "../../src/components/DetilDisplay";
import { Title } from "../../src/components/Title";

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
      <Title />
      <DeatilDisplay />
    </>
  );
}
