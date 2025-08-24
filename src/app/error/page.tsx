'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4'>
      <div className='max-w-md w-full text-center space-y-8'>
        <div className='flex justify-center'>
          <div className='relative'>
            <div className='w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-pulse'>
              <AlertTriangle className='w-12 h-12 text-red-500' />
            </div>
            <div className='absolute inset-0 w-24 h-24 bg-red-200 rounded-full animate-ping opacity-20'></div>
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Oops!
          </h1>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700'>
            Something went wrong
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            We encountered an unexpected error while processing your request.
            This might be a temporary issue, so please try again.
          </p>
        </div>

        <div className='space-y-4'>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button
              onClick={handleRefresh}
              className='flex items-center gap-2 px-6 py-3'
              variant='default'>
              <RefreshCw className='w-4 h-4' />
              Try Again
            </Button>

            <Button
              onClick={handleGoHome}
              className='flex items-center gap-2 px-6 py-3'
              variant='outline'>
              <Home className='w-4 h-4' />
              Go Home
            </Button>
          </div>

          <Button
            onClick={handleGoBack}
            className='text-sm text-gray-500 hover:text-gray-700 underline bg-transparent border-none shadow-none hover:bg-transparent'
            variant='ghost'>
            ← Go back to previous page
          </Button>
        </div>
      </div>
    </div>
  );
}
