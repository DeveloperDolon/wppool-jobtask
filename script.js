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
    row.style.borderRadius = "100px";

    const cellCompany = document.createElement("td");
    cellCompany.textContent = data.company;
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
    row.appendChild(cellYtdPerformance);

    tableBody.appendChild(row);
  });
};
addingRowTable();
