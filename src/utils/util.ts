type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T) =>
  Object.entries(obj) as Entries<T>;

export type FilterFunction<T> = (arg: T) => boolean;

export const applyFilters = <T>(
  items: T[],
  filterFunctions: FilterFunction<T>[],
): T[] =>
  filterFunctions.reduce(
    (filteredItems, filterFn) => filteredItems.filter(filterFn),
    items,
  );
