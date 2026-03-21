"use client"

import React from 'react'
import dynamic from 'next/dynamic';

const GoogleMapsComponent = dynamic(() => import('./GoogleMapsComponent'), {
  ssr: false
});

const ZillaraSection6 = () => {
  return (
    <div>
      <GoogleMapsComponent/>
    </div>
  )
}

export default ZillaraSection6