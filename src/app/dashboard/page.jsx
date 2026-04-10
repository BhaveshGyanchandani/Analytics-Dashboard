import PowerBIEmbed from "@/components/PowerBIEmbed";

const POWER_BI_URL = "https://app.powerbi.com/reportEmbed?reportId=ebaa25b4-1a5e-44d2-8b1b-79d830b7272f&autoAuth=true&ctid=4122e40d-e6ae-4a6d-b5b5-e13276b00456"

export default function DashboardPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "16px", fontSize: "20px", fontWeight: 600 }}>
        Sales Dashboard
      </h1>
      <PowerBIEmbed url={POWER_BI_URL} title="Sales Dashboard" />
    </main>
  );
}

{/* <iframe title="Recording_march_22176" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=ebaa25b4-1a5e-44d2-8b1b-79d830b7272f&autoAuth=true&ctid=4122e40d-e6ae-4a6d-b5b5-e13276b00456" frameborder="0" allowFullScreen="true"></iframe> */}