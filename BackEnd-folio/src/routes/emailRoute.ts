import { Hono } from 'hono'
import { Resend } from 'resend'
import { z } from 'zod'

const emailRoute = new Hono()

const resend = new Resend('re_NkDsJQnk_3zPu4h9K5z6AtZ7qsXkgA7T4') 

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

emailRoute.post('/contact', async (c) => {
  const body = await c.req.json()

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return c.json({ error: 'Invalid input' }, 400)
  }

  const { name, email, message } = parsed.data

  try {
    // Send message to YOU
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dattarman63@gmail.com', // Replace with your real email
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Confirmation to user
    await resend.emails.send({
      from: 'Akshar Contact <onboarding@resend.dev>',
      to: email,
      subject: 'Thanks for contacting Akshar!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I’ve received your message and will get back to you shortly.</p>
        <p>~ Akshar</p>
      `,
    })

    return c.json({ success: true })
  } catch (err) {
    // console.error(err)
    return c.json({ error: 'Failed to send email' }, 500)
  }
})

export default emailRoute