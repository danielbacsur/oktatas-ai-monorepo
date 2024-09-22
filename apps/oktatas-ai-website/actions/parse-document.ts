"use server";

import { parseOfficeAsync } from "officeparser";

const parsingFunctions: {
  [key: string]: (buffer: Buffer) => Promise<string>;
} = {
  txt: async (buffer: Buffer) => {
    return buffer.toString("utf-8");
  },
  pdf: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  docx: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  pptx: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  md: async (buffer: Buffer) => {
    return buffer.toString("utf-8");
  },
  xlsx: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  odt: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  odp: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
  ods: async (buffer: Buffer) => {
    return await parseOfficeAsync(buffer);
  },
};

export async function parseDocument(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  const fileType = file.name.split(".").pop()?.toLowerCase();
  const parseFunction = parsingFunctions[fileType || ""];

  if (!parseFunction) {
    throw new Error("Unsupported file type");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    return await parseFunction(buffer);
  } catch (error) {
    throw new Error("Failed to parse document");
  }
}
