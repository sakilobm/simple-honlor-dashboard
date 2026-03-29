'use client'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const C = { bg2: '#111118', bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', g: '#22c97a', g2: '#0d3d24', r: '#ff4d6a', r2: '#3d0d1a', a: '#f5a623' }
const card = { background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16 }

const growthData = Array.from({ length: 30 }, (_, i) => ({ day: `${i + 1}`, users: 15000 + i * 80 + Math.random() * 200 }))
const msgData = Array.from({ length: 14 }, (_, i) => ({ day: `${i + 1}`, msgs: 60000 + Math.random() * 40000 }))

const metrics = [
    { label: 'Total users', value: '18,247', change: '+12.4%', up: true },
    { label: 'DAU', value: '3,891', change: '+8.1%', up: true },
    { label: 'Messages today', value: '94,210', change: '+22%', up: true },
    { label: 'Active channels', value: '1,432', change: 'stable', up: null },
    { label: 'New signups 7d', value: '847', change: '-3.2%', up: false },
]

const recentUsers = [
    { initials: 'AK', color: '#7c6aff', name: 'Arun Kumar', time: '2m ago' },
    { initials: 'PM', color: '#22c97a', name: 'Priya Mohan', time: '8m ago' },
    { initials: 'RS', color: '#3b9eff', name: 'Rahul Singh', time: '15m ago' },
    { initials: 'TJ', color: '#f5a623', name: 'Tara Joshi', time: '31m ago' },
    { initials: 'VN', color: '#ff4d6a', name: 'Vivek N.', time: '1h ago' },
]

const reports = [
    { issue: 'Spam messages', user: '@user_92', time: '2h ago' },
    { issue: 'Harassment', user: '@mk_photo', time: '5h ago' },
    { issue: 'Fake profile', user: '@john99', time: '1d ago' },
    { issue: 'Nudity in channel', user: '#random', time: '1d ago' },
]

const health = [
    { name: 'API server', val: '99.9% uptime', ok: true },
    { name: 'Supabase DB', val: '12ms avg', ok: true },
    { name: 'Tinode WS', val: '1,240 conns', ok: true },
    { name: 'Storage', val: '4.2 / 8 GB', ok: false },
    { name: 'FCM push', val: '98.1% delivery', ok: true },
]

export default function Overview() {
    return (
        <div style={{ padding: 24 }}>
            {/* Header */}
            <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Overview</div>
                    <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Welcome back, Sakil</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, padding: '5px 12px', borderRadius: 20, background: C.g2, color: C.g, border: `1px solid rgba(34,201,122,.2)` }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.g }} />
                    All systems operational
                </div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginBottom: 20 }}>
                {metrics.map((m) => (
                    <div key={m.label} style={{ ...card, cursor: 'pointer' }}>
                        <div style={{ fontSize: 10, color: C.t2, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{m.label}</div>
                        <div style={{ fontSize: 22, fontWeight: 600, color: C.t, marginBottom: 4 }}>{m.value}</div>
                        <div style={{ fontSize: 11, color: m.up === true ? C.g : m.up === false ? C.r : C.t2 }}>{m.change}</div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12, marginBottom: 20 }}>
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>User growth — last 30 days</div>
                            <div style={{ fontSize: 11, color: C.t2 }}>Cumulative registrations</div>
                        </div>
                        <div style={{ fontSize: 11, color: C.g }}>+2,140 this month</div>
                    </div>
                    <ResponsiveContainer width="100%" height={110}>
                        <AreaChart data={growthData}>
                            <defs>
                                <linearGradient id="ug" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={C.p} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={C.p} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" hide />
                            <YAxis hide />
                            <Tooltip contentStyle={{ background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 6, fontSize: 11, color: C.t }} />
                            <Area type="monotone" dataKey="users" stroke={C.p} strokeWidth={2} fill="url(#ug)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div style={card}>
                    <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>Messages / day</div>
                        <div style={{ fontSize: 11, color: C.t2 }}>Last 14 days</div>
                    </div>
                    <ResponsiveContainer width="100%" height={110}>
                        <BarChart data={msgData}>
                            <XAxis dataKey="day" hide />
                            <YAxis hide />
                            <Tooltip contentStyle={{ background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 6, fontSize: 11, color: C.t }} />
                            <Bar dataKey="msgs" fill={C.p} radius={[3, 3, 0, 0]} opacity={0.85} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {/* Recent signups */}
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>Recent signups</div>
                        <div style={{ fontSize: 11, color: C.t2 }}>Live feed</div>
                    </div>
                    {recentUsers.map((u) => (
                        <div key={u.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: `1px solid ${C.b}` }}>
                            <div style={{ width: 26, height: 26, borderRadius: '50%', background: u.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#fff', flexShrink: 0 }}>{u.initials}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 12, fontWeight: 500, color: C.t }}>{u.name}</div>
                                <div style={{ fontSize: 10, color: C.t2 }}>{u.time}</div>
                            </div>
                            <span style={{ fontSize: 9, background: C.p3, color: C.p2, padding: '1px 6px', borderRadius: 4 }}>new</span>
                        </div>
                    ))}
                </div>

                {/* Pending reports */}
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>Pending reports</div>
                        <span style={{ fontSize: 10, background: C.r2, color: C.r, padding: '2px 8px', borderRadius: 10 }}>7 open</span>
                    </div>
                    {reports.map((r) => (
                        <div key={r.issue} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: `1px solid ${C.b}` }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 12, fontWeight: 500, color: C.t }}>{r.issue}</div>
                                <div style={{ fontSize: 10, color: C.t2 }}>{r.user} · {r.time}</div>
                            </div>
                            <span style={{ fontSize: 9, background: C.r2, color: C.r, padding: '1px 6px', borderRadius: 4 }}>review</span>
                        </div>
                    ))}
                </div>

                {/* System status */}
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t }}>System status</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, padding: '2px 8px', borderRadius: 10, background: C.g2, color: C.g }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.g }} />All OK
                        </div>
                    </div>
                    {health.map((h) => (
                        <div key={h.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${C.b}`, fontSize: 12 }}>
                            <span style={{ color: C.t2 }}>{h.name}</span>
                            <span style={{ color: h.ok ? C.g : C.a, fontWeight: 500, fontSize: 11 }}>{h.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}