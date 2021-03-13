
export default function TabButton({ children, active }) {
  return (
    <button className={
      active ? 'tab-button active' : 'tab-button'
    }>
      {children}
    </button>
  )
}
