const daysOfWeek = ["saturday", "sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ];
const maleAkan = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
const FemaleAkan = ["Ama",   "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]

function daysinmonth(m, y){
    return [0,31,28,31,30,31,30,31,31,30,31,30,31] [m] +
    (m === 2 && (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) ? 1 : 0)
}
document.getElementById("akanForm").addEventListener("submit", function(e) {
  e.preventDefault();
    const year  = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day   = parseInt(document.getElementById("day").value);
    const genderSel = document.querySelector('input[name="gender"]:checked');
    const gender = genderSel ? genderSel.value : null;