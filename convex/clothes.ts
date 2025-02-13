import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllClothes = query({
  handler: async (ctx) => {
    return await ctx.db.query("clothes").collect();
  },
});

export const getClothesByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("clothes")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const searchClothes = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    const clothes = await ctx.db.query("clothes").collect();
    return clothes.filter(
      (item) =>
        item.name.toLowerCase().includes(args.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(args.searchTerm.toLowerCase())
    );
  },
});

export const getClothesById = query({
  args: { id: v.id("clothes") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
