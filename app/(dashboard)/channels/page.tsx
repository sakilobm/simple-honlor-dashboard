'use client'
import { useState } from 'react'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', bl: '#3b9eff', bl2: '#0d2a3d', r: '#ff4d6a' }

const channels = [
    { name: '#general', type: 'public', members: 1240, messages: 48210, createdBy: '@arun_k', created: 'Jan 12' },
    { name: '#design', type: 'public', members: 320, messages: 12400, createdBy: '@priya_m', created: 'Jan 15' },
    { name: '#random', type: 'public', members: 890, messages: 31800, createdBy: '@rahul_s', created: 'Jan 12' },
    { name: '#announcements', type: 'public', members: 18247, messages: 240, createdBy: '@admin', created: 'Jan 12' },
    { name: '#dev-talk', type: 'private', members: 44, messages: 8900, createdBy: '@vivek_n', created: 'Feb 3' },
    { name: '#secret-project', type: 'private', members: 12, messages: 2100, createdBy: '@meera_k', created: 'Mar 1' },
]

export default function Channels() {
    const [tab, setTab] = useState('public')
    const filtered = channels.filter(c => c.type === tab)

    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Channels</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>All channels and direct messages</div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'center' }}>
                <input placeholder="Search channels..." style={{ flex: 1, background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 8, padding: '8px 12px', color: C.t, fontSize: 12 }} />
                <div style={{ display: 'flex', gap: 2 }}>
                    {['public', 'private'].map(t => (
                        <button key={t} onClick={() => setTab(t)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${t === tab ? C.b : 'transparent'}`, background: t === tab ? C.bg4 : 'transparent', color: t === tab ? C.t : C.t2, fontSize: 12, textTransform: 'capitalize' }}>{t}</button>
                    ))}
                </div>
            </div>

            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['Channel', 'Type', 'Members', 'Messages', 'Created by', 'Created', ''].map(h => (
                                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((ch) => (
                            <tr key={ch.name} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '10px 14px', fontSize: 13, fontWeight: 500, color: C.t }}>{ch.name}</td>
                                <td style={{ padding: '10px 14px' }}>
                                    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, background: ch.type === 'public' ? C.bl2 : C.p3, color: ch.type === 'public' ? C.bl : C.p2 }}>{ch.type}</span>
                                </td>
                                <td style={{ padding: '10px 14px', fontSize: 12, color: C.t }}>{ch.members.toLocaleString()}</td>
                                <td style={{ padding: '10px 14px', fontSize: 12, color: C.t2 }}>{ch.messages.toLocaleString()}</td>
                                <td style={{ padding: '10px 14px', fontSize: 11.5, color: C.p2 }}>{ch.createdBy}</td>
                                <td style={{ padding: '10px 14px', fontSize: 11.5, color: C.t2 }}>{ch.created}</td>
                                <td style={{ padding: '10px 14px' }}>
                                    <div style={{ display: 'flex', gap: 10, fontSize: 11 }}>
                                        <span style={{ color: C.p2, cursor: 'pointer' }}>members</span>
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