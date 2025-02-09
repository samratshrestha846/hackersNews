import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";
import HeadLine from "./HomeComponents/HeadLine";
import FeaturePost from "./HomeComponents/FeaturePost";
import LatestPost from "./HomeComponents/LatestPost";
import Post from "./HomeComponents/Post";

export default function Home() {
    return (
        <Layout>
            <Head title="Home" />

            <HeadLine />

            <FeaturePost />

            <Post />

            <LatestPost />
        </Layout>
    );
}
