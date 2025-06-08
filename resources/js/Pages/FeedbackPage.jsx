import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";
import Sidebar from "@/Layouts/Sidebar";
import Search from "@/Components/Search";
import FlashMessage from "./HomeComponents/FlashMessage";

export default function FeedbackPage() {
    const { news } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const { flash } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/feedback", {
            onSuccess: () => reset(),
        });
    };
    return (
        <Layout>
            <Head title="Feedback-Singh IT" />
            <>
                <FlashMessage />

                {/* Breadcrumb */}
                <div className="container">
                    <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 m-tb-6">
                            <a href="/" className="breadcrumb-item f1-s-3 cl9">
                                Home
                            </a>
                            <span className="breadcrumb-item f1-s-3 cl9">
                                Feedback
                            </span>
                        </div>
                        <Search />
                    </div>
                </div>

                {/* Content */}
                <section className="bg0 p-b-140 p-t-10">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-30">
                                <div className="p-r-10 p-r-0-sr991">
                                    <h1 className="text-2xl font-bold mb-4">
                                        Send Us Your Feedback
                                    </h1>

                                    <form
                                        onSubmit={handleSubmit}
                                        className="w-full space-y-4"
                                    >
                                        <div>
                                            <label className="block mb-1">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border p-2 rounded"
                                            />
                                            {errors.name && (
                                                <div className="text-red-600 text-sm">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border p-2 rounded"
                                            />
                                            {errors.email && (
                                                <div className="text-red-600 text-sm">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block mb-1">
                                                Message
                                            </label>
                                            <textarea
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border p-2 rounded"
                                                rows="5"
                                            />
                                            {errors.message && (
                                                <div className="text-red-600 text-sm">
                                                    {errors.message}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        >
                                            Submit Feedback
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
}
