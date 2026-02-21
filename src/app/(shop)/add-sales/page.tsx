import AdditionallyList from "./components/AdditionallyList";

export default function AddSalesPage() {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="mb-10 text-center font-semibold text-4xl">
          Дополнительные товары
        </h1>
				<AdditionallyList />
      </div>
    </section>
  )
}