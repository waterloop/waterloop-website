import React from 'react';
import 'theme/styles.scss';

type bodyItem = {
  heading: string;
  text: string;
  link?: string;
};
export type Props = {
  title: string;
  body: bodyItem[];
};

export class ColumnBlock extends React.Component<{
  data: Props[];
  imgData: string[];
}> {
  render() {
    return (
      <>
        <div className="banner">
          <h2 className="white-text">{this.props.data[0].title}</h2>
        </div>
        <div className="pageContainer">
          <div className="col-block">
            {this.props.data[0].body.map((item) => {
              return (
                <div>
                  <h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.heading}
                    </a>
                  </h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
