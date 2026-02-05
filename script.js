const links = document.querySelectorAll(".sidebar nav a");
const pages = document.querySelectorAll(".page");

function updateDateTime() {
  const now = new Date();

  const options = {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  document.getElementById("liveDateTime").innerText =
    new Intl.DateTimeFormat("en-IN", options).format(now);
}

setInterval(updateDateTime, 1000);
updateDateTime();

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(link.textContent.toLowerCase()).classList.add("active");
  });
});

// Charts
const simple = (id,type,labels,data,colors)=>new Chart(id,{
  type,
  data:{labels,datasets:[{data,backgroundColor:colors,borderColor:colors}]},
  options:{responsive:true,maintainAspectRatio:false}
});

simple(appointmentsChart,"line",["Mon","Tue","Wed","Thu","Fri"],[20,30,25,40,35],"#0f4c75");
simple(queueChart,"doughnut",["Waiting","Progress","Done"],[18,7,25],["#f59e0b","#3b82f6","#16a34a"]);
simple(appointmentsTypeChart,"bar",["General","Emergency","Surgery"],[20,12,10],"#3282b8");
simple(waitingTimeChart,"line",["9AM","11AM","1PM","3PM"],[10,20,25,15],"#f59e0b");
simple(doctorDeptChart,"pie",["Cardio","Ortho","Neuro","General"],[3,4,2,3],["#0f4c75","#3282b8","#38bdf8","#16a34a"]);
simple(patientConditionChart,"doughnut",["Stable","Critical","Recovering"],[60,20,40],["#16a34a","#dc2626","#f59e0b"]);
simple(monthlyReportChart,"bar",["Jan","Feb","Mar","Apr","May"],[420,480,510,560,600],"#0f4c75");
