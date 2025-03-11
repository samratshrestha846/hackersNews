import { useForm } from "@inertiajs/react";
import Dashboard from "@/Pages/Dashboard";
import FormComponent from "./Components/FormComponent";

export default function EditNews({ news, categories, tags }) {
    console.log(news.categories);
    const { data, setData, post, errors } = useForm({
        title: news.title,
        image: "",
        is_active: news.is_active,
        is_featured: news.is_featured,
        short_description: news.short_description,
        description: news.description,
        categories: news.categories.map((category) => category.id),
        tags: news.tags.map((tag) => tag.id),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("news.update", news.id)); // Update news with the existing ID
    };

    return (
        <Dashboard>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Edit News
                    </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <FormComponent
                            data={data}
                            setData={setData}
                            errors={errors}
                            categories={categories}
                            tags={tags}
                        />
                    </div>
                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mt-4"
                        >
                            Update News
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
}
