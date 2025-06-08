import React from "react";
import { Head, usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { props } = usePage();
    const { success, error } = props.flash || {};

    return (
        <>
            {success && (
                <div className="bg-green-100 text-green-800 p-4 rounded mb-4 border border-green-300">
                    {success}
                </div>
            )}
            {error && (
                <div className="bg-red-100 text-red-800 p-4 rounded mb-4 border border-red-300">
                    {error}
                </div>
            )}
        </>
    );
}
