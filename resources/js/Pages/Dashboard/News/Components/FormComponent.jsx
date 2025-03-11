import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for WYSIWYG editor
import Select from "react-select";

export default function FormComponent({
    data,
    setData,
    errors,
    categories,
    tags,
}) {
    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);
    };

    return (
        <>
            {/* Title */}
            <div>
                <label className="block font-medium">Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
            </div>

            {/* Image Upload */}
            <div>
                <label className="block font-medium">Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                />
                {errors.image && (
                    <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
            </div>
            {/* Categories Multi-Select */}
            <div>
                <label className="block font-medium">Categories</label>
                <Select
                    isMulti
                    options={categories.map((category) => ({
                        value: category.id,
                        label: category.title,
                    }))}
                    value={data.categories.map((id) => ({
                        value: id,
                        label: categories.find((cat) => cat.id === id)?.title,
                    }))}
                    onChange={(selected) =>
                        setData(
                            "categories",
                            selected.map((item) => item.value)
                        )
                    }
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                {errors.categories && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.categories}
                    </p>
                )}
            </div>

            {/* Tags Multi-Select */}
            <div>
                <label className="block font-medium">Tags</label>
                <Select
                    isMulti
                    options={tags.map((tag) => ({
                        value: tag.id,
                        label: tag.title,
                    }))}
                    value={data.tags.map((id) => ({
                        value: id,
                        label: tags.find((t) => t.id === id)?.title,
                    }))}
                    onChange={(selected) =>
                        setData(
                            "tags",
                            selected.map((item) => item.value)
                        )
                    }
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                {errors.tags && (
                    <p className="text-red-500 text-sm mt-1">{errors.tags}</p>
                )}
            </div>

            {/* Is Active */}
            <div>
                <label className="block font-medium">Active</label>
                <input
                    type="checkbox"
                    checked={data.is_active}
                    onChange={(e) => setData("is_active", e.target.checked)}
                />
            </div>

            {/* Is Featured */}
            <div>
                <label className="block font-medium">Featured</label>
                <input
                    type="checkbox"
                    checked={data.is_featured}
                    onChange={(e) => setData("is_featured", e.target.checked)}
                />
            </div>

            {/* Short Description */}
            <div>
                <label className="block font-medium">Short Description</label>
                <ReactQuill
                    value={data.short_description}
                    onChange={(value) => setData("short_description", value)}
                    className="bg-white h-96 mb-5"
                />
                {errors.short_description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.short_description}
                    </p>
                )}
            </div>

            {/* WYSIWYG Description */}
            <div>
                <label className="block font-medium">Description</label>
                <ReactQuill
                    value={data.description}
                    onChange={(value) => setData("description", value)}
                    className="bg-white h-96 mb-5"
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                    </p>
                )}
            </div>
        </>
    );
}
