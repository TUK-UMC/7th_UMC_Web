import React, { useContext } from "react";
import CardListSkeleton from "./skeleton/card-list-skeleton";
import { LoginContext } from "../context/LoginContext";

const Loading = () => {
    const {
        register,
        handleSubmit,
        errors,
        isValid,
        onSubmit,
        isLoading,
        isError,
    } = useContext(LoginContext);
    return(
        <CardListSkeleton number={20} />
    )
};

export default Loading;