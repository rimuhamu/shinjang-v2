import { RateConversionForm } from '@/components/RateConversionForm';

export default function RateConversionPage() {
  return (
    <div className='py-32 px-5 container'>
      <div className='flex flex-col gap-3 items-center'>
        <p className='text-balance font-bold text-xl text-center'>
          Price Exchange Rate
        </p>
        <RateConversionForm />
      </div>
    </div>
  );
}
