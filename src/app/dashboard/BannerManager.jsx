"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerManager = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);

    // Form State
    const [desktopImg, setDesktopImg] = useState(null);
    const [mobileImg, setMobileImg] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Edit State
    const [editingId, setEditingId] = useState(null);

    const fetchBanners = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/banner");
            const data = await res.json();
            setBanners(data);
        } catch (error) {
            console.error("Failed to fetch banners", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBanners();
    }, []);

    const handleFileChange = (e, setFile) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleEdit = (banner) => {
        setEditingId(banner._id);
        // We don't pre-fill files as they are inputs, but we change UI state to 'Edit Mode'
        // Reset inputs to clean state for new uploads
        setDesktopImg(null);
        setMobileImg(null);
        const desktopInput = document.getElementById("desktopInput");
        const mobileInput = document.getElementById("mobileInput");
        if (desktopInput) desktopInput.value = "";
        if (mobileInput) mobileInput.value = "";

        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setDesktopImg(null);
        setMobileImg(null);
        document.getElementById("desktopInput").value = "";
        document.getElementById("mobileInput").value = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!editingId && (!desktopImg || !mobileImg)) {
            alert("Please select both desktop and mobile images for new banners.");
            return;
        }

        if (editingId && !desktopImg && !mobileImg) {
            alert("Please select at least one image to update.");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        if (desktopImg) formData.append("desktopImg", desktopImg);
        if (mobileImg) formData.append("mobileImg", mobileImg);

        if (editingId) {
            formData.append("id", editingId);
        }

        try {
            const url = "/api/banner";
            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method: method,
                body: formData,
            });
            const data = await res.json();

            if (res.ok) {
                alert(editingId ? "Banner updated successfully!" : "Banner uploaded successfully!");
                cancelEdit();
                fetchBanners();
            } else {
                alert(data.message || "Operation failed");
            }
        } catch (error) {
            console.error("Error", error);
            alert("An error occurred");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this banner?")) return;

        try {
            const res = await fetch(`/api/banner?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                fetchBanners();
            } else {
                alert("Failed to delete banner");
            }
        } catch (error) {
            console.error("Delete error", error);
        }
    };

    const moveBanner = async (index, direction) => {
        const newBanners = [...banners];
        if (direction === 'up' && index > 0) {
            [newBanners[index], newBanners[index - 1]] = [newBanners[index - 1], newBanners[index]];
        } else if (direction === 'down' && index < newBanners.length - 1) {
            [newBanners[index], newBanners[index + 1]] = [newBanners[index + 1], newBanners[index]];
        } else {
            return;
        }

        // Optimistic UI update
        setBanners(newBanners);

        // Send new order to backend
        try {
            await fetch("/api/banner", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ banners: newBanners }),
            });
        } catch (error) {
            console.error("Reorder error", error);
            fetchBanners(); // Revert on error
        }
    };

    return (
        <div className="tw:py-10 tw:px-4 tw:max-w-7xl tw:mx-auto">
            {/* Header */}
            <div className="tw:mb-8 tw:flex tw:items-center tw:justify-between">
                <div>
                    <h2 className="tw:text-3xl tw:font-serif tw:text-gray-900 tw:mb-2">Home Page Banners</h2>
                    <p className="tw:text-gray-500">Manage and organize the sliding banners on the homepage.</p>
                </div>
                <div className="tw:bg-white tw:px-4 tw:py-2 tw:rounded-lg tw:border tw:border-gray-200 tw:shadow-sm">
                    <span className="tw:text-sm tw:text-gray-500">Total Banners: </span>
                    <span className="tw:font-bold tw:text-gray-900">{banners.length}</span>
                </div>
            </div>

            <div className="tw:grid tw:grid-cols-1 lg:tw:grid-cols-3 tw:gap-8">
                {/* Upload/Edit Section */}
                <div className="lg:tw:col-span-1">
                    <div className="tw:bg-white tw:shadow-xl tw:rounded-2xl tw:p-6 tw:border tw:border-gray-100 tw:sticky tw:top-24">
                        <h3 className="tw:text-lg tw:font-semibold tw:text-gray-900 tw:mb-6 tw:flex tw:items-center tw:gap-2">
                            {editingId ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5 tw:text-blue-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    Edit Banner
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5 tw:text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Add New Banner
                                </>
                            )}
                        </h3>

                        <form onSubmit={handleSubmit} className="tw:space-y-5">
                            <div>
                                <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">
                                    Desktop Image <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(1920x1080)</span>
                                </label>
                                <div className="tw:relative tw:group">
                                    <input
                                        id="desktopInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, setDesktopImg)}
                                        className="tw:block tw:w-full tw:text-sm tw:text-gray-500 file:tw:mr-4 file:tw:py-2.5 file:tw:px-4 file:tw:rounded-full file:tw:border-0 file:tw:text-sm file:tw:font-semibold file:tw:bg-gray-50 file:tw:text-gray-700 hover:file:tw:bg-gray-100 tw:cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">
                                    Mobile Image <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(600x800)</span>
                                </label>
                                <div className="tw:relative tw:group">
                                    <input
                                        id="mobileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, setMobileImg)}
                                        className="tw:block tw:w-full tw:text-sm tw:text-gray-500 file:tw:mr-4 file:tw:py-2.5 file:tw:px-4 file:tw:rounded-full file:tw:border-0 file:tw:text-sm file:tw:font-semibold file:tw:bg-gray-50 file:tw:text-gray-700 hover:file:tw:bg-gray-100 tw:cursor-pointer"
                                    />
                                </div>
                            </div>

                            {editingId && (
                                <p className="tw:text-xs tw:text-amber-600 tw:italic">
                                    * Leave inputs empty to keep existing images.
                                </p>
                            )}

                            <div className="tw:flex tw:gap-3">
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className={`tw:flex-1 tw:py-3 tw:rounded-xl tw:font-medium tw:shadow-lg tw:transition-all tw:disabled:opacity-50 tw:disabled:cursor-not-allowed tw:flex tw:items-center tw:justify-center tw:gap-2 ${editingId
                                        ? 'tw:bg-blue-600 hover:tw:bg-blue-700 tw:text-white tw:shadow-blue-200'
                                        : 'tw:bg-gray-900 hover:tw:bg-black tw:text-white tw:shadow-gray-200'
                                        }`}
                                >
                                    {uploading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            {editingId ? "Update Banner" : "Upload Banner"}
                                        </>
                                    )}
                                </button>
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={cancelEdit}
                                        className="tw:px-4 tw:py-3 tw:rounded-xl tw:font-medium tw:text-gray-600 tw:bg-gray-100 hover:tw:bg-gray-200 tw:transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Banner List */}
                <div className="lg:tw:col-span-2">
                    <div className="tw:space-y-6">
                        {loading ? (
                            <div className="tw:flex tw:justify-center tw:py-10">
                                <div className="tw:animate-spin tw:rounded-full tw:h-8 tw:w-8 tw:border-b-2 tw:border-gray-900"></div>
                            </div>
                        ) : banners.length === 0 ? (
                            <div className="tw:bg-white tw:rounded-2xl tw:p-10 tw:text-center tw:border tw:border-gray-100 tw:border-dashed">
                                <p className="tw:text-gray-400">No banners uploaded yet. Add one to get started.</p>
                            </div>
                        ) : (
                            banners.map((banner, index) => (
                                <div key={banner._id} className="tw:bg-white tw:rounded-2xl tw:p-5 tw:shadow-sm tw:border tw:border-gray-100 hover:tw:shadow-md tw:transition-shadow tw:relative tw:group">
                                    <div className="tw:flex tw:items-center tw:justify-between tw:mb-4">
                                        <div className="tw:flex tw:items-center tw:gap-3">
                                            <span className="tw:bg-gray-100 tw:text-gray-600 tw:text-xs tw:font-bold tw:px-2.5 tw:py-1 tw:rounded-md">
                                                #{index + 1}
                                            </span>

                                            {/* Reorder Controls */}
                                            <div className="tw:flex tw:gap-1">
                                                <button
                                                    onClick={() => moveBanner(index, 'up')}
                                                    disabled={index === 0}
                                                    className="tw:p-1 tw:rounded hover:tw:bg-gray-100 disabled:tw:opacity-30 disabled:hover:tw:bg-transparent tw:transition-colors"
                                                    title="Move Up"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="tw:size-5 tw:text-gray-500">
                                                        <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => moveBanner(index, 'down')}
                                                    disabled={index === banners.length - 1}
                                                    className="tw:p-1 tw:rounded hover:tw:bg-gray-100 disabled:tw:opacity-30 disabled:hover:tw:bg-transparent tw:transition-colors"
                                                    title="Move Down"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="tw:size-5 tw:text-gray-500">
                                                        <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="tw:flex tw:items-center tw:gap-2">
                                            <button
                                                onClick={() => handleEdit(banner)}
                                                className="tw:text-blue-600 hover:tw:text-blue-800 tw:bg-blue-50 hover:tw:bg-blue-100 tw:px-3 tw:py-1.5 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:flex tw:items-center tw:gap-1"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(banner._id)}
                                                className="tw:text-red-500 hover:tw:text-red-700 tw:bg-red-50 hover:tw:bg-red-100 tw:p-2 tw:rounded-lg tw:transition-colors"
                                                title="Delete Banner"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="tw:flex tw:flex-wrap tw:gap-6">
                                        <div className="tw:space-y-2">
                                            <p className="tw:text-xs tw:font-medium tw:text-gray-400 tw:uppercase">Desktop</p>
                                            <div className="tw:relative tw:h-24 tw:aspect-video tw:bg-gray-100 tw:rounded-lg tw:overflow-hidden tw:border tw:border-gray-100 hover:tw:scale-105 tw:transition-transform">
                                                <Image
                                                    src={banner.desktopImg}
                                                    alt="Desktop Banner"
                                                    fill
                                                    className="tw:object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="tw:space-y-2">
                                            <p className="tw:text-xs tw:font-medium tw:text-gray-400 tw:uppercase">Mobile</p>
                                            <div className="tw:relative tw:h-24 tw:aspect-[3/4] tw:bg-gray-100 tw:rounded-lg tw:overflow-hidden tw:border tw:border-gray-100 hover:tw:scale-105 tw:transition-transform">
                                                <Image
                                                    src={banner.mobileImg}
                                                    alt="Mobile Banner"
                                                    fill
                                                    className="tw:object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BannerManager;
