
export default function Title({ children, color }) {
  return (
    <h2 className={
      color === 'light'
        ? 'title light'
        : 'title'
    }>
      {children}
    </h2>
  )
}
