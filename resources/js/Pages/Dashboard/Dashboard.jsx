import { Link } from "@inertiajs/react";
import DashboardLayout from "./DashboardLayout";

export default function Dashboard({
    children,
    categoriesCount,
    tagsCount,
    newsCount,
    usersCount,
}) {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Quick Links */}
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-semibold flex items-center">
                        <i className="fas fa-newspaper mr-2"></i> News
                    </h3>
                    <p className="text-2xl font-bold">{newsCount}</p>
                    <Link
                        href={route("news.index")}
                        className="text-blue-600 hover:underline"
                    >
                        View News
                    </Link>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-semibold flex items-center">
                        <i className="fas fa-th-large mr-2"></i> Categories
                    </h3>
                    <p className="text-2xl font-bold">{categoriesCount}</p>
                    <Link
                        href={route("categories.index")}
                        className="text-blue-600 hover:underline"
                    >
                        View Categories
                    </Link>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-semibold flex items-center">
                        <i className="fas fa-tag mr-2"></i> Tags
                    </h3>
                    <p className="text-2xl font-bold">{tagsCount}</p>
                    <Link
                        href={route("tags.index")}
                        className="text-blue-600 hover:underline"
                    >
                        View Tags
                    </Link>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-semibold flex items-center">
                        <i className="fas fa-users mr-2"></i> Users
                    </h3>
                    <p className="text-2xl font-bold">{usersCount}</p>
                    <Link
                        href={route("users.index")}
                        className="text-blue-600 hover:underline"
                    >
                        View Users
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
}
