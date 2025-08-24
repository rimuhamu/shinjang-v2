import { CollectionConfig } from 'payload';

export const Customers: CollectionConfig = {
  slug: 'customers',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'ordered'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'ordered',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: false,
    },
  ],
};
