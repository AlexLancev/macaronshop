import { Button } from "@/shared/ui/components/Button";
import Image from "next/image";

export default function CorporateGifts() {
	return (
		<div className="flex items-center justify-center gap-6">
			<Image
				src="/images/corporate-gifts/corporate-gifts.webp"
				width={475}
				height={475}
				alt=""
			/>
			<div className="w-1/2">
				<h1 className="text-3xl font-bold mb-4">Корпоративные подарки оптом и в розницу</h1>
				<p className="text-2xl text-gray-500 mb-8">Брендированные макаронс и эклеры — лучший подарок для коллег и контрагентов. Мы приготовим пирожные поштучно от 70 руб., в наборах от 350 руб., сделаем индивидуальный дизайн и нанесём ваши лого.</p>
				<Button type="button" className="px-6 py-8 text-xl">Скачать полный каталог</Button>
			</div>
		</div>
	);
}
