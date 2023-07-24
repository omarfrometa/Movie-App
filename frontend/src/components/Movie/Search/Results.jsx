export const Results = ({ search, total }) => {
  return (
    <div className="container">
      <h2>Searching '{search}'</h2>
      <p>{total} resultados</p>
    </div>
  )
}