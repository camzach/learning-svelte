import { get, writable } from 'svelte/store';

export type Todo = {
	title: string;
	description: string;
	state: 'todo' | 'inprogress' | 'completed';
};

function createLocalStorageStore<T>(key: string, initial: T) {
	const isBrowser = typeof window !== 'undefined';

	if (isBrowser) {
		initial = JSON.parse(localStorage.getItem(key) ?? 'null') ?? initial;
	}

	const store = writable(initial);
	const { set, subscribe } = store;

	return {
		subscribe,
		set(val: T) {
			if (isBrowser) {
				localStorage.setItem(key, JSON.stringify(val));
			}
			set(val);
		},
		update(upd: (val: T) => T) {
			const updated = upd(get(store));
			if (isBrowser) {
				localStorage.setItem(key, JSON.stringify(updated));
			}
			set(updated);
		}
	};
}

export const todos = createLocalStorageStore<Todo[]>('todos', []);
