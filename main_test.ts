import { assertSpyCall, stub } from "jsr:@std/testing/mock";
import { writeHelloWorld } from "./main.ts";

Deno.test("writeHelloWorld", async () => {
  const content = "Hello World!\n";

  const writeFileSpy = stub(Deno, "writeTextFile", () => {
    return Promise.resolve();
  });

  await writeHelloWorld("test-output.txt");

  assertSpyCall(writeFileSpy, 0, {
    args: ["test-output.txt", content],
  });
});
