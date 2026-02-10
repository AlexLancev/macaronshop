import OrderComposer from "../../components/OrderComposer";


export default function OrderComposerPage() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-10 text-center font-semibold text-4xl">Выберите вкусы</h1>
				<OrderComposer />
			</div>
		</section>
	)
}