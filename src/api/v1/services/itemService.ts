/**
 * Represents an item in the system
 */
export interface Item {
  id: string;
  name: string;
  description: string;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

export function getAllItems(): import("../models/itemModel").Item[] | PromiseLike<import("../models/itemModel").Item[]> {
    throw new Error("Function not implemented.");
}
export function createItem(itemData: { name: any; description: any; }): import("../models/itemModel").Item | PromiseLike<import("../models/itemModel").Item> {
    throw new Error("Function not implemented.");
}

export function updateItem(id: string, updateData: { name: any; description: any; }): import("../models/itemModel").Item | PromiseLike<import("../models/itemModel").Item> {
    throw new Error("Function not implemented.");
}

export function deleteItem(id: string) {
    throw new Error("Function not implemented.");
}

