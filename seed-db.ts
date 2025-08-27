import { getPayload } from 'payload';
import configPromise from './payload.config';
import { Product } from './payload-types';

const productsData = [
  {
    name: 'PC Jisoo THE ALBUM',
    price: '225000',
    batchNumber: 2001,
    country: 'Korea' as const,
    status: 'ordered_to_seller' as const,
    isPaid: false,
    notes: 'BLACKPINK 1st press',
  },
  {
    name: 'PC Jennie BORN PINK',
    price: '270000',
    batchNumber: 2002,
    country: 'Korea' as const,
    status: 'in_progress' as const,
    isPaid: true,
    notes: 'holo ver.',
  },
  {
    name: 'PC Rosé THE ALBUM',
    price: '210000',
    batchNumber: 2003,
    country: 'Korea' as const,
    status: 'arrived_wh_ln' as const,
    isPaid: true,
  },
  {
    name: 'PC Lisa BORN PINK',
    price: '285000',
    batchNumber: 2004,
    country: 'Korea' as const,
    status: 'otw_ina' as const,
    isPaid: false,
  },
  {
    name: 'PC Nayeon BETWEEN 1&2',
    price: '187500',
    batchNumber: 2005,
    country: 'Korea' as const,
    status: 'arrived_wh_ina' as const,
    isPaid: true,
  },
  {
    name: 'PC Sana FORMULA OF LOVE',
    price: '165000',
    batchNumber: 2006,
    country: 'Korea' as const,
    status: 'arrived_admin' as const,
    isPaid: true,
    notes: 'pre-order benefit',
  },
  {
    name: 'PC Tzuyu WITH YOU-th',
    price: '195000',
    batchNumber: 2007,
    country: 'Korea' as const,
    status: 'in_progress' as const,
    isPaid: false,
  },
  {
    name: 'PC Jihyo FORMULA OF LOVE',
    price: '157500',
    batchNumber: 2008,
    country: 'Korea' as const,
    status: 'ordered_to_seller' as const,
    isPaid: false,
  },
  {
    name: 'PC Minji GET UP',
    price: '240000',
    batchNumber: 2009,
    country: 'Korea' as const,
    status: 'arrived_wh_ln' as const,
    isPaid: true,
  },
  {
    name: 'PC Hanni OMG',
    price: '225000',
    batchNumber: 2010,
    country: 'Korea' as const,
    status: 'otw_ina' as const,
    isPaid: true,
  },
  {
    name: 'PC Danielle GET UP',
    price: '217500',
    batchNumber: 2011,
    country: 'Korea' as const,
    status: 'in_progress' as const,
    isPaid: false,
  },
  {
    name: 'PC Haerin OMG',
    price: '255000',
    batchNumber: 2012,
    country: 'Korea' as const,
    status: 'arrived_admin' as const,
    isPaid: true,
    notes: 'Weverse pob',
  },
  {
    name: 'PC Hyein GET UP',
    price: '202500',
    batchNumber: 2013,
    country: 'Korea' as const,
    status: 'arrived_wh_ina' as const,
    isPaid: false,
  },
  {
    name: 'PC Karina GIRLS',
    price: '172500',
    batchNumber: 2014,
    country: 'Korea' as const,
    status: 'ordered_to_seller' as const,
    isPaid: false,
  },
  {
    name: 'PC Winter ARMAGEDDON',
    price: '277500',
    batchNumber: 2015,
    country: 'Korea' as const,
    status: 'in_progress' as const,
    isPaid: true,
  },
  {
    name: 'PC Giselle GIRLS',
    price: '150000',
    batchNumber: 2016,
    country: 'Korea' as const,
    status: 'arrived_wh_ln' as const,
    isPaid: true,
  },
  {
    name: 'PC Ningning ARMAGEDDON',
    price: '180000',
    batchNumber: 2017,
    country: 'Korea' as const,
    status: 'otw_ina' as const,
    isPaid: false,
  },
  {
    name: "PC Yujin I'VE IVE",
    price: '210000',
    batchNumber: 2018,
    country: 'Korea' as const,
    status: 'arrived_admin' as const,
    isPaid: true,
  },
  {
    name: 'PC Wonyoung SWITCH',
    price: '300000',
    batchNumber: 2019,
    country: 'Korea' as const,
    status: 'arrived_wh_ina' as const,
    isPaid: true,
    notes: 'ltd set',
  },
  {
    name: "PC Rei I'VE IVE",
    price: '187500',
    batchNumber: 2020,
    country: 'Korea' as const,
    status: 'ordered_to_seller' as const,
    isPaid: false,
  },
];

const customersData = [
  { name: 'Ayu', orderedProductIds: [0, 1, 4] },
  { name: 'Rizky', orderedProductIds: [2, 3] },
  { name: 'Siti', orderedProductIds: [5, 6, 11] },
  { name: 'Bintang', orderedProductIds: [8] },
  { name: 'Dewi', orderedProductIds: [9, 10, 12] },
  { name: 'Fajar', orderedProductIds: [7, 13] },
  { name: 'Nanda', orderedProductIds: [14, 15] },
  { name: 'Putri', orderedProductIds: [16, 17, 18] },
  { name: 'Rara', orderedProductIds: [1, 6, 19] },
  { name: 'Hanif', orderedProductIds: [0, 2] },
  { name: 'Dini', orderedProductIds: [4, 5, 8, 9] },
  { name: 'Gilang', orderedProductIds: [11, 12] },
  { name: 'Intan', orderedProductIds: [3, 7, 15] },
  { name: 'Ucup', orderedProductIds: [10] },
  { name: 'Tika', orderedProductIds: [13, 14, 17] },
  { name: 'Yoga', orderedProductIds: [16] },
  { name: 'Wulan', orderedProductIds: [18, 19] },
  { name: 'Caca', orderedProductIds: [1, 4] },
  { name: 'Gita', orderedProductIds: [5, 6, 7] },
  { name: 'Rama', orderedProductIds: [0, 8, 9] },
];

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    const payload = await getPayload({
      config: configPromise,
    });

    console.log('Clearing existing data...');
    await payload.delete({
      collection: 'customers',
      where: {},
    });

    await payload.delete({
      collection: 'products',
      where: {},
    });

    console.log('Seeding products...');
    const createdProducts: Product[] = [];

    for (const productData of productsData) {
      const product = await payload.create({
        collection: 'products',
        data: productData,
      });

      createdProducts.push(product);
      console.log(`Created product: ${product.name} (ID: ${product.id})`);
    }

    console.log('Validating product uniqueness...');
    const allOrderedProducts = customersData.flatMap(
      (customer) => customer.orderedProductIds
    );
    const uniqueOrderedProducts = [...new Set(allOrderedProducts)];

    if (allOrderedProducts.length !== uniqueOrderedProducts.length) {
      console.warn('Warning: Some products are ordered by multiple customers');

      const duplicates = allOrderedProducts.filter(
        (item, index) => allOrderedProducts.indexOf(item) !== index
      );
      console.log('Duplicate product IDs:', [...new Set(duplicates)]);
    } else {
      console.log('✅ All products are unique across customers');
    }

    console.log('Seeding customers...');

    for (const customerData of customersData) {
      const orderedProductsIds = customerData.orderedProductIds.map(
        (index) => createdProducts[index].id
      );

      const customer = await payload.create({
        collection: 'customers',
        data: {
          name: customerData.name,
          ordered: orderedProductsIds,
        },
      });

      console.log(
        `Created customer: ${customer.name} with ${orderedProductsIds.length} orders`
      );
    }

    console.log('✅ Database seeding completed successfully!');

    console.log('\n=== SEEDING SUMMARY ===');
    console.log(`📦 Products created: ${createdProducts.length}`);
    console.log(`👥 Customers created: ${customersData.length}`);
    console.log(`🛍️ Total orders: ${allOrderedProducts.length}`);
    console.log(`✨ Unique products ordered: ${uniqueOrderedProducts.length}`);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

export { seedDatabase };
