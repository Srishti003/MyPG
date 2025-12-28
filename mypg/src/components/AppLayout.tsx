import SideNav from './SideNav'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav />
      <main style={{ flex: 1, padding: 16 }}>{children}</main>
    </div>
  )
}
