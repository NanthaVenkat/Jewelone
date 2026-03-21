"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CareersPage() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const res = await fetch('/api/careers');
                const data = await res.json();
                if (data.success) {
                    setSubmissions(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch careers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    // Helper to format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="tw:p-6">
            <div className="tw:flex tw:items-center tw:justify-between tw:mb-8">
                <div>
                    <h1 className="tw:text-2xl tw:font-bold tw:text-gray-900">Career Submissions</h1>
                    <p className="tw:text-gray-500 tw:mt-1">Manage and view all job applications</p>
                </div>
                <div className="tw:bg-white tw:px-4 tw:py-2 tw:rounded-lg tw:border tw:border-gray-200 tw:shadow-sm">
                    <span className="tw:text-gray-500 tw:text-sm">Total Applications:</span>
                    <span className="tw:ml-2 tw:font-bold tw:text-[#964A26]">{submissions.length}</span>
                </div>
            </div>

            <div className="tw:bg-white tw:rounded-xl tw:shadow-sm tw:border tw:border-gray-200 tw:overflow-hidden">
                {loading ? (
                    <div className="tw:p-12 tw:text-center tw:text-gray-500">Loading submissions...</div>
                ) : submissions.length === 0 ? (
                    <div className="tw:p-12 tw:text-center tw:text-gray-500">
                        No applications found yet.
                    </div>
                ) : (
                    <div className="tw:overflow-x-auto">
                        <table className="tw:w-full tw:text-left">
                            <thead>
                                <tr className="tw:bg-gray-50 tw:border-b tw:border-gray-200">
                                    <th className="tw:px-6 tw:py-4 tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider">Candidate</th>
                                    <th className="tw:px-6 tw:py-4 tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider">Position & City</th>
                                    <th className="tw:px-6 tw:py-4 tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider">Contact Info</th>
                                    <th className="tw:px-6 tw:py-4 tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider">Applied On</th>
                                    <th className="tw:px-6 tw:py-4 tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider">Resume</th>
                                </tr>
                            </thead>
                            <tbody className="tw:divide-y tw:divide-gray-100">
                                {submissions.map((item) => (
                                    <tr key={item._id} className="hover:tw:bg-gray-50 tw:transition-colors">
                                        <td className="tw:px-6 tw:py-4">
                                            <div className="tw:font-medium tw:text-gray-900">{item.name}</div>
                                        </td>
                                        <td className="tw:px-6 tw:py-4">
                                            <div className="tw:text-sm tw:font-medium tw:text-gray-900">{item.position}</div>
                                            <div className="tw:text-xs tw:text-gray-500 tw:mt-0.5">{item.city}</div>
                                        </td>
                                        <td className="tw:px-6 tw:py-4">
                                            <div className="tw:text-sm tw:text-gray-600">{item.email}</div>
                                            <div className="tw:text-sm tw:text-gray-600 tw:mt-0.5">{item.mobile}</div>
                                        </td>
                                        <td className="tw:px-6 tw:py-4">
                                            <span className="tw:text-sm tw:text-gray-500">{formatDate(item.createdAt)}</span>
                                        </td>
                                        <td className="tw:px-6 tw:py-4">
                                            <a
                                                href={item.resume_path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="tw:inline-flex tw:items-center tw:px-3 tw:py-1.5 tw:rounded-lg tw:bg-gray-100 hover:tw:bg-gray-200 tw:text-gray-700 tw:text-xs tw:font-medium tw:transition-colors"
                                            >
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
