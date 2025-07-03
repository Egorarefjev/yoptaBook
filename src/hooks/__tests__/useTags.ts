import { renderHook, act } from '@testing-library/react';
import useTags from '../useTags';

// Мокаем API-функцию
jest.mock('../../api/dictionary', () => ({
    apiGetTags: jest.fn().mockResolvedValue(['react', 'js', 'node']),
}));

describe('useTags', () => {
    it('загружает теги и обновляет стейт', async () => {
        const { result } = renderHook(() => useTags());

        // Ждём выполнения fetchTags
        await act(async () => {
            await result.current.fetchTags();
        });

        expect(result.current.tags).toEqual(['react', 'js', 'node']);
        expect(result.current.loadingTags).toBe(false);
        expect(result.current.errorTags).toBeNull();
    });

    it('обрабатывает ошибку запроса', async () => {
        const mockError = new Error('Сервер упал');
        const { apiGetTags } = require('../../api/dictionary');
        apiGetTags.mockRejectedValueOnce(mockError);

        const { result } = renderHook(() => useTags());

        await act(async () => {
            await result.current.fetchTags();
        });

        expect(result.current.tags).toEqual([]);
        expect(result.current.loadingTags).toBe(false);
        expect(result.current.errorTags).toBe('Сервер упал');
    });
});
