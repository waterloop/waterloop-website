import React from 'react';
import { Button } from 'components/Button';
import { PostingShortConverted } from 'postings';

interface Props {
  team: string;
  postings: PostingShortConverted[];
}

const SubTeam: React.FC<Props> = (props) => props.postings.length > 0 ? (
  <div className={'postings'}>
    <h3
      style={{
        fontSize: '18px',
        color: 'black',
      }}
    >
      <strong>{props.team}</strong>
    </h3>
    {props.postings.length > 0 &&
      props.postings.map(
        (posting, idx) =>
          posting.team === props.team && (
            <div className={'posting'} key={idx}>
              <a
                href={`/posting/${posting.id}`}
                style={{
                  fontSize: '24px',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                {posting.title}
              </a>
              <Button
                backgroundColor="yellow"
                textColor="black"
                text={'MORE\u00A0INFO'}
                onClick={(): Window | null =>
                  window.open(`/posting/${posting.id}`, '_self')
                }
              />
            </div>
          )
      )}
  </div>
) : (
  <></>
);

export default SubTeam;
