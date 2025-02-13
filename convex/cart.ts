import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create cart item
export const addToCart = mutation({
  args: {
    userId: v.string(),
    productId: v.id("clothes"), // <-- must match the schema
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    // Check if item already exists in cart
    const existingItem = await ctx.db
      .query("cart")
      .withIndex("by_user_product", (q) =>
        q.eq("userId", args.userId)
          .eq("productId", args.productId)
      )
      .first();

    if (existingItem) {
      // Update quantity if item exists
      return await ctx.db.patch(existingItem._id, {
        quantity: existingItem.quantity + args.quantity,
      });
    }

    // Create new cart item
    return await ctx.db.insert("cart", {
      userId: args.userId,
      productId: args.productId,
      quantity: args.quantity,
      createdAt: Date.now(),
    });
  },
});

// Read cart items
export const getCartItems = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("cart")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

// Update cart item quantity
export const updateCartItemQuantity = mutation({
  args: {
    cartItemId: v.id("cart"),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.cartItemId, {
      quantity: args.quantity,
    });
  },
});

// Remove item from cart
export const removeFromCart = mutation({
  args: {
    cartItemId: v.id("cart"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.cartItemId);
  },
});

// Clear entire cart
export const clearCart = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const cartItems = await ctx.db
      .query("cart")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    await Promise.all(
      cartItems.map((item) => ctx.db.delete(item._id))
    );

    return true;
  },
});
