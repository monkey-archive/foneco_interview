import React from 'react'

const CommentListSkeleton = () => ( 
    <div className="comment-list">
        <h3>Comments</h3>
        <div className="comments">
            <div className="comment-even comment-skeleton"/>
            <div className="comment-odd comment-skeleton"/>
            <div className="comment-even comment-skeleton"/>
            <div className="comment-odd comment-skeleton"/>
            <div className="comment-even comment-skeleton"/>
        </div>
    </div>
);

export default CommentListSkeleton;