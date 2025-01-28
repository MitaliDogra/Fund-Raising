import React from "react";

function Dashboard() {
  // Static data
  const totalFunding = "$50M";
  const sectorData = [
    { sector: "Tech", amount: "$20M" },
    { sector: "Healthcare", amount: "$15M" },
    { sector: "E-commerce", amount: "$10M" },
    { sector: "Fintech", amount: "$5M" },
  ];
  const fundingTrends = [
    { month: "January", amount: "$5M" },
    { month: "February", amount: "$8M" },
    { month: "March", amount: "$12M" },
    { month: "April", amount: "$15M" },
  ];
  const topStartups = [
    { name: "Startup A", funding: "$10M" },
    { name: "Startup B", funding: "$8M" },
    { name: "Startup C", funding: "$7M" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Fundraising Dashboard
      </h1>

      {/* Total Funding */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Total Funding</h2>
        <p style={{ fontSize: "16px" }}>{totalFunding}</p>
      </div>

      {/* Sector-Wise Distribution */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Sector-Wise Distribution</h2>
        <ul>
          {sectorData.map((sector, index) => (
            <li key={index}>
              {sector.sector}: {sector.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Funding Trends */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Funding Trends Over Time</h2>
        <ul>
          {fundingTrends.map((trend, index) => (
            <li key={index}>
              {trend.month}: {trend.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Top-Performing Startups */}
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Top-Performing Startups</h2>
        <ul>
          {topStartups.map((startup, index) => (
            <li key={index}>
              {startup.name}: {startup.funding}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
