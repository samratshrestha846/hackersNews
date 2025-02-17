import Dashboard from "@/Pages/Dashboard";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ users, search }) {
    const { flash } = usePage().props;
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        router.get(
            route("users.index"),
            { search: newQuery },
            { preserveState: true, replace: true }
        );
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("users.destroy", id));
        }
    };

    return (
        <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Users</h1>

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
                            placeholder="Search users..."
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <Link
                        href={route("users.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        + Add User
                    </Link>
                </div>

                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.length > 0 ? (
                            users.data.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-t hover:bg-gray-100"
                                >
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3 flex space-x-2">
                                        <Link
                                            href={route("users.edit", user.id)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                        <Link
                                            href={route(
                                                "users.reset-password",
                                                user.id
                                            )}
                                            className="text-yellow-500 hover:underline"
                                        >
                                            Reset
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-3 text-center text-gray-500"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="mt-4">
                    {users.links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            className={`px-3 py-1 border rounded ${
                                link.active
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } mx-1`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </Dashboard>
    );
}
