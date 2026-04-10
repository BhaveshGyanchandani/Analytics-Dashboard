export default function PowerBIEmbed({ url, title = "Dashboard" }) {
  return (
    <div style={{
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
      height: "85vh",
    }}>
      <iframe
        title={title}
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}