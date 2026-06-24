import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const revenueData = [
  { month: "Jan", current: 52000, prev: 41000 },
  { month: "Feb", current: 58000, prev: 45000 },
  { month: "Mar", current: 63000, prev: 52000 },
  { month: "Apr", current: 71000, prev: 55000 },
  { month: "May", current: 78000, prev: 61000 },
  { month: "Jun", current: 84210, prev: 68000 },
];

const trafficData = [
  { name: "Organic", value: 42, color: "#6366f1" },
  { name: "Direct", value: 28, color: "#10b981" },
  { name: "Referral", value: 18, color: "#f97316" },
  { name: "Social", value: 12, color: "#94a3b8" },
];

const topPages = [
  { path: "/pricing", visits: 28401, pct: 90 },
  { path: "/features", visits: 21034, pct: 67 },
  { path: "/blog", visits: 14882, pct: 47 },
  { path: "/docs", visits: 9210, pct: 29 },
  { path: "/changelog", visits: 4401, pct: 14 },
];

const activity = [
  { icon: "👤", color: "#ede9fe", label: "New signup", sub: "jamie@example.com joined", time: "2m ago", dot: "#6366f1" },
  { icon: "✓", color: "#d1fae5", label: "Order #4821 completed", sub: "$349.00 · Pro plan upgrade", time: "18m ago", dot: "#10b981" },
  { icon: "!", color: "#fee2e2", label: "Payment failed", sub: "Card declined · retry queued", time: "41m ago", dot: "#ef4444" },
  { icon: "$", color: "#d1fae5", label: "Payout sent", sub: "$12,400 → Bank of America", time: "2h ago", dot: "#10b981" },
];

const navItems = [
  { section: "Overview", items: [
    { icon: "▦", label: "Dashboard" },
    { icon: "↗", label: "Analytics" },
    { icon: "♟", label: "Customers" },
  ]},
  { section: "Finance", items: [
    { icon: "◈", label: "Revenue" },
    { icon: "▣", label: "Billing" },
  ]},
  { section: "System", items: [
    { icon: "⚙", label: "Settings" },
    { icon: "?", label: "Support" },
  ]},
];

const metrics = [
  { label: "Total revenue", value: "$84,210", delta: "+12.4%", up: true },
  { label: "Active users", value: "3,847", delta: "+8.1%", up: true },
  { label: "Orders", value: "1,204", delta: "−2.3%", up: false },
  { label: "Conversion", value: "3.8%", delta: "+0.4pp", up: true },
];

const fmt = (v) => "$" + (v / 1000).toFixed(0) + "k";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Inter, system-ui, sans-serif", background: "#f8fafc", color: "#0f172a", fontSize: 14 }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: "#fff", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "#6366f1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>N</span>
          </div>
          <span style={{ fontWeight: 600, fontSize: 15 }}>Nexus</span>
        </div>

        <nav style={{ padding: "12px 0", flex: 1, overflowY: "auto" }}>
          {navItems.map(({ section, items }) => (
            <div key={section}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#94a3b8", padding: "12px 20px 6px", textTransform: "uppercase" }}>
                {section}
              </div>
              {items.map(({ icon, label }) => {
                const active = activeNav === label;
                return (
                  <button
                    key={label}
                    onClick={() => setActiveNav(label)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 20px", background: active ? "#ede9fe" : "transparent",
                      border: "none", cursor: "pointer", textAlign: "left",
                      color: active ? "#6366f1" : "#64748b", fontWeight: active ? 600 : 400,
                      fontSize: 13, borderRadius: 0, transition: "background 0.1s",
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#f8fafc"; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontSize: 16, width: 18, textAlign: "center" }}>{icon}</span>
                    {label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div style={{ padding: "16px 20px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#6366f1", flexShrink: 0 }}>
            AK
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Alex Kim</div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>Admin</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Topbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Good morning, Alex</h1>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: "3px 0 0" }}>Jun 24, 2026 · Q2 report</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ background: "#d1fae5", color: "#065f46", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 99, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              Live
            </div>
            <button style={{ background: "#ede9fe", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontWeight: 600, fontSize: 13, color: "#6366f1" }}>AK</button>
          </div>
        </div>

        {/* Metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {metrics.map(({ label, value, delta, up }) => (
            <div key={label} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 24, fontWeight: 600 }}>{value}</div>
              <div style={{ fontSize: 12, marginTop: 6, color: up ? "#059669" : "#dc2626", display: "flex", alignItems: "center", gap: 3 }}>
                <span>{up ? "↑" : "↓"}</span> {delta} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14 }}>
          {/* Line chart */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px 20px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Revenue over time</span>
              <div style={{ display: "flex", gap: 14, fontSize: 11, color: "#94a3b8" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 10, height: 3, background: "#6366f1", display: "inline-block", borderRadius: 2 }} /> 2026
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 10, height: 3, background: "#10b981", display: "inline-block", borderRadius: 2 }} /> 2025
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v) => ["$" + v.toLocaleString()]} contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Line type="monotone" dataKey="current" stroke="#6366f1" strokeWidth={2} dot={{ r: 3, fill: "#6366f1" }} name="2026" />
                <Line type="monotone" dataKey="prev" stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3" dot={{ r: 3, fill: "#10b981" }} name="2025" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Traffic sources</div>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie data={trafficData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                  {trafficData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(v) => [v + "%"]} contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              {trafficData.map(({ name, value, color }) => (
                <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: color, display: "inline-block" }} />
                    {name}
                  </span>
                  <span style={{ fontWeight: 500 }}>{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {/* Activity */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 14 }}>Recent activity</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {activity.map(({ icon, color, label, sub, time, dot }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < activity.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14 }}>
                    {icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 1 }}>{sub}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "#cbd5e1", flexShrink: 0 }}>{time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top pages */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Top pages</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {topPages.map(({ path, visits, pct }) => (
                <div key={path}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748b", marginBottom: 5 }}>
                    <span style={{ fontFamily: "monospace" }}>{path}</span>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>{visits.toLocaleString()}</span>
                  </div>
                  <div style={{ height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: pct + "%", background: "#6366f1", borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}