import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createMessage = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      body: args.body,
      author: args.author,
    });
  },
});

export const getLastTenMessages = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("messages").order("desc").take(10);
    return messages.reverse();
  },
});
