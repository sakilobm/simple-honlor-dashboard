'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const C = { bg2: '#111118', b: '#2a2a38', t: '#e8e8f0', t2: '#8888aa', t3: '#4a4a66', p: '#7c6aff', p2: '#9b8cff', p3: '#1a1730', r: '#ff4d6a', r2: '#3d0d1a' }

const navItems = [
    { type: 'section', label: 'Main' },
    { label: 'Overview', href: '/overview' },
    { label: 'Users', href: '/users' },
    { label: 'Messages', href: '/messages' },
    { label: 'Channels', href: '/channels' },
    { type: 'section', label: 'Monetise' },
    { label: 'Ads', href: '/ads' },
    { type: 'section', label: 'Safety' },
    { label: 'Reports', href: '/reports', badge: 7 },
    { type: 'section', label: 'System' },
    { label: 'Notifications', href: '/notifications' },
    { label: 'Server Health', href: '/health' },
]

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside style={{ width: 200, minWidth: 200, background: C.bg2, borderRight: `1px solid ${C.b}`, display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'sticky', top: 0, height: '100vh' }}>
            <div style={{ padding: '16px', borderBottom: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, background: C.p, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0 }}>H</div>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.t }}>Honlor</span>
                <span style={{ fontSize: 9, background: C.p3, color: C.p2, padding: '1px 6px', borderRadius: 4 }}>admin</span>
            </div>
            <nav style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
                {navItems.map((item, i) => {
                    if (item.type === 'section') return (
                        <div key={i} style={{ fontSize: 10, color: C.t3, padding: '10px 16px 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</div>
                    )
                    const active = pathname === item.href || pathname.startsWith(item.href + '/')
                    return (
                        <Link key={item.href} href={item.href!} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 16px', fontSize: 12.5, color: active ? C.p2 : C.t2, background: active ? C.p3 : 'transparent', borderLeft: active ? `2px solid ${C.p}` : '2px solid transparent', transition: 'all 0.15s' }}>
                            <span style={{ flex: 1 }}>{item.label}</span>
                            {item.badge && <span style={{ fontSize: 10, background: C.r2, color: C.r, padding: '1px 6px', borderRadius: 10 }}>{item.badge}</span>}
                        </Link>
                    )
                })}
            </nav>
            <div style={{ padding: '12px 16px', borderTop: `1px solid ${C.b}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.p, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: '#fff' }}>SK</div>
                <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: C.t }}>Sakil</div>
                    <div style={{ fontSize: 10, color: C.t2 }}>Super admin</div>
                </div>
            </div>
        </aside>
    )
}