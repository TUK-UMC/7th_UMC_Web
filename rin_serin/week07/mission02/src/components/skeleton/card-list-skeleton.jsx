import CardSkeleton from "./card-skeleton";

const CardListSkeleton = ({number}) => {
    return(
        new Array(number). fill().map((_, idx)=><CardSkeleton key={idx}/>)
    )
}

export default CardListSkeleton;