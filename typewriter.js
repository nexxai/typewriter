const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  delay = delay + 50;
}

// Print out the final new line AFTER all the other characters are done
setTimeout(() => {
  process.stdout.write("\n");
}, delay);