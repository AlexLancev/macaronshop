import { Button } from "@/shared/ui/components/Button";
import Image from "next/image";

export default function CorporateGifts() {
	return (
		<div>
			<Image
				src="/images/corporate-gifts/corporate-gifts.webp"
				width={475}
				height={475}
				alt=""
			/>
			<div>
				<h1>Корпоративные подарки оптом и в розницу</h1>
				<p>Брендированные макаронс и эклеры — лучший подарок для коллег и контрагентов. Мы приготовим пирожные поштучно от 70 руб., в наборах от 350 руб., сделаем индивидуальный дизайн и нанесём ваши лого.</p>
				<Button type="button">Скачать полный каталог</Button>
			</div>
		</div>
	);
}
