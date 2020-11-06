import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sponsor from './Sponsor';
import Brent from '../../static/img/official-sponsors/BrentsWeldingAndFab.png';
import Weef from '../../static/img/official-sponsors/weef.jpg';
import WaterlooEng from '../../static/img/official-sponsors/wes.jpg';
import UW from '../../static/img/official-sponsors/foe.jpg';
import ClickUp from '../../static/img/official-sponsors/ClickUp.png';
import WCBranham from '../../static/img/official-sponsors/WCBranham.png';
import Ansys from '../../static/img/official-sponsors/ANSYS.png';
import PSIM from '../../static/img/official-sponsors/PSIM.png';
import APP from '../../static/img/official-sponsors/AndersonPowerProducts.png';
import Connexion from '../../static/img/official-sponsors/3dconnexion.png';
import StarTechnology from '../../static/img/official-sponsors/StarTechnology.png';
import Sony from '../../static/img/official-sponsors/sony.png';
import WPrint from '../../static/img/official-sponsors/WPrint.png';
import Wera from '../../static/img/official-sponsors/Wera.png';
import Overleaf from '../../static/img/official-sponsors/overleaf_wide_colour_light_bg.png';
import Altium from '../../static/img/official-sponsors/altium.jpg';
import L3harris from '../../static/img/official-sponsors/l3harris.png';
import Mitutoyo from '../../static/img/official-sponsors/mitutoyo.png';
import StickerMule from '../../static/img/official-sponsors/Stickermule.png';
import SponsorModal from './SponsorModal';

interface ISponsor {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  link: string;
  level: 'Hypersonic' | 'Transonic' | 'Supersonic' | 'Sonic';
  dateJoined: string;
  collaboration: string;
  video?: string;
}

/* Move this to the CMS Eventually */
const sponsors: ISponsor[] = [
  {
    image: { src: APP, alt: 'sponsor' },
    link: 'https://www.andersonpower.com/us/en.html',
    name: 'Anderson Power Products',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: UW, alt: 'sponsor' },
    link: 'https://uwaterloo.ca/',
    name: 'University of Waterloo',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Weef, alt: 'sponsor' },
    link: 'https://uwaterloo.ca/engineering-endowment-foundation/',
    name: 'Waterloo Engineering Endowment Fund',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: WaterlooEng, alt: 'sponsor' },
    link: 'https://www.engsoc.uwaterloo.ca/',
    name: 'Waterloo Engineering Society',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Brent, alt: 'sponsor' },
    link: 'http://www.brentswelding.com/',
    name: "Brent's Welding and Fabrication Inc",
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
    video: 'https://www.youtube.com/embed/XyoX9HxxYrM',
  },
  {
    image: { src: ClickUp, alt: 'sponsor' },
    link: 'https://clickup.com/',
    name: 'ClickUp',
    level: 'Supersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: WCBranham, alt: 'sponsor' },
    link: 'https://www.wcbranham.com/',
    name: 'WC Brandham',
    level: 'Supersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Ansys, alt: 'sponsor' },
    link: 'https://www.ansys.com/',
    name: 'Ansys',
    level: 'Transonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: PSIM, alt: 'sponsor' },
    link: 'https://powersimtech.com/products/psim/',
    name: 'PSIM',
    level: 'Transonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Connexion, alt: 'sponsor' },
    link: 'https://3dconnexion.com/uk/choose-your-country-or-region/?redirect=',
    name: '3D Connexion',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: StarTechnology, alt: 'sponsor' },
    link: 'https://www.star-technology.com/',
    name: 'Star Technology',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Sony, alt: 'sponsor' },
    link: 'https://www.sony.ca/en',
    name: 'Sony',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: WPrint, alt: 'sponsor' },
    link: 'https://wstore.uwaterloo.ca/wprint',
    name: 'W Print',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Wera, alt: 'sponsor' },
    link: 'https://www-de.wera.de/en/',
    name: 'Wera Tools',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Overleaf, alt: 'sponsor' },
    link: 'https://www.overleaf.com/',
    name: 'Overleaf',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Altium, alt: 'sponsor' },
    link: 'https://www.altium.com/',
    name: 'Altium',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: L3harris, alt: 'sponsor' },
    link: 'https://www.l3harris.com/',
    name: 'L3 Harris',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: Mitutoyo, alt: 'sponsor' },
    link: 'https://www.mitutoyo.com/',
    name: 'Mitutoyo',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ut ut proin enim a. Ut facilisis blandit neque purus mollis purus eu. Arcu semper netus ut cursus egestas est. Lacus mauris consectetur ut phasellus feugiat laoreet dignissim maecenas. In amet a, ut quis mi. Tortor neque vitae, gravida magna eget. Eros, vitae auctor venenatis, in ac posuere morbi. Nam est nec pharetra commodo ut.
    Phasellus ipsum egestas ullamcorper sem commodo. Convallis fermentum nullam augue eget mattis. Pharetra ultrices quam dignissim massa in eleifend cras ut euismod. Convallis mauris, interdum dictumst cursus tortor quis quis urna. Pharetra sit ut quis nam nam adipiscing purus elementum.
    `,
  },
  {
    image: { src: StickerMule, alt: 'sponsor'},
    link: 'https://www.stickermule.com/ca',
    name: 'Stickermule',
    dateJoined: 'Winter 2020',
    collaboration: '',
    level: 'Sonic',
  }
];

const SponsorList: React.FC = () => {
  const [sponsor, setSponsor] = React.useState<ISponsor | {}>({});
  const [modalOpen, setModalOpen] = React.useState(false);
  const handelSponsorClick = React.useCallback(
    (s: ISponsor) => {
      setModalOpen(true);
      setSponsor(s);
    },
    [setModalOpen, setSponsor]
  );
  return (
    <div className="SponsorPage">
      <h2>Hypersonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsor.level === 'Hypersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={6} justify="center">
              <Sponsor
                {...sponsor.image}
                tier={sponsor.level}
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Supersonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsor.level === 'Supersonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={4} xs={6} justify="center">
              <Sponsor
                {...sponsor.image}
                tier={sponsor.level}
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Transonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsor.level === 'Transonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={3} xs={4} justify="center">
              <Sponsor
                {...sponsor.image}
                tier={sponsor.level}
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <h2>Sonic</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {sponsors
          .filter(sponsor => sponsor.level === 'Sonic')
          .map(sponsor => (
            <Grid key={sponsor.name} container item md={2} xs={4} justify="center">
              <Sponsor
                {...sponsor.image}
                tier={sponsor.level}
                onClick={() => handelSponsorClick(sponsor)}
              />
            </Grid>
          ))}
      </Grid>
      <SponsorModal
        // remove false when ready to go live
        open={modalOpen && false}
        onClose={() => {
          setModalOpen(false);
        }}
        {...sponsor}
      />
    </div>
  );
};

export default SponsorList;
