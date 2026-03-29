'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', g: '#22c97a', bl: '#3b9eff' }

const history = [
    { title: 'New message from Arun', target: '@priya_m', sent: '10m ago', delivered: 1, rate: '100%' },
    { title: 'You have 3 new messages', target: '@tara_j', sent: '1h ago', delivered: 1, rate: '100%' },
    { title: 'Channel invite: #design', target: '@rahul_s', sent: '2h ago', delivered: 1, rate: '100%' },
    { title: 'Honlor v1.1 is live!', target: 'All users', sent: '1d ago', delivered: 18247, rate: '61%' },
    { title: 'Your friend joined!', target: '@meera_k', sent: '1d ago', delivered: 1, rate: '100%' },
]

const chartData = Array.from({ length: 14 }, (_, i) => ({ day: `${i + 1}`, sent: Math.round(20 + Math.random() * 80) }))

export default function Notifications() {
    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Notifications</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Send and track push notifications</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
                <div>
                    {/* Chart */}
                    <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: C.t, marginBottom: 4 }}>Daily sends — last 14 days</div>
                        <div style={{ fontSize: 11, color: C.t2, marginBottom: 12 }}>Push notifications volume</div>
                        <ResponsiveContainer width="100%" height={100}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="day" hide />
                                <YAxis hide />
                                <Tooltip contentStyle={{ background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 6, fontSize: 11, color: C.t }} />
                                <Bar dataKey="sent" fill={C.bl} radius={[3, 3, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* History */}
                    <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                        <div style={{ padding: '14px 16px', borderBottom: `1px solid ${C.b}`, fontSize: 13, fontWeight: 500, color: C.t }}>Sent history</div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: C.bg4 }}>
                                    {['Title', 'Target', 'Sent at', 'Delivered', 'Open rate'].map(h => (
                                        <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((n, i) => (
                                    <tr key={i} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                        <td style={{ padding: '9px 14px', fontSize: 12.5, fontWeight: 500, color: C.t }}>{n.title}</td>
                                        <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.p2 }}>{n.target}</td>
                                        <td style={{ padding: '9px 14px', fontSize: 11, color: C.t2 }}>{n.sent}</td>
                                        <td style={{ padding: '9px 14px', fontSize: 12, color: C.t }}>{n.delivered.toLocaleString()}</td>
                                        <td style={{ padding: '9px 14px', fontSize: 12, color: C.g }}>{n.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Send panel */}
                <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16, height: 'fit-content' }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.t, marginBottom: 14 }}>Send notification</div>
                    <div style={{ fontSize: 11, color: C.t2, marginBottom: 5 }}>Title</div>
                    <input placeholder="Notification title" style={{ width: '100%', background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 7, padding: '8px 10px', color: C.t, fontSize: 12, marginBottom: 10 }} />
                    <div style={{ fontSize: 11, color: C.t2, marginBottom: 5 }}>Message</div>
                    <textarea placeholder="Message body..." style={{ width: '100%', background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 7, padding: '8px 10px', color: C.t, fontSize: 12, marginBottom: 10, height: 70, resize: 'none' }} />
                    <div style={{ fontSize: 11, color: C.t2, marginBottom: 5 }}>Target</div>
                    <select style={{ width: '100%', background: C.bg4, border: `1px solid ${C.b}`, borderRadius: 7, padding: '8px 10px', color: C.t2, fontSize: 12, marginBottom: 16 }}>
                        <option>All users (18,247)</option>
                        <option>Specific user ID</option>
                        <option>Inactive users (7d+)</option>
                        <option>New users (last 7d)</option>
                    </select>
                    <div style={{ padding: '10px 12px', background: C.bg4, borderRadius: 8, border: `1px solid ${C.b}`, marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: C.t2, marginBottom: 6 }}>Preview</div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: C.t }}>Honlor</div>
                        <div style={{ fontSize: 11, color: C.t2 }}>Notification title</div>
                        <div style={{ fontSize: 10, color: C.t3, marginTop: 2 }}>now</div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: 8, background: C.p, textAlign: 'center', fontSize: 13, fontWeight: 500, color: '#fff', cursor: 'pointer' }}>Send now</div>
                </div>
            </div>
        </div>
    )
}