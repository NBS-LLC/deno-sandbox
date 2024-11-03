export async function writeHelloWorld(filePath: string) {
  const content = "Hello World!\n";
  await Deno.writeTextFile(filePath, content);
}

if (import.meta.main) {
  await writeHelloWorld("output.txt");
}
