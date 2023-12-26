import { CodeEditor } from "@/components/CodeEditor";

import { EditorProvider } from "@/context/editor.provider";

export default function Home() {
  return (
    <main className=" h-[100vh] flex flex-col items-center justify-between">
      <EditorProvider>
        <div className="code-editor-ref mt-[14rem]">
          <CodeEditor />
        </div>
      </EditorProvider>
    </main>
  );
}
