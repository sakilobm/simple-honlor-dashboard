'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', g: '#22c97a', g2: '#0d3d24', r: '#ff4d6a', r2: '#3d0d1a', a: '#f5a623', a2: '#3d2800', bl: '#3b9eff' }
const card = { background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16 }

const ads = [
    { name: 'Honlor Pro promo', type: 'Banner', status: 'active', impressions: 840200, clicks: 18420, ctr: '2.19%' },
    { name: 'Summer special', type: 'Interstitial', status: 'active', impressions: 620100, clicks: 11800, ctr: '1.90%' },
    { name: 'Friend invite push', type: 'Banner', status: 'active', impressions: 380000, clicks: 9200, ctr: '2.42%' },
    { name: 'App update notice', type: 'Banner', status: 'paused', impressions: 120000, clicks: 2100, ctr: '1.75%' },
    { name: 'Channel feature', type: 'Interstitial', status: 'active', impressions: 290500, clicks: 5690, ctr: '1.96%' },
    { name: 'Privacy campaign', type: 'Banner', status: 'paused', impressions: 148000, clicks: 980, ctr: '0.66%' },
]

const chartData = Array.from({ length: 14 }, (_, i) => ({ day: `${i + 1}`, impressions: Math.round(150000 + Math.random() * 100000), clicks: Math.round(3000 + Math.random() * 2000) }))

const metrics = [
    { label: 'Total impressions', value: '2.4M', change: '+18%' },
    { label: 'Total clicks', value: '48,210', change: '+9%' },
    { label: 'Avg CTR', value: '2.01%', change: '+0.3%' },
    { label: 'Active ads', value: '4', change: 'stable' },
]

export default function Ads() {
    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Ads Manager</div>
                    <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Manage and track ad campaigns</div>
                </div>
                <div style={{ padding: '8px 16px', border: `1px solid ${C.p}`, borderRadius: 8, color: C.p2, fontSize: 12, cursor: 'pointer', background: C.p3 }}>+ New ad</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }}>
                {metrics.map(m => (
                    <div key={m.label} style={card}>
                        <div style={{ fontSize: 10, color: C.t2, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{m.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 600, color: C.t, marginBottom: 4 }}>{m.value}</div>
                        <div style={{ fontSize: 11, color: C.g }}>{m.change}</div>
                    </div>
                ))}
            </div>

            <div style={{ ...card, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>Impressions vs clicks — last 14 days</div>
                    <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
                        <span style={{ color: C.p }}>■ Impressions</span>
                        <span style={{ color: C.bl }}>■ Clicks</span>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                    <LineChart data={chartData}>
                        <XAxis dataKey="day" hide />
                        <YAxis hide />
                        <Tooltip contentStyle={{ background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 6, fontSize: 11, color: C.t }} />
                        <Line type="monotone" dataKey="impressions" stroke={C.p} strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="clicks" stroke={C.bl} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['Name', 'Type', 'Status', 'Impressions', 'Clicks', 'CTR', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ads.map((ad) => (
                            <tr key={ad.name} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '9px 14px', fontSize: 12.5, fontWeight: 500, color: C.t }}>{ad.name}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.t2 }}>{ad.type}</td>
                                <td style={{ padding: '9px 14px' }}>
                                    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, background: ad.status === 'active' ? '#0d3d24' : '#1e1e28', color: ad.status === 'active' ? C.g : C.t2 }}>{ad.status}</span>
                                </td>
                                <td style={{ padding: '9px 14px', fontSize: 12, color: C.t }}>{ad.impressions.toLocaleString()}</td>
                                <td style={{ padding: '9px 14px', fontSize: 12, color: C.t }}>{ad.clicks.toLocaleString()}</td>
                                <td style={{ padding: '9px 14px', fontSize: 12, color: C.p2, fontWeight: 500 }}>{ad.ctr}</td>
                                <td style={{ padding: '9px 14px' }}>
                                    <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
                                        <span style={{ color: C.p2, cursor: 'pointer' }}>edit</span>
                                        <span style={{ color: ad.status === 'active' ? C.a : C.g, cursor: 'pointer' }}>{ad.status === 'active' ? 'pause' : 'resume'}</span>
                                        <span style={{ color: C.r, cursor: 'pointer' }}>delete</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}