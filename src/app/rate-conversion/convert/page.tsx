import { GrossPrice } from '@/components/GrossPrice';
import { NetPrice } from '@/components/NetPrice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface ConvertPageProps {
  searchParams: {
    pt?: string;
    curr?: string;
    price?: string;
  };
}

function calculateConversions(currencyName: string, price: number) {
  const posFee = 1800;
  const bantaekFee = 13000;
  const kurirMinFee = 4000;
  const kurirMaxFee = 5000;

  let rate: number = 0;
  let fee: number = 0;
  let multFactor: number = 1;

  switch (currencyName) {
    case 'KR':
      rate = 12.5;
      fee = 25000;
      multFactor = 10000;
      break;
    case 'JP':
      rate = 125;
      fee = 25000;
      break;
    case 'CH':
      rate = 2350;
      fee = 20000;
      break;
  }

  const grossResult = price * multFactor * rate;
  const nettoResult = price * multFactor * rate + fee;
  const semiregistResult = (price * multFactor + posFee) * rate + fee;
  const posResult = semiregistResult;
  const bantaekResult = semiregistResult + bantaekFee;
  const kurirMinResult = (price * multFactor + kurirMinFee) * rate + fee;
  const kurirMaxResult = (price * multFactor + kurirMaxFee) * rate + fee;

  return {
    grossResult,
    nettoResult,
    semiregistResult,
    posResult,
    bantaekResult,
    kurirMinResult,
    kurirMaxResult,
  };
}

export default function ConvertPage({ searchParams }: ConvertPageProps) {
  const priceType = searchParams.pt;
  const currencyName = searchParams.curr;
  const priceInString = searchParams.price;

  if (!priceType || !currencyName || !priceInString) {
    redirect('/rate-conversion');
  }

  const price = Number(priceInString);
  const isKR = currencyName === 'KR';

  const {
    grossResult,
    nettoResult,
    semiregistResult,
    posResult,
    bantaekResult,
    kurirMinResult,
    kurirMaxResult,
  } = calculateConversions(currencyName, price);

  if (priceType === 'Kotor') {
    return (
      <div className='flex flex-col items-center pt-20'>
        <GrossPrice
          priceType={priceType}
          currencyName={currencyName}
          result={grossResult}
        />
        <Button asChild>
          <Link href='/rate-conversion'>Re-Calculate</Link>
        </Button>
      </div>
    );
  }

  if (priceType === 'Bersih') {
    return (
      <div className='flex flex-col items-center pt-20'>
        <NetPrice
          isKR={isKR}
          priceType={priceType}
          currencyName={currencyName}
          nettoResult={nettoResult}
          semiregistResult={semiregistResult}
          posResult={posResult}
          bantaekResult={bantaekResult}
          kurirMinResult={kurirMinResult}
          kurirMaxResult={kurirMaxResult}
        />
        <Button asChild>
          <Link href='/rate-conversion'>Re-Calculate</Link>
        </Button>
      </div>
    );
  }

  // if no valid price type, redirect back
  redirect('/rate-conversion');
}
