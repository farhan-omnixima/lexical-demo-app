"use client";
import React, { useState } from "react";
import { LexicalEditorComponent } from "lexical-rich-text-editor";
import { useHtmlContext } from "lexical-rich-text-editor/src/htmlContext";
const App: React.FC = () => {
  const initialHtml = "<p>Hello, This is Custom Lexical Editor Module!</p>";
  const { htmlString } = useHtmlContext();

  return (
    <div className="App">
      <main>
        <LexicalEditorComponent initialHtml={initialHtml} />
      </main>
      <section className="m-4 rounded-lg p-4 bg-gray-200 text-black">
        <h2 className="text-center font-semibold">Content Output</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </section>
    </div>
  );
};

export default App;

