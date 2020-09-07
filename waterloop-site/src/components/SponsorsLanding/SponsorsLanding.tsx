import React from 'react';

import { Button } from 'components/Button';

export type ImgJSON = { imgSrc: string; imgAlt: string };

interface Props {
  data: ImgJSON[];
}

const renderImages = (data: ImgJSON[]): React.ReactElement[] =>
  data.map(entry => (
    <div key={entry.imgSrc} className="Img-Box-Sponsors">
      <img className="Img-Sponsors" src={entry.imgSrc} alt={entry.imgAlt} />
    </div>
  ));

const SponsorsLanding: React.FC<Props> = props => (
  <div className="Block-Sponsors">
    <h2>Our Sponsors</h2>
    <div className="SponsorsContainer">{renderImages(props.data)}</div>
    <div className="Button-Sponsors">
      <Button
        backgroundColor="yellow"
        textColor="black"
        text="ALL SPONSORS"
        onClick={(): Window | null => window.open('sponsors', '_self')}
      />
    </div>
  </div>
);

export default SponsorsLanding;
