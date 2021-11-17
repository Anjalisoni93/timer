const timer = function(time) {
  // checking for edge cases negative number and not a number
  if (time < 0 || isNaN(time)) {
    return null;
  }

  setTimeout(() => {
    // This is where it makes the beep sound
    process.stdout.write('\x07');
  }, time * 1000);
};

// returns array containing arguments
const beepingTimer = process.argv.slice(2);


// iterates over the arguments 
for (let input of beepingTimer) {
  timer(input);
}
s