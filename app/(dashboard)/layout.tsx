import Sidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0f' }}>
            <Sidebar />
            <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
                {children}
            </main>
        </div>
    )
}