'use client';

import { formatDateTime } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  batchNumber: number;
  country: 'Korea' | 'China' | 'Japan';
  status:
    | 'ordered_to_seller'
    | 'in_progress'
    | 'arrived_wh_ln'
    | 'otw_ina'
    | 'arrived_wh_ina'
    | 'arrived_admin';
  isPaid: boolean;
  taxPayment?: number | null;
  notes?: string | null;
  updatedAt: string;
  createdAt: string;
};

const statusLabels = {
  ordered_to_seller: '📝 Ordered to Seller',
  in_progress: '⚙️ In Progress',
  arrived_wh_ln: '🏭 Arrived WH LN',
  otw_ina: '🚢 OTW INA',
  arrived_wh_ina: '🏬 Arrived WH INA',
  arrived_admin: '✅ Arrived Admin',
} as const;

const countryLabels = {
  Korea: '🇰🇷 South Korea',
  China: '🇨🇳 China',
  Japan: '🇯🇵 Japan',
} as const;

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'batchNumber',
    header: 'Batch Number',
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: ({ row }) => {
      const country = row.getValue('country') as keyof typeof countryLabels;
      return countryLabels[country] || country;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as keyof typeof statusLabels;
      return (
        <span className='px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
          {statusLabels[status] || status}
        </span>
      );
    },
  },
  {
    accessorKey: 'isPaid',
    header: 'Paid',
    cell: ({ row }) => {
      const isPaid = row.getValue('isPaid');
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isPaid
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
          }`}>
          {isPaid ? 'Done' : 'Not Yet'}
        </span>
      );
    },
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: ({ row }) => {
      return formatDateTime(row.getValue('updatedAt'));
    },
  },
];
