import React from 'react';
import { Button } from 'components/Button';
import { Posting } from '../../static/consts/postings';

interface Props {
  team: string;
  postings: Posting[];
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
        (posting: Posting) =>
          posting.subteam === props.team && (
            <div className={'posting'}>
              <a
                href={`/posting/${posting.id}`}
                style={{
                  fontSize: '24px',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                {posting.role}
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
