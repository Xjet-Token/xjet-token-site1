import React from "react";

export default function XJETLandingPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#facc15" }}>XJET Token</h1>
        <p style={{ color: "#ccc", fontSize: "1.2rem" }}>Welcome to the official XJET Token project on Binance Smart Chain. Trade securely, hold confidently.</p>
        <div style={{ marginTop: "2rem" }}>
          <a href="#" style={{ backgroundColor: "#facc15", color: "#000", padding: "1rem 2rem", borderRadius: "1rem", textDecoration: "none", marginRight: "1rem" }}>Buy XJET</a>
          <a href="https://bscscan.com/token/0x9E4Ee280787104B53c752a78690e350f7dA53B69" target="_blank" style={{ color: "#facc15", border: "1px solid #facc15", padding: "1rem 2rem", borderRadius: "1rem", textDecoration: "none" }}>View on BscScan</a>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#1f2937", borderRadius: "1rem", padding: "2rem" }}>
          <h2 style={{ color: "#facc15", fontSize: "1.5rem" }}>Tokenomics</h2>
          <ul style={{ color: "#ccc", paddingLeft: "1rem" }}>
            <li>Total Supply: 1,000,000,000 XJET</li>
            <li>Decimals: 18</li>
            <li>Symbol: XJET</li>
            <li>Contract: 0x9E4Ee280787104B53c752a78690e350f7dA53B69</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#1f2937", borderRadius: "1rem", padding: "2rem" }}>
          <h2 style={{ color: "#facc15", fontSize: "1.5rem" }}>About XJET</h2>
          <p style={{ color: "#ccc" }}>XJET is a utility token launched on Binance Smart Chain with a focus on community, accessibility, and fair distribution. Join the XJET ecosystem today and be part of the movement.</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", color: "#666", marginTop: "4rem" }}>
        &copy; {new Date().getFullYear()} XJET Token. All rights reserved.
      </footer>
    </main>
  );
}