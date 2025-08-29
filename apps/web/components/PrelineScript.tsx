'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function PrelineScript() {
  const path = usePathname(); // Get pathname

  useEffect(() => {
    import('preline/preline').then(() => { // No need to destructure module
      setTimeout(() => { // Add a small delay
        if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
          window.HSStaticMethods.autoInit();
        }
      }, 100); // 100ms delay
    });
  }, [path]); // Add path as dependency

  return null
}
