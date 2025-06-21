import DashboardLayout from "@/Pages/Dashboard/DashboardLayout";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ categories, search }) {
    const { flash } = usePage().props;
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        router.get(
            route("categories.index"),
            { search: newQuery },
            { preserveState: true, replace: true }
        );
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            router.delete(route("categories.destroy", id));
        }
    };

    return (
        <DashboardLayout>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Categories</h1>

                {flash?.success && (
                    <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                        {flash.success}
                    </div>
                )}

                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/3">
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Search category..."
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <Link
                        href={route("categories.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        + Add Category
                    </Link>
                </div>

                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Title</th>
                            <th className="p-3">Slug</th>
                            <th className="p-3">Is Active</th>
                            <th className="p-3">Visitor Count</th>
                            <th className="p-3">Unique Visitor Count</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.length > 0 ? (
                            categories.data.map((category) => (
                                <tr
                                    key={category.id}
                                    className="border-t hover:bg-gray-100"
                                >
                                    <td className="p-3">{category.title}</td>
                                    <td className="p-3">{category.slug}</td>
                                    <td className="p-3">
                                        {category.is_active ? "Yes" : "No"}
                                    </td>
                                    <td className="p-3">
                                        {category.views_count}
                                    </td>
                                    <td className="p-3">
                                        {category.unique_views_count}
                                    </td>
                                    <td className="p-3 flex space-x-2">
                                        <Link
                                            href={route(
                                                "categories.edit",
                                                category.id
                                            )}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(category.id)
                                            }
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-3 text-center text-gray-500"
                                >
                                    No categories found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="mt-4">
                    {categories.links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            className={`px-3 py-1 border rounded ${
                                link.active
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } mx-1`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
