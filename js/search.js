//TM470 – The computing and IT project EMA Jonathan Paul Hill B283401X
//  Date: July - September 2020
// Green Assessments & Screening (GAS) Application. A Health & Safety Application for persons who work with hazardous material and chemicals.

function searchMSDS() {
  var input, filter, msds, chemical, td, i, txtValue;
  input = document.getElementById("msds");
  filter = input.value.toUpperCase();
  msds = document.getElementById("msdsTable");
  chemical = msds.getElementsByTagName("tr");
  for (i = 0; i < chemical.length; i++) {
    td = chemical[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        chemical[i].style.display = "";
      } else {
        chemical[i].style.display = "none";
      }
    }
  }
}

function searchCompany() {
  var input, filter, msds, chemical, td, i, txtValue;
  input = document.getElementById("company");
  filter = input.value.toUpperCase();
  msds = document.getElementById("msdsTable");
  chemical = msds.getElementsByTagName("tr");
  for (i = 0; i < chemical.length; i++) {
    td = chemical[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        chemical[i].style.display = "";
      } else {
        chemical[i].style.display = "none";
      }
    }
  }
}