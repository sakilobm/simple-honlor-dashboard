'use client'
import { useState } from 'react'

const C = { bg3: '#18181f', bg4: '#1e1e28', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', g: '#22c97a', g2: '#0d3d24', r: '#ff4d6a', r2: '#3d0d1a' }

const users = [
    { initials: 'AK', color: '#7c6aff', name: 'Arun Kumar', email: 'arun@gmail.com', joined: 'Jan 12 2026', messages: 2841, friends: 47, lastActive: '2h ago', status: 'active' },
    { initials: 'PM', color: '#22c97a', name: 'Priya Mohan', email: 'priya@mail.com', joined: 'Feb 3 2026', messages: 1204, friends: 23, lastActive: '8m ago', status: 'active' },
    { initials: 'RS', color: '#3b9eff', name: 'Rahul Singh', email: 'rsingh@out.com', joined: 'Dec 5 2025', messages: 5611, friends: 91, lastActive: 'online', status: 'active' },
    { initials: 'TJ', color: '#f5a623', name: 'Tara Joshi', email: 'tara.j@gm.com', joined: 'Mar 1 2026', messages: 321, friends: 8, lastActive: '3d ago', status: 'active' },
    { initials: 'VN', color: '#ff4d6a', name: 'Vivek N.', email: 'vivek@nm.io', joined: 'Feb 20 2026', messages: 88, friends: 4, lastActive: '7d ago', status: 'suspended' },
    { initials: 'MK', color: '#9b8cff', name: 'Meera K.', email: 'meera@kl.co', joined: 'Jan 28 2026', messages: 3990, friends: 62, lastActive: '1h ago', status: 'active' },
]

export default function Users() {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')

    const filtered = users.filter(u => {
        const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
        const matchFilter = filter === 'all' || u.status === filter
        return matchSearch && matchFilter
    })

    return (
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: C.t }}>Users</div>
                <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>Manage all Honlor users</div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name or email..." style={{ flex: 1, background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 8, padding: '8px 12px', color: C.t, fontSize: 12 }} />
                <select value={filter} onChange={e => setFilter(e.target.value)} style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 8, padding: '8px 12px', color: C.t2, fontSize: 12 }}>
                    <option value="all">All status</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                </select>
                <div style={{ padding: '8px 14px', border: `1px solid ${C.p}`, borderRadius: 8, color: C.p2, fontSize: 12, cursor: 'pointer', background: C.p3 }}>+ Invite user</div>
            </div>

            {/* Table */}
            <div style={{ background: C.bg3, border: `1px solid ${C.b}`, borderRadius: 10, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: C.bg4 }}>
                            {['', 'User', 'Joined', 'Messages', 'Friends', 'Last active', 'Status', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, color: C.t3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((u) => (
                            <tr key={u.email} style={{ borderBottom: `1px solid ${C.b}` }} onMouseEnter={e => (e.currentTarget.style.background = C.bg4)} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '10px 14px' }}>
                                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: u.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#fff' }}>{u.initials}</div>
                                </td>
                                <td style={{ padding: '10px 14px' }}>
                                    <div style={{ fontSize: 12.5, fontWeight: 500, color: C.t }}>{u.name}</div>
                                    <div style={{ fontSize: 11, color: C.t2 }}>{u.email}</div>
                                </td>
                                <td style={{ padding: '10px 14px', fontSize: 11.5, color: C.t2 }}>{u.joined}</td>
                                <td style={{ padding: '10px 14px', fontSize: 12, color: C.t, fontWeight: 500 }}>{u.messages.toLocaleString()}</td>
                                <td style={{ padding: '10px 14px', fontSize: 12, color: C.t2 }}>{u.friends}</td>
                                <td style={{ padding: '10px 14px', fontSize: 11.5, color: u.lastActive === 'online' ? C.g : C.t2 }}>{u.lastActive}</td>
                                <td style={{ padding: '10px 14px' }}>
                                    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, background: u.status === 'active' ? C.g2 : C.r2, color: u.status === 'active' ? C.g : C.r }}>{u.status}</span>
                                </td>
                                <td style={{ padding: '10px 14px' }}>
                                    <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
                                        <span style={{ color: C.p2, cursor: 'pointer' }}>view</span>
                                        <span style={{ color: u.status === 'active' ? C.r : C.g, cursor: 'pointer' }}>{u.status === 'active' ? 'suspend' : 'unsuspend'}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.b}` }}>
                    <div style={{ fontSize: 11, color: C.t2 }}>Showing {filtered.length} of 18,247 users</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                        {['←', '1', '2', '3', '...', '→'].map(p => (
                            <span key={p} style={{ padding: '3px 8px', borderRadius: 5, fontSize: 11, cursor: 'pointer', background: p === '1' ? C.p3 : 'transparent', color: p === '1' ? C.p2 : C.t2, border: `1px solid ${p === '1' ? C.p : C.b}` }}>{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}