"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dynamically import JoditEditor to prevent SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const initialFormState = {
    title: "",
    slug: "",
    subtitle: "",
    heroImg: "",
    authorName: "",
    authorAvatar: "",
    genres: "",
    shortBio: "",
    rating: 0,
    content: "",
    isActive: true,
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error("Failed to fetch blogs");
      }
    } catch (err) {
      toast.error("Error fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
      .replace(/^-+/, '')          // Trim - from start of text
      .replace(/-+$/, '');         // Trim - from end of text
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else {
      setFormData((prev) => {
        const newData = {
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        };
        
        // Auto-generate slug from title only when creating a new blog
        if (name === "title" && !isEditing) {
          newData.slug = generateSlug(value);
        }
        
        return newData;
      });
    }
  };

  const handleQuillChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content: content,
    }));
  };

  const editor = useRef(null);
  const config = useMemo(() => ({
    readonly: false,
    height: 400,
    uploader: {
      insertImageAsBase64URI: true
    }
  }), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      
      // Append non-file fields
      for (const key in formData) {
        if (key === 'heroImg' || key === 'authorAvatar') {
           if (formData[key] instanceof File) {
               payload.append(key, formData[key]);
           } else if (typeof formData[key] === 'string' && formData[key].length > 0) {
               payload.append(key, formData[key]);
           }
        } else if (key === 'genres') {
           const genresArray = typeof formData.genres === "string" 
            ? formData.genres.split(",").map(g => g.trim()).filter(g => g)
            : formData.genres;
           payload.append(key, JSON.stringify(genresArray));
        } else {
           payload.append(key, formData[key]);
        }
      }

      const url = isEditing ? `/api/blogs/${formData.slug}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: payload,
      });

      const data = await res.json();
      if (data.success) {
        toast.success(isEditing ? "Blog updated!" : "Blog created!");
        setShowForm(false);
        setFormData(initialFormState);
        setIsEditing(false);
        fetchBlogs();
      } else {
        toast.error(data.message || "Failed to save blog");
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      ...blog,
      genres: blog.genres ? blog.genres.join(", ") : "",
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (slug) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Blog deleted!");
        fetchBlogs();
      } else {
        toast.error(data.message || "Failed to delete blog");
      }
    } catch (err) {
      toast.error("Error deleting blog");
    }
  };

  return (
    <div className="tw:max-w-6xl tw:mx-auto tw:py-8">
      <ToastContainer />
      <div className="tw:flex tw:justify-between tw:items-center tw:mb-8">
        <div>
          <Link href="/dashboard" className="tw:text-[#964A26] tw:text-sm hover:tw:underline tw:mb-2 tw:inline-block">
            &larr; Back to Dashboard
          </Link>
          <h1 className="tw:text-3xl tw:font-medium tw:text-gray-900">Manage Blogs</h1>
        </div>
        {!showForm && (
          <button
            onClick={() => {
              setFormData(initialFormState);
              setIsEditing(false);
              setShowForm(true);
            }}
            className="tw:bg-[#964A26] tw:text-white tw:px-4 tw:py-2 tw:rounded-md hover:tw:bg-[#7a3b1d] tw:transition-colors"
          >
            + Add New Blog
          </button>
        )}
      </div>

      {showForm ? (
        <div className="tw:bg-white tw:p-8 tw:rounded-2xl tw:shadow-sm tw:border tw:border-gray-100">
          <h2 className="tw:text-xl tw:font-medium tw:mb-6">{isEditing ? "Edit Blog" : "Create New Blog"}</h2>
          <form onSubmit={handleSubmit} className="tw:space-y-6">
            <div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 tw:gap-6">
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Title *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2 focus:tw:ring-[#964A26] focus:tw:border-[#964A26]" />
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Slug (URL) *</label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} disabled={isEditing} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2 disabled:tw:bg-gray-100" />
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Subtitle</label>
                <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Hero Image *</label>
                <input required={!isEditing} type="file" accept="image/*" name="heroImg" onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
                {isEditing && typeof formData.heroImg === 'string' && formData.heroImg && (
                  <div className="tw:text-xs tw:text-gray-500 tw:mt-1 tw:truncate">Current: {formData.heroImg.substring(0, 30)}...</div>
                )}
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Author Name *</label>
                <input required type="text" name="authorName" value={formData.authorName} onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Author Avatar Image</label>
                <input type="file" accept="image/*" name="authorAvatar" onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
                {isEditing && typeof formData.authorAvatar === 'string' && formData.authorAvatar && (
                  <div className="tw:text-xs tw:text-gray-500 tw:mt-1 tw:truncate">Current: {formData.authorAvatar.substring(0, 30)}...</div>
                )}
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Genres (comma separated)</label>
                <input type="text" name="genres" value={formData.genres} onChange={handleChange} placeholder="e.g. Art, UI, Design" className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
              </div>
              <div>
                <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Rating</label>
                <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2" />
              </div>
            </div>

            <div>
              <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Short Bio</label>
              <textarea name="shortBio" value={formData.shortBio} onChange={handleChange} rows="2" className="tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:px-3 tw:py-2"></textarea>
            </div>

            <div>
              <label className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 tw:mb-1">Content (Rich Text) *</label>
              <div className="tw:bg-white tw:rounded-md tw:overflow-hidden jodit-wrapper-custom">
                <JoditEditor
                  ref={editor}
                  value={formData.content}
                  config={config}
                  onBlur={(newContent) => handleQuillChange(newContent)}
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="tw:flex tw:items-center tw:gap-2">
              <input type="checkbox" id="isActive" name="isActive" checked={formData.isActive} onChange={handleChange} className="tw:w-4 tw:h-4 tw:text-[#964A26] tw:border-gray-300 tw:rounded focus:tw:ring-[#964A26]" />
              <label htmlFor="isActive" className="tw:text-sm tw:font-medium tw:text-gray-700">Active (Visible to public)</label>
            </div>

            <div className="tw:flex tw:gap-4 tw:pt-4">
              <button type="submit" className="tw:bg-[#964A26] tw:text-white tw:px-6 tw:py-2 tw:rounded-md hover:tw:bg-[#7a3b1d] tw:transition-colors">
                {isEditing ? "Update Blog" : "Save Blog"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="tw:bg-gray-200 tw:text-gray-800 tw:px-6 tw:py-2 tw:rounded-md hover:tw:bg-gray-300 tw:transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="tw:bg-white tw:rounded-2xl tw:shadow-sm tw:border tw:border-gray-100 tw:overflow-hidden">
          {loading ? (
            <div className="tw:p-8 tw:text-center tw:text-gray-500">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="tw:p-8 tw:text-center tw:text-gray-500">No blogs found. Add one to get started!</div>
          ) : (
            <div className="tw:overflow-x-auto">
              <table className="tw:w-full tw:text-left tw:border-collapse">
                <thead>
                  <tr className="tw:bg-gray-50 tw:border-b tw:border-gray-100">
                    <th className="tw:p-4 tw:font-medium tw:text-gray-600">Title</th>
                    <th className="tw:p-4 tw:font-medium tw:text-gray-600">Author</th>
                    <th className="tw:p-4 tw:font-medium tw:text-gray-600">Status</th>
                    <th className="tw:p-4 tw:font-medium tw:text-gray-600">Date</th>
                    <th className="tw:p-4 tw:font-medium tw:text-gray-600 tw:text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="tw:border-b tw:border-gray-50 hover:tw:bg-gray-50/50">
                      <td className="tw:p-4 tw:font-medium tw:text-gray-900">{blog.title}</td>
                      <td className="tw:p-4 tw:text-gray-600">{blog.authorName}</td>
                      <td className="tw:p-4">
                        <span className={`tw:px-2.5 tw:py-1 tw:rounded-full tw:text-xs tw:font-medium ${blog.isActive ? 'tw:bg-green-100 tw:text-green-800' : 'tw:bg-gray-100 tw:text-gray-800'}`}>
                          {blog.isActive ? 'Active' : 'Draft'}
                        </span>
                      </td>
                      <td className="tw:p-4 tw:text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</td>
                      <td className="tw:p-4 tw:text-right tw:space-x-3">
                        <Link href={`/blog/${blog.slug}`} target="_blank" className="tw:text-blue-600 hover:tw:underline tw:text-sm">
                          View
                        </Link>
                        <button onClick={() => handleEdit(blog)} className="tw:text-[#964A26] hover:tw:underline tw:text-sm">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(blog.slug)} className="tw:text-red-600 hover:tw:underline tw:text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
