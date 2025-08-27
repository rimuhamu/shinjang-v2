import { getPayload } from 'payload';
import { ProductClient } from './client';
import { redirect } from 'next/navigation';
import { Heading } from '@/components/Heading';
import { Separator } from '@/components/ui/separator';
import configPromise from '@payload-config';
import { Product } from '../../../payload-types';

export default async function OrdersPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const customerName = resolvedSearchParams?.name;

  if (!customerName) {
    redirect('/');
  }

  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const result = await payload.find({
      collection: 'customers',
      where: {
        name: {
          equals: customerName,
        },
      },
      limit: 1,
      depth: 2,
    });

    if (result.docs.length === 0) {
      redirect('/no-results');
    }

    console.log('customer name', customerName);
    console.log('result found:', result.docs.length);

    const customer = result.docs[0];
    const orderedItems = customer.ordered || [];

    const products = orderedItems
      .filter(
        (item): item is Product => typeof item === 'object' && item !== null
      )
      .map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        batchNumber: product.batchNumber,
        country: product.country,
        status: product.status,
        isPaid: product.isPaid ?? false,
        notes: product.notes,
        updatedAt: product.updatedAt,
        createdAt: product.createdAt,
      }));

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between'>
            <Heading
              title={`Orders for ${customerName}`}
              description='View all your orders.'
            />
          </div>
          <Separator />
          <ProductClient data={products} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in OrdersPage:', error);

    redirect('/error');
  }
}
