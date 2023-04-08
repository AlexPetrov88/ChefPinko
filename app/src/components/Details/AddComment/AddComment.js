import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);
    const isComment = formValues.comment;
    console.log(isComment);
    return (
            <article className="create-comment">
                <label className="labelComment">Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea className="textComment" name="comment" placeholder="Comment......" value={formValues.comment} onChange={onChangeHandler}></textarea>
                    {isComment &&
                    <input className="submit btnComment" type="submit" value="Add Comment" />
                    }
                </form>
            </article> 
    );
};
