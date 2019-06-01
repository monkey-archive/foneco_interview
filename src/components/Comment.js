import React from 'react'

const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const oddOrEven = n => n % 2 === 0 ? 'even' : 'odd'

const timestampToDate = d => {
    let date = new Date(d);
    let formatted_date = date.getDay() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
    return formatted_date;
}

const Comment = (props) => {console.log(props); return(
    <div className={'comment comment-' + oddOrEven(props.index)}>
        <div className='comment-info'>
            <div>{timestampToDate(props.ts)}</div>
            By <a
                target='_blank'
                href={"mailto:" + props.email + "?subject=Comments"}
                >
                {props.name}
            </a>
        </div>
        <div className='comment-text'>{props.comment}</div>
    </div>
)};

export default Comment;