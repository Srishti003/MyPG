import {
  Food24Regular,
  Megaphone24Regular,
  LockClosed24Regular
} from '@fluentui/react-icons'
import { NavLink } from 'react-router-dom'

const styles = {
  nav: {
    width: 60,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: 12,
    background: '#f5f5f5',
    height: '100vh'
  },
  link: {
    marginBottom: 20,
    color: '#333'
  }
}


export default function SideNav() {
  return (
    <div style={styles.nav}>
      <NavLink to="/" style={styles.link}>
        <Food24Regular />
      </NavLink>

      <NavLink to="/updates" style={styles.link}>
        <Megaphone24Regular />
      </NavLink>

      <NavLink to="/admin" style={{ ...styles.link, marginTop: 'auto' }}>
        <LockClosed24Regular />
      </NavLink>
    </div>
  )
}

