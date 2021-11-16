const timer = function(time) {
  if (time < 0 || isNaN(time)) {
    return null;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

const argv = process.argv.slice(2);

for (let i of argv) {
  timer(i);
}
