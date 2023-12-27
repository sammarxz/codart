import dynamic from "next/dynamic";

import { EditorProvider } from "@/context/editor.provider";

import { Spinner } from "@/components/Spinner";

const Frame = dynamic(() => import("@/components/Frame"), {
  loading: () => <Spinner />,
  ssr: false,
});

export default function Home() {
  return (
    <main className=" h-[100vh] flex flex-col items-center justify-center">
      <EditorProvider>
        <Frame />
      </EditorProvider>
    </main>
  );
}
