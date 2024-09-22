"use client";

import { useState } from "react";
import { parseDocument } from "@/actions/parse-document";

export default function UploadPage() {
  const [parsedText, setParsedText] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    try {
      const text = await parseDocument(formData);
      setParsedText(text);
    } catch {
      setParsedText("Error parsing document");
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <input
          type="file"
          name="file"
          accept=".txt,.pdf,.docx,.pptx,.md,.xlsx,.odt,.odp,.ods"
        />
        <button type="submit">Parse</button>
      </form>

      <pre className="whitespace-pre-wrap">{parsedText}</pre>
    </>
  );
}
