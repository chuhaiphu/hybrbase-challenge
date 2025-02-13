import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    password: v.string(),
    createdAt: v.number(),
  }).index("by_username", ["username"]),

  clothes: defineTable({
    name: v.string(),
    price: v.number(),
    description: v.string(),
    highlights: v.array(v.string()),
    details: v.string(),
    colors: v.array(
      v.object({
        name: v.string(),
        class: v.string(),
        selectedClass: v.string(),
      })
    ),
    sizes: v.array(
      v.object({
        name: v.string(),
        inStock: v.boolean(),
      })
    ),
    images: v.array(
      v.object({
        src: v.string(),
        alt: v.string(),
      })
    ),
    category: v.string(),
    rating: v.optional(v.number()),
    reviewCount: v.optional(v.number()),
    createdAt: v.number(),
  }).index("by_category", ["category"]),

  cart: defineTable({
    userId: v.string(),
    productId: v.id("clothes"), // <-- store as an ID reference
    quantity: v.number(),
    createdAt: v.number(),
  }).index("by_user", ["userId"])
    .index("by_user_product", ["userId", "productId"]),
});
