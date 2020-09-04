import React from 'react';
import { Button } from 'components/Button';

interface Posting{
  subteam: string;
  role: string;
}

interface Props {
  team: string;
  postings: Posting[];
}

const SubTeam: React.FC<Props> = (props) => (
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
        (item: Posting, index: number) =>
          item.subteam === props.team && (
            <div className={'posting'}>
              <a
                href={`/posting/${index + 1}`}
                style={{
                  fontSize: '24px',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                {item.role}
              </a>
              <Button
                backgroundColor="yellow"
                textColor="black"
                text={'APPLY'}
                onClick={(): Window | null =>
                  window.open(`/posting/${index + 1}`, '_self')
                }
              />
            </div>
          )
      )}
  </div>
);

export default SubTeam;
