"use srtict";

// Elements
const statsChart = document.querySelectorAll(".stats__vector-item");
const statsValueHolder = document.querySelectorAll(".stats__vector-data");
const days = document.querySelectorAll(".stats__day");

// Get JSON file

const getData = async () => {
  try {
    const req = await fetch("/data.json");
    const data = await req.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Render Data to chart

const renderChart = async () => {
  const data = await getData();
  statsValueHolder.forEach((e, i) => {
    // render amount and day
    e.textContent = `$${data[i].amount}`;
    days[i].textContent = data[i].day;

    // dynamic chart width using data
  });
};
renderChart();

// Show stats

statsChart.forEach((e, i) => {
  e.addEventListener("mouseenter", () => {
    statsValueHolder[i].classList.toggle("d-none");
  });

  e.addEventListener("mouseout", () => {
    statsValueHolder[i].classList.toggle("d-none");
  });
});
