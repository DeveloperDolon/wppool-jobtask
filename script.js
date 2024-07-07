const tableBody = document.querySelector("#table-body");

const addingRowTable = async () => {
  let result;
  try {
    const response = await fetch("./public/tableData.json");
    result = await response.json();
  } catch (err) {
    console.error(err);
  }

  // adding dynamic row to the table==============>
  result?.forEach((data, idx) => {
    const row = document.createElement("tr");
    row.style.backgroundColor = idx % 2 === 0 ? "#ededed" : "white";

    const cellCompany = document.createElement("td");
    cellCompany.textContent = data.company;
    cellCompany.classList.add("rounded-l-md");
    row.appendChild(cellCompany);

    const cellTicker = document.createElement("td");
    cellTicker.textContent = data.ticker;
    row.appendChild(cellTicker);

    const cellVertical = document.createElement("td");
    cellVertical.textContent = data.vertical;
    row.appendChild(cellVertical);

    const cellPrice = document.createElement("td");
    cellPrice.textContent = "$" + data.price;
    row.appendChild(cellPrice);

    const cellMarketCap = document.createElement("td");
    cellMarketCap.textContent = "$" + data.marketCapB;
    row.appendChild(cellMarketCap);

    const cellRevenueGrowth = document.createElement("td");
    cellRevenueGrowth.textContent = data.revenueGrowth;
    row.appendChild(cellRevenueGrowth);

    const cellGrossMargin = document.createElement("td");
    cellGrossMargin.textContent = data.grossMargin;
    row.appendChild(cellGrossMargin);

    const cellEvRevenue = document.createElement("td");
    cellEvRevenue.textContent = data.evRevenue;
    row.appendChild(cellEvRevenue);

    const cellYtdPerformance = document.createElement("td");
    cellYtdPerformance.textContent = data.ytdPerformance;
    cellYtdPerformance.classList.add("rounded-r-md", "md:py-2", "py-1");
    row.appendChild(cellYtdPerformance);

    tableBody.appendChild(row);
  });
};
// call to function for adding rows on the table dynamically
addingRowTable();

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const navBar = document.querySelector("#nav-bar");
  const navBtns = document.querySelectorAll("#nav-btn");
  const hamberger = document.querySelector("#hambarger");

  if (scrollTop > 1) {
    navBar.classList.add("bg-white", "z-50", "shadow-lg", "shadow-white");
    hamberger.classList.remove("text-white");
    navBtns.forEach((element) => {
      element.classList.remove("border-white", "text-white");
      element.classList.add("border-black");
    });
  }
  if (scrollTop === 0) {
    navBar.classList.remove("bg-white", "shadow-lg", "shadow-white");
    hamberger.classList.add("text-white");
    navBtns.forEach((element) => {
      element.classList.add("border-white", "text-white");
    });
  }
});
