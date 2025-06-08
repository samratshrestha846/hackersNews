import DashboardLayout from "@/Pages/Dashboard/DashboardLayout";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ feedbacks, search }) {
    const { flash } = usePage().props;
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        router.get(
            route("feedbacks.index"),
            { search: newQuery },
            { preserveState: true, replace: true }
        );
    };

    return (
        <DashboardLayout>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Feedbacks</h1>

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
                            placeholder="Search Feedbacks..."
                            className="border p-2 rounded w-full"
                        />
                    </div>
                </div>

                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.data.length > 0 ? (
                            feedbacks.data.map((feedback) => (
                                <tr
                                    key={feedback.id}
                                    className="border-t hover:bg-gray-100"
                                >
                                    <td className="p-3">{feedback.name}</td>
                                    <td className="p-3">{feedback.email}</td>
                                    <td className="p-3">{feedback.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-3 text-center text-gray-500"
                                >
                                    No feedback found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="mt-4">
                    {feedbacks.links.map((link) => (
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
