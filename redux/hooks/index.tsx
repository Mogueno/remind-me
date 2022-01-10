import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store';
import store from '../store';

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
