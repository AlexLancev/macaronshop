export type ProductType = 'Макаруны' | 'Эклеры' | 'Вафельные трубочки' | 'Десерт картошка';

export interface StorageConfig {
	bestBeforeHours?: number;
	fridge?: number;
	freezer?: number;
	prodType?: ProductType;
}

export interface StorageDetailsProps {
	config?: StorageConfig;
}

