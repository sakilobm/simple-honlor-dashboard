'use client'
import { useState } from 'react'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p2: '#9b8cff', g: '#22c97a', g2: '#0d3d24', r: '#ff4d6a', r2: '#3d0d1a', a: '#f5a623', a2: '#3d2800' }

const reports = [
    { reported: '@user_92', reason: 'Spam messages', by: '@priya_m', time: '2h ago', status: 'pending' },
    { reported: '@mk_photo', reason: 'Harassment', by: '@arun_k', time: '5h ago', status: 'pending' },
    { reported: '@john99', reason: 'Fake profile', by: '@tara_j', time: '1d ago', status: 'pending' },
    { reported: '#random-ch', reason: 'Nudity in channel', by: '@rahul_s', time: '1d ago', status: 'pending' },
    { reported: '@seller22', reason: 'Scam link', by: '@meera_k', time: '2d ago', status: 'pending' },
    { reported: '@anon_404', reason: 'Abusive language', by: '@vivek_n', time: '2d ago', status: 'pending' },
    { reported: '@spam_bot', reason: 'Repeated spam', by: 'system', time: '3d ago', status: 'pending' },
]

const log = [
    { action: 'suspended', target: '@bad_user', by: 'admin', time: '1d ago' },
    { action: 'warned', target: '@rude_12', by: 'admin', time: '2d ago' },
    { action: 'dismissed', target: '@ok_user', by: 'admin', time: '3d ago' },
]

export default function Reports() {
    const [data, setData] = useState(reports)

    const handleAction = (index: number, action: string) => {
        setData(d => d.filter((_, i) => i !== index))
    }

    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Reports & Moderation</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Review and act on user reports</div>
            </div>

            {/* Summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 20 }}>
                {[['Open reports', data.length.toString(), C.r], ['Resolved today', '12', C.g], ['Avg resolve time', '4.2h', C.t2]].map(([l, v, c]) => (
                    <div key={l} style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, padding: 16 }}>
                        <div style={{ fontSize: 10, color: C.t2, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{l}</div>
                        <div style={{ fontSize: 22, fontWeight: 600, color: c as string }}>{v}</div>
                    </div>
                ))}
            </div>

            {/* Reports table */}
            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ padding: '14px 16px', borderBottom: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.t, flex: 1 }}>Pending reports</div>
                    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 10, background: C.r2, color: C.r }}>{data.length} need action</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['Reported user', 'Reason', 'Reported by', 'Time', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((r, i) => (
                            <tr key={i} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '9px 14px', fontSize: 12.5, fontWeight: 500, color: C.t }}>{r.reported}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.t2 }}>{r.reason}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11.5, color: C.p2 }}>{r.by}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11, color: C.t2 }}>{r.time}</td>
                                <td style={{ padding: '9px 14px' }}>
                                    <div style={{ display: 'flex', gap: 6, fontSize: 11 }}>
                                        <span onClick={() => handleAction(i, 'remove')} style={{ color: C.r, cursor: 'pointer', padding: '2px 8px', border: `1px solid ${C.r2}`, borderRadius: 5 }}>remove</span>
                                        <span onClick={() => handleAction(i, 'warn')} style={{ color: C.a, cursor: 'pointer', padding: '2px 8px', border: `1px solid ${C.a2}`, borderRadius: 5 }}>warn</span>
                                        <span onClick={() => handleAction(i, 'dismiss')} style={{ color: C.t2, cursor: 'pointer', padding: '2px 8px', border: `1px solid ${C.b}`, borderRadius: 5 }}>dismiss</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Moderation log */}
            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ padding: '14px 16px', borderBottom: `1px solid ${C.b}`, fontSize: 13, fontWeight: 500, color: C.t }}>Moderation log</div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['Action', 'Target', 'By', 'Time'].map(h => (
                                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {log.map((l, i) => (
                            <tr key={i} style={{ borderBottom: `1px solid ${C.b}` }}>
                                <td style={{ padding: '9px 14px' }}>
                                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 10, background: l.action === 'suspended' ? C.r2 : l.action === 'warned' ? C.a2 : '#1e1e28', color: l.action === 'suspended' ? C.r : l.action === 'warned' ? C.a : C.t2 }}>{l.action}</span>
                                </td>
                                <td style={{ padding: '9px 14px', fontSize: 12, color: C.p2 }}>{l.target}</td>
                                <td style={{ padding: '9px 14px', fontSize: 12, color: C.t2 }}>{l.by}</td>
                                <td style={{ padding: '9px 14px', fontSize: 11, color: C.t2 }}>{l.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}