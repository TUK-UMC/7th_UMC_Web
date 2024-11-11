import React from "react";
import CardListSkeleton from "./skeleton/card-list-skeleton";

const Loading = () => (
    <CardListSkeleton number={20} />
);

export default Loading;