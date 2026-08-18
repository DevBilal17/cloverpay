'use server'

import { getContactPage } from '@/lib/getContactPage';
import { getPayloadClient } from '@/lib/payload'

export async function submitContact(  _prevState: {
    success: boolean;
    message: string;
  },formData: FormData) {
  let payload = await getPayloadClient()
    const {formSuccessMessage} = await getContactPage()
  const firstName = String(formData.get('firstName') ?? '').trim()
  const lastName = String(formData.get('lastName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  try {
    await payload.create({
      collection: 'contact-submission',
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
    })

    return {
      success: true,
      message: formSuccessMessage || 'Your message has been submitted successfully.',
    }
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}
