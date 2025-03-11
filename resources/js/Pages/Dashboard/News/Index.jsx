import Dashboard from "@/Pages/Dashboard";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ news, search }) {
    const { flash } = usePage().props;
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        router.get(
            route("news.index"),
            { search: newQuery },
            { preserveState: true, replace: true }
        );
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this news?")) {
            router.delete(route("news.destroy", id));
        }
    };

    return (
        <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">News</h1>

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
                            placeholder="Search news..."
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <Link
                        href={route("news.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        + Add News
                    </Link>
                </div>

                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Title</th>
                            <th className="p-3">Slug</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.data.length > 0 ? (
                            news.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-gray-100"
                                >
                                    <td className="p-3">{item.title}</td>
                                    <td className="p-3">{item.slug}</td>
                                    <td className="p-3 flex space-x-2">
                                        <Link
                                            href={route("news.show", item.id)} // route to show page
                                            className="text-green-500 hover:underline"
                                        >
                                            Show
                                        </Link>
                                        <Link
                                            href={route("news.edit", item.id)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(item.id)
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
                                    No news found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Dashboard>
    );
}
