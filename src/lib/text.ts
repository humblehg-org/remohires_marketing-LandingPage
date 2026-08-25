// Splits a long body of copy into short reading paragraphs (roughly two
// sentences each) instead of one dense block of text.
export function splitIntoParagraphs(text: string): string[] {
  const sentences = text
    .split(/(?<=\.)\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }
  return paragraphs;
}
