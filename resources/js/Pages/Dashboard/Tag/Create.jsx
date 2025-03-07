import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "@/Pages/Dashboard";
import FormComponent from "./Components/FormComponent";

export default function CreateTag() {
    const { data, setData, post, errors } = useForm({
        title: "",
        is_active: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tags.store"));
    };

    return (
        <Dashboard>
            <div className="bg-white rounded-lg shadow p-6 ">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Create Tag
                    </h2>
                </div>
                <div className="border border-gray-100 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <FormComponent
                                data={data}
                                setData={setData}
                                errors={errors}
                            />
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                            >
                                Create Tag
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
}
