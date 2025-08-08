function checkVoting(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else if (age < 0 || isNaN(age)) {
    console.log("Invalid age");
  } else {
    console.log("Not eligible to vote");
  }
}

checkVoting(20);
checkVoting(-3);
checkVoting(16);

