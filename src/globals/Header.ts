import { revalidateSection } from '@/lib/revalidate';
import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
      admin : {
        group : "Settings"
    }, 
    hooks: {
  afterChange: [
    async () => {
      await revalidateSection("header");
    },
  ],
},
  fields: [
    {
      name: 'navigationItems',
      label: 'Navigation Items',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@/components/NavItemRowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Href',
          type: 'text',
          required: true,
        },
        {
          name: 'isCTA',
          label: 'Is CTA Button?',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'hasDropdown',
          label: 'Has Dropdown?',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'dropDownItems',
          label: 'Dropdown Items',
          type: 'array',
          admin : {
            condition : (_,siblingData)=>{
                return siblingData?.hasDropdown == true
            },
            components : {
                RowLabel : '@/components/ChildItemRowLabel'
            }
          },
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              label: 'Href',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
