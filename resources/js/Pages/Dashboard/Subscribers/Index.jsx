import DashboardLayout from "@/Pages/Dashboard/DashboardLayout";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ subscribers, search }) {
    const { flash } = usePage().props;
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        router.get(
            route("subscribers.index"),
            { search: newQuery },
            { preserveState: true, replace: true }
        );
    };

    return (
        <DashboardLayout>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Subscribers</h1>

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
                            placeholder="Search subscriber..."
                            className="border p-2 rounded w-full"
                        />
                    </div>
                </div>

                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.data.length > 0 ? (
                            subscribers.data.map((subscriber) => (
                                <tr
                                    key={subscriber.id}
                                    className="border-t hover:bg-gray-100"
                                >
                                    <td className="p-3">{subscriber.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-3 text-center text-gray-500"
                                >
                                    No subscriber found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="mt-4">
                    {subscribers.links.map((link) => (
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
