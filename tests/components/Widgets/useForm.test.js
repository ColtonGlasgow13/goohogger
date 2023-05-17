import useForm from 'src/components/Widgets/useForm';
import { putMonsterData } from 'src/components/API/API';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';

jest.mock('src/components/API/API', () => ({
  putMonsterData: jest.fn(),
}));

describe('useForm hook', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  beforeEach(() => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
  });

  it('should initialize with provided initial state', () => {
    const { result } = renderHook(() => useForm({ type: '', speed: 5 }, (data) => data));
    expect(result.current.values).toEqual({ type: '', speed: 5 });
  });

  it('should update the state when onChange is called', () => {
    const { result } = renderHook(() => useForm({ type: '', speed: 5 }, (data) => data));
    act(() => {
      result.current.onChange({ target: { name: 'type', value: 'type1' } });
    });
    expect(result.current.values).toEqual({ type: 'type1', speed: 5 });
  });

  it('should call putMonsterData with the correct arguments when onSubmit is called', () => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
    const { result } = renderHook(() => useForm({ type: '', speed: 5 }, (data) => data));
    act(() => {
      result.current.onSubmit();
    });
    expect(putMonsterData).toHaveBeenCalledWith(
      { type: '', speed: 5 },
      'mock-token',
    );
  });
});
