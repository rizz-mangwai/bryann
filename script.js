const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const maleAkan   = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
const femaleAkan = ["Ama",   "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

function daysInMonth(m, y) {
  return [0,31,28,31,30,31,30,31,31,30,31,30,31][m] + 
         (m === 2 && (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) ? 1 : 0);
}

document.getElementById("akanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const year  = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day   = parseInt(document.getElementById("day").value);
  const genderSel = document.querySelector('input[name="gender"]:checked');
  const gender = genderSel ? genderSel.value : null;

  if (!year || !month || !day || !gender) {
    alert("Please fill in all fields (year, month, day, and gender).");
    return;
  }

  if (year < 1900 || year > 2100) {
    alert("Year should be between 1900 and 2100.");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Month must be 1–12.");
    return;
  }

  const maxDay = daysInMonth(month, year);
  if (day < 1 || day > maxDay) {
    alert(`Invalid day for ${month}/${year} — max is ${maxDay}.`);
    return;
  }

  let m = month;
  let y = year;
  let d = day;

  if (m < 3) {
    m += 12;
    y--;
  }

  const K = y % 100;
  const J = Math.floor(y / 100);

  let h = (d + Math.floor(13 * (m + 1) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;

  h = (h + 7) % 7;

  const bornDayName = daysOfWeek[h];
  const akanName = (gender === "male") ? maleAkan[h] : femaleAkan[h];

  document.getElementById("nameOutput").textContent = akanName;
  document.getElementById("dayOutput").textContent = `Born on ${bornDayName}`;

  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.scrollIntoView({ behavior: "smooth" });

  document.getElementById("akanForm").reset();
});