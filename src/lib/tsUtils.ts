export type CallbackErrorOnly = (error?: Error) => void;

export type Callback<T> = (error?: Error, results?: T) => void;

export type Dictionary<T> = { [key: string]: T };

export type SafeDictionary<K extends string, T> = { [key in K]: T };

// keyof U only picks common keys between members of a union
// This function picks all keys that appear in the union even if they are
// missing in some of the union members
export type UnionKeys<T> = T extends unknown ? keyof T : never;
