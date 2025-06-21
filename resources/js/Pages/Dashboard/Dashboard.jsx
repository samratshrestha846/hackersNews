import { Link } from "@inertiajs/react";
import DashboardLayout from "./DashboardLayout";

export default function Dashboard({
    categoriesCount,
    tagsCount,
    newsCount,
    usersCount,
    subscribersCount,
    totalNewsViews,
    totalUniqueNewsViews,
    totalCategoryViews,
    totalUniqueCategoryViews,
    totalTagViews,
    totalUniqueTagViews,
    overallViews,
    overallUniqueVisitors,
    topNews,
    topCategories,
    topTags,
}) {
    console.log(topCategories, topTags);
    return (
        <DashboardLayout>
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard
                    title="News"
                    icon="fas fa-newspaper"
                    count={newsCount}
                    routeName="news.index"
                />
                <StatCard
                    title="Categories"
                    icon="fas fa-th-large"
                    count={categoriesCount}
                    routeName="categories.index"
                />
                <StatCard
                    title="Tags"
                    icon="fas fa-tag"
                    count={tagsCount}
                    routeName="tags.index"
                />
                <StatCard
                    title="Users"
                    icon="fas fa-users"
                    count={usersCount}
                    routeName="users.index"
                />
                <StatCard
                    title="Subscribers"
                    icon="fas fa-users"
                    count={subscribersCount}
                    routeName="subscribers.index"
                />
            </div>

            {/* Views Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <ViewCard
                    title="News Views"
                    total={totalNewsViews}
                    unique={totalUniqueNewsViews}
                />
                <ViewCard
                    title="Category Views"
                    total={totalCategoryViews}
                    unique={totalUniqueCategoryViews}
                />
                <ViewCard
                    title="Tag Views"
                    total={totalTagViews}
                    unique={totalUniqueTagViews}
                />
                <ViewCard
                    title="Overall Views"
                    total={overallViews}
                    unique={overallUniqueVisitors}
                />
            </div>

            {/* Top Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <TopList
                    title="Top News"
                    items={topNews}
                    label="title"
                    routeBase="news"
                />
                <TopList
                    title="Top Categories"
                    items={topCategories}
                    label="title"
                    routeBase="category"
                />
                <TopList
                    title="Top Tags"
                    items={topTags}
                    label="title"
                    routeBase="tag"
                />
            </div>
        </DashboardLayout>
    );
}

// --- Reusable Components ---

const StatCard = ({ title, icon, count, routeName }) => (
    <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold flex items-center">
            <i className={`${icon} mr-2`}></i> {title}
        </h3>
        <p className="text-2xl font-bold">{count}</p>
        <Link href={route(routeName)} className="text-blue-600 hover:underline">
            View {title}
        </Link>
    </div>
);

const ViewCard = ({ title, total, unique }) => (
    <div className="bg-white p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p>
            <strong>Total:</strong> {total}
        </p>
        <p>
            <strong>Unique:</strong> {unique}
        </p>
    </div>
);

const TopList = ({ title, items, label, routeBase }) => (
    <div className="bg-white p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <ul className="space-y-1">
            {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                    <Link
                        href={`/${routeBase}/${item.slug}`}
                        className="text-blue-700 hover:underline"
                    >
                        {item[label]}
                    </Link>
                    <span className="font-bold text-sm text-gray-600">
                        {item.views_count} views
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
