import app from "./app";
import "@babel/polyfill";
async function main() {
  await app.listen(3000);
  console.log("Server on port 3000");
}

main();
