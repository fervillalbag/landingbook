
export default function Title({ children, color, margin }) {
  return (
    <h2 className={`title ${color} ${margin}`}>
      {children}
    </h2>
  )
}
