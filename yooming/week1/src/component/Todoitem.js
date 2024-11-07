import './Todoitem.css';

const Todoitem = ({id,isDone, content}) => {

    return (
    <div className="Todoitem">
        <div className="item">
            <div className="content">
                {content}
            </div>
            <button className="isdone">
                {isDone === true ? "삭제" : "완료"}
            </button>
        </div>
    </div>
    );
};
 export default Todoitem;