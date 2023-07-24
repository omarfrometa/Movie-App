export const Loading = () => {

  return (
    <div className="d-flex justify-content-center mt-5" style={{ minHeight: '80vh' }}>
      <div className="spinner-border spinner-border-lg" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}