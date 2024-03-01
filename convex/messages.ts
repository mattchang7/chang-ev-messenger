import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createMessage = mutation({
  args: { text: v.string(), user: v.string() },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      text: args.text,
      user: args.user,
    });
  },
});