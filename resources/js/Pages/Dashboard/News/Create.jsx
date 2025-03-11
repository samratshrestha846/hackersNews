import { useForm } from "@inertiajs/react";
import Dashboard from "@/Pages/Dashboard";
import FormComponent from "./Components/FormComponent";

export default function CreateNews({ categories, tags }) {
    const { data, setData, post, errors } = useForm({
        title: "",
        image: "",
        is_active: false,
        is_featured: false,
        short_description: "",
        description: "",
        categories: [],
        tags: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("news.store"));
    };

    return (
        <Dashboard>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Create News
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
                            Create News
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
}
