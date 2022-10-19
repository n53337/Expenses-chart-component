"use srtict";

const App = () => {
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
      alert(err);
    }
  };

  // Render chart using JSON data
  const renderChart = async () => {
    const data = await getData();
    statsChart.forEach((e, i) => {
      // render amount and day
      statsValueHolder[i].textContent = `$${data[i].amount}`;
      days[i].textContent = data[i].day;

      // dynamic chart bar width using data
      e.style.height = `${data[i].amount / 5}rem`;
    });

    // Highlight today's chart
    const currDate = new Date().getDay();
    if (!currDate) {
      statsChart[statsChart.length - 1].style.background = "var(--clr-cyan)";
    } else {
      statsChart[currDate - 1].style.background = "var(--clr-cyan)";
    }
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
};

window.addEventListener("load", App);
