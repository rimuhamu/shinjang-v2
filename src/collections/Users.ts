import { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user',
      required: true,
    },
  ],
};
