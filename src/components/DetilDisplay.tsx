import { Component } from "react";
import { Context } from "../../pages/_app";
import type { AppProps } from "next/app";
import { TodoContext } from "./providers/TodoProvider";
import Link from "next/link";

export default function DeatilDisplay() {
  return (
    <div>
      <h3>詳細ページ</h3>
      <p>コンテンツの詳細</p>
      <p>内容</p>
      <button>
        <Link href="/">戻る</Link>
      </button>
    </div>
  );
}
