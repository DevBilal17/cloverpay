import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroTitle',
              label: 'Title',
              required: true,
              type: 'text',
            },
            {
              name: 'heroDescription',
              label: 'Description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'backgroundImage',
              label: 'Background Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'ctaButtonText',
              label: 'CTA Button Text',
              type: 'text',
            },
            {
              name: 'ctaButtonLink',
              label: 'CTA Button Link',
              type: 'text',
            },
          ],
        },
        {
          label: 'Intro',
          fields: [
            {
              name: 'introTitle',
              label: 'Title',
              type: 'textarea',
              required: true,
            },
            {
              name: 'introDescription',
              label: 'Description',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Offerings',
          fields: [
            {
              name: 'sectionTitle',
              label: 'Section Title',
              type: 'text',
              required: true,
            },
            {
              name: 'sectionDescription',
              label: 'Descriptions',
              type: 'array',
              admin: {
                components: {
                  RowLabel: '@/components/ParagraphRowLabel',
                },
              },
              fields: [
                {
                  name: 'paragraph',
                  label: 'Paragraph',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          label: 'Features',
          fields: [
            {
              name: 'featuresTitle',
              label: 'Title',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Industries',
          fields: [
            {
              name: 'industriesTitle',
              label: 'Title',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Solutions',
          fields: [
            {
              name: 'solutionsTitle',
              label: 'Title',
              type: 'text',
            },
          ],
        },
        {
          label: 'Apps',
          fields: [
            {
              name: 'appsTitle',
              label: 'Title',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'CTA',
          fields: [
            {
              name: 'ctaTitle',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'ctaDescription',
              label: 'Description',
              type: 'textarea',
            },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'text',
            },
            {
              name: 'buttonLink',
              label: 'Button Link',
              type: 'text',
            },
          ],
        },
        {
          label: 'Promo',
          fields: [
            {
              name: 'promoImage1',
              label: 'Promo Image 1',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'promoImage2',
              label: 'Promo Image 2',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'promoImage3',
              label: 'Promo Image 3',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
}

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      name: 'heroTitle',
      label: 'Hero Title',
      type: 'text',
      required: true,
    },
    {
      name: 'heroDescription',
      label: 'Hero Description',
      type: 'textarea',
    },
    {
      name: 'callUsLabel',
      label: `"Call Us" Label`,
      type: 'text',
    },
    {
      name: 'emailUsLabel',
      label: `"Email Us" Label`,
      type: 'text',
    },
    {
      name: 'infoBoxText',
      label: 'Info Box Text',
      type: 'textarea',
    },
    {
      name: 'formSuccessMessage',
      label: 'Form Success Message',
      type: 'text',
    },
  ],
}
