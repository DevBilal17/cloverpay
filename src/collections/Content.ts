import { revalidateSection } from '@/lib/revalidate';
import { CollectionConfig } from 'payload'

export const Offerings: CollectionConfig = {
  slug: 'offerings',
  admin: {
    group: 'Content',
      useAsTitle : "name"
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
    },
    {
      name: 'shortDescription',
      label: 'Short Description',
      type: 'textarea',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@/components/FeatureRowLabel',
        },
      },
      fields: [
        {
          name: 'text',
          label: 'Text',
          required: true,
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
  afterChange: [
    async () => {
      await revalidateSection("offerings");
    },
  ],

  afterDelete: [
    async () => {
      await revalidateSection("offerings");
    },
  ],
},
}

export const Features: CollectionConfig = {
  slug: 'features',
  admin: {
    group: 'Content',
    useAsTitle : "title"
  },
  hooks: {
  afterChange: [
    async () => {
      await revalidateSection("features");
    },
  ],

  afterDelete: [
    async () => {
      await revalidateSection("features");
    },
  ],
},
  fields: [
    {
      name: 'title',
      label: 'Title',
      required: true,
      type: 'text',
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
  ],
}

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    group: 'Content',
    useAsTitle : "name"
  },
  hooks: {
  afterChange: [
    async () => {
      await revalidateSection("industries");
    },
  ],

  afterDelete: [
    async () => {
      await revalidateSection("industries");
    },
  ],
},
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const Apps: CollectionConfig = {
  slug: 'apps',
  
  admin: {
    group: 'Content',
    useAsTitle : "name"
  },
  hooks: {
  afterChange: [
    async () => {
      await revalidateSection("apps");
    },
  ],

  afterDelete: [
    async () => {
      await revalidateSection("apps");
    },
  ],
},
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const IntegratedSolutions: CollectionConfig = {
  slug: 'integrated-solutions',
  admin: {
    group: 'Content',
    useAsTitle : "title"
  },
  hooks: {
  afterChange: [
    async () => {
      await revalidateSection("integratedSolutions");
    },
  ],

  afterDelete: [
    async () => {
      await revalidateSection("integratedSolutions");
    },
  ],
},
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'ctaText',
      label: 'CTA Text',
      type: 'text',
    },
    {
      name: 'ctaLink',
      label: 'CTA Link',
      type: 'text',
    },
  ],
}
