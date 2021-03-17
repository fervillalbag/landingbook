
export default function Blockquote({ children, type }) {
  return (
    <span className={`blockquote ${type}`}>
      {children}
    </span>
  )
}
