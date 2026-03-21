export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <main className="d-flex justify-content-center align-items-center h-100">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </main>
  );
}
