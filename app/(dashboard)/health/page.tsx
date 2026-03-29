'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', g: '#22c97a', g2: '#0d3d24', r: '#ff4d6a', r2: '#3d0d1a', a: '#f5a623', bl: '#3b9eff' }
const card = { background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16 }

const latencyData = Array.from({ length: 24 }, (_, i) => ({ h: `${i}h`, ms: 8 + Math.random() * 20 }))

const statusCards = [
    { name: 'API server', value: '99.9%', sub: 'uptime 30d', color: C.g },
    { name: 'Supabase DB', value: '12ms', sub: 'avg query', color: C.g },
    { name: 'Tinode WS', value: '1,240', sub: 'active connections', color: C.bl },
    { name: 'FCM push', value: '98.1%', sub: 'delivery rate', color: C.g },
]

const storage = [
    { label: 'Database', used: '2.1 GB', pct: 52, color: C.p },
    { label: 'Media files', used: '1.8 GB', pct: 45, color: C.bl },
    { label: 'Logs', used: '0.3 GB', pct: 7, color: C.t3 },
]

const errors = [
    { time: '2h ago', endpoint: '/api/messages', error: 'Timeout 504', count: 3 },
    { time: '5h ago', endpoint: '/api/auth/login', error: 'Invalid token 401', count: 12 },
    { time: '1d ago', endpoint: '/api/channels', error: 'DB connection', count: 1 },
    { time: '2d ago', endpoint: '/api/upload', error: 'File too large 413', count: 7 },
]

export default function Health() {
    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Server Health</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>System status and performance</div>
            </div>

            {/* Status cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }}>
                {statusCards.map(s => (
                    <div key={s.name} style={card}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.color }} />
                            <div style={{ fontSize: 10, color: C.t2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.name}</div>
                        </div>
                        <div style={{ fontSize: 22, fontWeight: 600, color: s.color, marginBottom: 2 }}>{s.value}</div>
                        <div style={{ fontSize: 11, color: C.t2 }}>{s.sub}</div>
                    </div>
                ))}
            </div>

            {/* Charts row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12, marginBottom: 16 }}>
                <div style={card}>
                    <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>API latency — last 24h</div>
                        <div style={{ fontSize: 11, color: C.g }}>avg 12ms</div>
                    </div>
                    <ResponsiveContainer width="100%" height={110}>
                        <LineChart data={latencyData}>
                            <XAxis dataKey="h" hide />
                            <YAxis hide />
                            <Tooltip contentStyle={{ background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 6, fontSize: 11, color: C.t }} formatter={(v: number) => [`${Math.round(v)}ms`, 'Latency']} />
                            <Line type="monotone" dataKey="ms" stroke={C.g} strokeWidth={1.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div style={card}>
                    <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>Storage usage</div>
                        <div style={{ fontSize: 11, color: C.a }}>4.2 / 8 GB</div>
                    </div>
                    {storage.map(s => (
                        <div key={s.label} style={{ marginBottom: 12 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                                <span style={{ color: C.t2 }}>{s.label}</span>
                                <span style={{ color: C.t }}>{s.used}</span>
                            </div>
                            <div style={{ height: 4, background: C.bg4, borderRadius: 2 }}>
                                <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 2 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Error log */}
            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ padding: '14px 16px', borderBottom: `1px solid ${C.b}`, fontSize: 13, fontWeight: 500, color: C.t }}>Error log</div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['Time', 'Endpoint', 'Error', 'Count', ''].map(h => (
                                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {errors.map((e, i) => (
                            <tr key={i} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={el => (el.currentTarget.style.background = C.bg4)} onMouseLeave={el => (el.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '9px 14px', fontSize: 11, color: C.t2 }}>{e.time}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.p2, fontFamily: 'monospace' }}>{e.endpoint}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.r }}>{e.error}</td>
                                <td style={{ padding: '9px 14px', fontSize: 12, fontWeight: 500, color: C.t }}>{e.count}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11, color: C.t2, cursor: 'pointer' }}>view trace</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}