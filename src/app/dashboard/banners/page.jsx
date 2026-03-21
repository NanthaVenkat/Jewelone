"use client";
import React from 'react';
import BannerManager from '../BannerManager';

export default function BannersPage() {
    return (
        <div>
            {/* BannerManager already has a title, but we can wrap it if needed */}
            <BannerManager />
        </div>
    );
}
