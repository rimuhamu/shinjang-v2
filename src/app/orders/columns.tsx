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
    | 'Ordered to Seller'
    | 'In Progress'
    | 'Arrived WH LN'
    | 'OTW INA'
    | 'Arrived WH INA'
    | 'Arrived Admin';
  isPaid: boolean;
  taxPayment?: number | null;
  notes?: string | null;
  updatedAt: string;
  createdAt: string;
};

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
  },
  {
    accessorKey: 'status',
    header: 'Status',
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
