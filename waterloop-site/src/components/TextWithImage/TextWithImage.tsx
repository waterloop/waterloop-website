import React from 'react';
import { Button } from 'components/Button';
import 'theme/styles.scss';

export type MyProps = {
  title?: string;
  text: string;
  link?: string;
  linkText?: string;
};

interface Props {
  data: MyProps[];
  imgData: string[];
  textPos?: string;
}

export class TextWithImage extends React.Component<Props> {
  renderChildren = (data: MyProps[]): React.ReactElement[] => {
    let isRightLeft = true; // Alternate between right-left and left-right layout.
    let key = -1;
    return data.map((entry: MyProps) => {
      isRightLeft = !isRightLeft;
      key += 1;

      // Determine if image should be displayed first or after text:
      let posClass = '';
      switch (this.props.textPos) {
        case 'left':
          posClass = 'left-right-variant';
          break;
        case 'right':
          posClass = 'right-left-variant';
          break;

        default:
          // The "alternate" case
          posClass = isRightLeft ? 'right-left-variant' : 'left-right-variant';
      }

      return (
        <div key={key} className={`Block-TextWithImage ${posClass}`}>
          <div className="TextBlock-TextWithImage">
            {entry.title !== undefined ? <h3>{entry.title}</h3> : <b></b>}
            <p>{entry.text}</p>
            <div className="ButtonBlock-TextWithImage">
              {this.renderButton(entry.link, entry.linkText)}
            </div>
          </div>
          <img
            className="Img-TextWithImage"
            src={this.props.imgData[key]}
            alt="waterloop"
          ></img>
          <div className="text-w-image-btn-mobile">
            {this.renderButton(entry.link, entry.linkText)}
          </div>
        </div>
      );
    });
  };

  renderButton = (link: string | undefined, linkText: string | undefined): React.ReactElement => {
    if (link !== undefined && linkText !== undefined) {
      return (
        <Button
          backgroundColor="yellow"
          textColor="black"
          text={linkText}
          onClick={(): Window | null => window.open(link, '_self')}
        />
      );
    }
    return <></>
  };

  render(): React.ReactElement {
    return <div>{this.renderChildren(this.props.data)}</div>;
  }
}
