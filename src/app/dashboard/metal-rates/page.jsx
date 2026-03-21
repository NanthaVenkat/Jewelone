"use client";
import React from 'react';
import MetalRateForm from '../MetalRateForm';

export default function MetalRatesPage() {
    return (
        <div>
            <h1 className="tw:text-2xl tw:font-bold tw:text-gray-800 tw:mb-6">Manage Metal Rates</h1>
            <MetalRateForm />
        </div>
    );
}
