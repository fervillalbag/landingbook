
export default function Heading({ children, color, size, margin }) {
  return (
    <h1 className={`heading ${color} ${size} ${margin}`}>{children}</h1>
  )
}
