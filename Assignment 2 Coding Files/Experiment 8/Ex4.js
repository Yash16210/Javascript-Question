const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateAge(birthDate) {
  const currentDate = new Date();
  const birth = new Date(birthDate);

  let ageYears = currentDate.getFullYear() - birth.getFullYear();
  let ageMonths = currentDate.getMonth() - birth.getMonth();
  let ageDays = currentDate.getDate() - birth.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}

rl.question("Enter your date of birth (YYYY-MM-DD): ", (userBirthDate) => {
  if (userBirthDate) {
    const age = calculateAge(userBirthDate);
    console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days.`);
  } else {
    console.log("No birth date entered.");
  }
  
  rl.close();
});