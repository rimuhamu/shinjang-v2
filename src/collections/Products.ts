import { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'batchNumber', 'country', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      required: true,
    },
    {
      name: 'batchNumber',
      label: 'Batch Number',
      type: 'number',
      required: true,
    },
    {
      name: 'country',
      type: 'select',
      options: [
        {
          label: '🇰🇷 South Korea',
          value: 'Korea',
        },
        {
          label: '🇨🇳 China',
          value: 'China',
        },
        {
          label: '🇯🇵 Japan',
          value: 'Japan',
        },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: '📝 Ordered to Seller',
          value: 'ordered_to_seller',
        },
        {
          label: '⚙️ In Progress',
          value: 'in_progress',
        },
        {
          label: '🏭 Arrived WH LN',
          value: 'arrived_wh_ln',
        },
        {
          label: '🚢 OTW INA',
          value: 'otw_ina',
        },
        {
          label: '🏬 Arrived WH INA',
          value: 'arrived_wh_ina',
        },
        {
          label: '✅ Arrived Admin',
          value: 'arrived_admin',
        },
      ],
      required: true,
    },
    {
      name: 'isPaid',
      label: 'Paid',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      name: 'notes',
      label: 'Notes',
      type: 'textarea',
      required: false,
    },
  ],
};
