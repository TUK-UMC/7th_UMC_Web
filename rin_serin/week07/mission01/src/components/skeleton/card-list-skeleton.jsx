import CardSkeleton from "./card-skeleton";

const CardListSkeleton = ({number}) => {
    return(
        new Array(number). fill().map((_, idx)=><CardSkeleton/>)
    )
}

export default CardListSkeleton;