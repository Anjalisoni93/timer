const timer = function(time) {
  // checking for edge cases negative number and not a number
  if (time < 0 || isNaN(time)) {
    return null;
  }

  // the actual timer 
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

// returns array containing arguments
const argv = process.argv.slice(2);


// iterates over the arguments 
for (let i of argv) {
  timer(i);
}
