'use client'
import { useState } from 'react'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p2: '#9b8cff', r: '#ff4d6a', r2: '#3d0d1a', a: '#f5a623', a2: '#3d2800' }

const messages = [
    { initials: 'AK', color: '#7c6aff', name: 'Arun K.', channel: '#general', content: 'Hey guys what is happening tonight?', time: '2m ago' },
    { initials: 'PM', color: '#22c97a', name: 'Priya M.', channel: '#design', content: 'Can someone review the new screens I uploaded?', time: '5m ago' },
    { initials: 'RS', color: '#3b9eff', name: 'Rahul S.', channel: '#random', content: 'lol this is so funny', time: '8m ago' },
    { initials: 'TJ', color: '#f5a623', name: 'Tara J.', channel: '@meera_k', content: 'Did you get my message yesterday?', time: '15m ago' },
    { initials: 'VN', color: '#ff4d6a', name: 'Vivek N.', channel: '#announcements', content: 'Buy cheap followers — click here NOW!!!', time: '22m ago' },
    { initials: 'MK', color: '#9b8cff', name: 'Meera K.', channel: '#design', content: 'Yes I saw it! Looks great, just one thing...', time: '30m ago' },
]

export default function Messages() {
    const [search, setSearch] = useState('')
    const [tab, setTab] = useState('all')

    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Messages</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Moderate messages across all channels</div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by keyword, user or channel..." style={{ flex: 1, background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 8, padding: '8px 12px', color: C.t, fontSize: 12 }} />
                <div style={{ display: 'flex', gap: 2 }}>
                    {['all', 'reported', 'flagged'].map(t => (
                        <button key={t} onClick={() => setTab(t)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${t === tab ? C.b : 'transparent'}`, background: t === tab ? C.bg4 : 'transparent', color: t === tab ? C.t : C.t2, fontSize: 12 }}>
                            {t === 'all' ? 'All messages' : t === 'reported' ? 'Reported (7)' : 'Flagged'}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['User', 'Channel', 'Message', 'Time', ''].map(h => (
                                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {messages.filter(m => m.content.toLowerCase().includes(search.toLowerCase()) || m.name.toLowerCase().includes(search.toLowerCase())).map((m, i) => (
                            <tr key={i} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '10px 14px', whiteSpace: 'nowrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#fff', flexShrink: 0 }}>{m.initials}</div>
                                        <span style={{ fontSize: 12, fontWeight: 500, color: C.t }}>{m.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '10px 14px', fontSize: 11.5, color: C.p2 }}>{m.channel}</td>
                                <td style={{ padding: '10px 14px', fontSize: 12, color: C.t2, maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.content}</td>
                                <td style={{ padding: '10px 14px', fontSize: 11, color: C.t2, whiteSpace: 'nowrap' }}>{m.time}</td>
                                <td style={{ padding: '10px 14px', whiteSpace: 'nowrap' }}>
                                    <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
                                        <span style={{ color: C.r, cursor: 'pointer', padding: '2px 8px', border: `1px solid ${C.r2}`, borderRadius: 5 }}>delete</span>
                                        <span style={{ color: C.a, cursor: 'pointer', padding: '2px 8px', border: `1px solid ${C.a2}`, borderRadius: 5 }}>flag</span>
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