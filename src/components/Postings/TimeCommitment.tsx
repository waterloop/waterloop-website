import React from 'react';
import usePostings from '../../hooks/postings';

type TimeCommitmentProps = {

};



const TimeCommitment: React.FC<TimeCommitmentProps> = (props) => {
    const {postings} = usePostings();
    console.log(postings);
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
}; 

export default TimeCommitment;