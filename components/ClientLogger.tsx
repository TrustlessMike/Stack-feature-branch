'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientLogger() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log('ClientLogger: Current path:', pathname);

    const originalPush = router.push;
    router.push = (...args) => {
      console.log('ClientLogger: router.push called with:', args);
      return originalPush.apply(router, args);
    };

    return () => {
      router.push = originalPush;
    };
  }, [pathname, router]);

  return null;
}
