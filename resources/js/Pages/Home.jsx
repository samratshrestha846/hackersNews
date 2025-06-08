import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";
import HeadLine from "./HomeComponents/HeadLine";
import FeaturePost from "./HomeComponents/FeaturePost";
import LatestPost from "./HomeComponents/LatestPost";
import Post from "./HomeComponents/Post";
import FlashMessage from "./HomeComponents/FlashMessage";

export default function Home() {
    const { props } = usePage();
    const { success, error } = props.flash || {};

    return (
        <Layout>
            <Head title="Home" />

            <FlashMessage />

            <HeadLine />

            <FeaturePost />

            <Post />

            <LatestPost />
        </Layout>
    );
}
