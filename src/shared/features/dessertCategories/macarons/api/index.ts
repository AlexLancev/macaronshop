import axios from 'axios';
import { Macaron, MacaronFlavor } from '../types';

// Создаем экземпляр axios для макарунов
const macaronsClient = axios.create({
  baseURL: '/api/desserts/macarons',
});

export const macaronsApi = {
  // Просто получаем все макаруны
  getAllMacarons: async (): Promise<Macaron[]> => {
    const { data } = await macaronsClient.get<Macaron[]>('/');
    return data;
  },

  // Просто получаем макарун по ID
  getMacaronById: async (id: number): Promise<Macaron> => {
    const { data } = await macaronsClient.get<Macaron>(`/${id}`);
    return data;
  },

  // Просто получаем по вкусу
  getMacaronsByFlavor: async (flavor: MacaronFlavor): Promise<Macaron[]> => {
    const { data } = await macaronsClient.get<Macaron[]>(`/flavor/${flavor}`);
    return data;
  },

  // Просто получаем популярные
  getPopularMacarons: async (): Promise<Macaron[]> => {
    const { data } = await macaronsClient.get<Macaron[]>('/popular');
    return data;
  },

  // Поиск по названию
  searchMacarons: async (query: string): Promise<Macaron[]> => {
    const { data } = await macaronsClient.get<Macaron[]>(`/search?q=${encodeURIComponent(query)}`);
    return data;
  },
};