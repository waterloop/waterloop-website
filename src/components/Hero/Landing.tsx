import React from 'react';
// import BuildingsImg from 'static/img/background/buildings.svg';
import WaterloopImg from 'static/img/background/waterloop.svg';
import pod from 'static/img/background/pod.svg';
import torontosky from  'static/img/background/Toronto_Skyline.svg';
import montrealsky from 'static/img/background/Waterloop_Montreal_Skyline.svg';
import yellowbanner from 'static/img/background/yellow banner.svg';
import '../../theme/styles.scss';
import { Link } from 'react-scroll';

type MyProps = { description: string; anchor: string };

class Landing extends React.Component<MyProps> {
  render() {
    return (
      <div className="landingContainer">
        <div className="landingContent">
          <div className="landingWaterloopContainer">
            <img
              className="landingWaterloop"
              src={WaterloopImg}
              alt="waterloop logo"
            />
          </div>
          <div className="landingDescriptionContainer">
            <h3 className="white-text center-text">{this.props.description}</h3>
          </div>
          {/* COMMENT BELOW ONCE POSTINGS ARE UP */}
          <button
            onClick={(): Window | null => window.open('/recruitment', '_self')}
            className={'ButtonDiv landing-btn'}
          >
            <div className={'ButtonText'}>JOIN US</div>
          </button>
          <Link
            to={this.props.anchor}
            smooth={true}
            offset={-80}
            duration={750}
          >
            {/* UNCOMMENT BELOW ONCE POSTINGS ARE DONE */}

            {/* <button className={"ButtonDiv landing-btn"}>
              <div className={"ButtonText"}>EXPLORE</div>
            </button> */}
          </Link>
        </div>

{/*  <div className="landingBuildingContainer">
          <img
            className="landingBuildings"
            src={BuildingsImg}
            alt="buildings"
          ></img>
        </div> */}
        {/* <div className='pod'> */}
          <img
            className="pod"
            src={pod}
            alt="pods"
          ></img>
        {/* </div> */}
        <div className="yellowbanner">
          <img
            className="yellowbanner"
            src={yellowbanner}
            alt="yellowbannerimg"
            ></img>
        </div>

        <div className="torontosky">
          <img
            className="torontosky"
            src={torontosky}
            alt="torontoskyline"
            ></img>
        </div>
         
        <div className="montrealsky">
          <img
            className="montrealsky"
            src={montrealsky}
            alt="montrealskyline"
            ></img>
        </div>
        {/* </div>/ */}
      </div>
    );
  }
}

export default Landing;
