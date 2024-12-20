import { z } from "zod"

// Email Data schema
export const MessageEmailData = z.object({
	message_id: z.string(),
	thread_id: z.string(),
	from_email: z.string(),
	to_email: z.string(),
	cc_email: z.string(),
	bcc_email: z.string(),
	subject: z.string(),
	html_content: z.string(),
})
export type MessageEmailData = z.infer<typeof MessageEmailData>

// Message Reminders schema
export const MessageReminders = z.object({
	follow_up: z.array(z.string()),
	forgetting: z.array(z.string()),
	snoozed: z.array(z.string()),
})
export type MessageReminders = z.infer<typeof MessageReminders>

// Main Message schema
export const Message = z.object({
	id: z.string(),
	user_id: z.string(),
	date_updated: z.number(),
	date_created: z.number(),
	reminders: MessageReminders,
	email_data: MessageEmailData,
	thread_id: z.string(),
	summary: z.string(),
	embedding: z.array(z.number()),
	keywords: z.array(z.string()),
	unsubscribe_link: z.string().nullable(),
	is_read: z.boolean().default(false),
	is_starred: z.boolean().default(false),
	labels: z.array(z.string()).default([]),
	categories: z.array(z.string()).default([]),
})
export type Message = z.infer<typeof Message>
