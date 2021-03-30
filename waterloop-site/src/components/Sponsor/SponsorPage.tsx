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
import Keysight from '../../static/img/official-sponsors/keysight.png';
import OpenBomLogo from '../../static/img/official-sponsors/Openbom.png';
import ArtsEndowmentFundLogo from '../../static/img/official-sponsors/ArtsEndowmentFund.jpg'
import Crosslink from '../../static/img/official-sponsors/Crosslink.png'
import SponsorModal from './SponsorModal';

//Mock data for Supporters
const MockSupportersData = [
  "Supporter with a very long name",
  "Supporter with a very long name",
  "Supporter with a very long name",
  "Supporter with a very long name",
  "Supporter #1",
  "Supporter #1",
  "Supporter with a very long name",
  "Supporter with a very long name",
  "Supporter with a very long name",
  "Supporter #1",
  "Supporter with a very long name",
  "Supporter #1",
];
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
    collaboration: 'Anderson Power Products has provided us with high power Anderson Powerpole electrical connectors! These have greatly improved our high power electrical system and allowed us to safely deal with the extremely high currents and voltages our linear induction motor requires.',
  },
  {
    image: { src: UW, alt: 'sponsor' },
    link: 'https://uwaterloo.ca/',
    name: 'University of Waterloo',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: 'The University of Waterloo hosts our student Garage in the Sedra Student Design Center.',
  },
  {
    image: { src: Weef, alt: 'sponsor' },
    link: 'https://uwaterloo.ca/engineering-endowment-foundation/',
    name: 'Waterloo Engineering Endowment Fund',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: 'Thank you WEEF for the continued support for our project over the past several years! Because of your support, we’ve been able to fund many parts of our latest pod, including batteries, power electronics, brakes, the linear induction motor, and many other components.',
  },
  {
    image: { src: WaterlooEng, alt: 'sponsor' },
    link: 'https://www.engsoc.uwaterloo.ca/',
    name: 'Waterloo Engineering Society',
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: 'Thank you EngSoc for the continued support for our project over the past several years! Because of your support we’ve been able to fund many parts of our latest pod, including brakes, the linear induction motor, and the Waterloo test track.',
  },
  {
    image: { src: Brent, alt: 'sponsor' },
    link: 'http://www.brentswelding.com/',
    name: "Brent's Welding and Fabrication Inc",
    level: 'Hypersonic',
    dateJoined: 'Fall 2019',
    collaboration: `Brent's Welding and Fabrication helped us fabricate our pod, providing us with design guidance to help make fabrication smoother.`,
    video: 'https://www.youtube.com/embed/XyoX9HxxYrM',
  },
  {
    image: { src: ClickUp, alt: 'sponsor' },
    link: 'https://clickup.com/',
    name: 'ClickUp',
    level: 'Supersonic',
    dateJoined: 'Fall 2019',
    collaboration: `ClickUp has been such a great addition to our team! It has not only allowed us to be more productive, but it has also made it easier for leads to communicate with their members when assigning tasks. We use ClickUp to check up on the statuses of our tasks everyday!`,
  },
  {
    image: { src: WCBranham, alt: 'sponsor' },
    link: 'https://www.wcbranham.com/',
    name: 'WC Brandham',
    level: 'Supersonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thanks WC Branham for providing us with the brake calipers for our Goose 5 pod. They have performed excellently in our tests, and we are excited to mount them into our pod soon.
    `,
  },
  {
    image: { src: Ansys, alt: 'sponsor' },
    link: 'https://www.ansys.com/',
    name: 'Ansys',
    level: 'Transonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thank you ANSYS for providing us with access to ANSYS R2 2020. We’ve used your software to model our linear induction motor - and we’ve learned a lot!
    `,
  },
  {
    image: { src: PSIM, alt: 'sponsor' },
    link: 'https://powersimtech.com/products/psim/',
    name: 'PSIM',
    level: 'Transonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thank you PSIM for providing our team with licenses! PSIM has given us great insight into the behaviour of our designs, and allowed us to continue developing our electrical system remotely. We look forward to continuing this relationship into the future.
    `,
    video: 'https://www.youtube.com/embed/Mwy-XgI5-Lw',
  },
  {
    image: { src: Connexion, alt: 'sponsor' },
    link: 'https://3dconnexion.com/uk/choose-your-country-or-region/?redirect=',
    name: '3D Connexion',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thank you 3dconnexion for your donation of several SpaceMouse and SpaceMouse Pro engineering mice. These are an indispensable tool and have been used daily in our team workflow when modelling our components.
    `,
  },
  {
    image: { src: StarTechnology, alt: 'sponsor' },
    link: 'https://www.star-technology.com/',
    name: 'Star Technology',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: 'Thanks Star Technology for your donation of epoxy for our linear induction motor! We’ve been able to manufacture a LIM entirely from scratch at much lower cost than using external contractors, which is an amazing capability to have, and our in-house manufacturing process will be critical as we explore novel variations on the motor geometry.',
  },
  {
    image: { src: Sony, alt: 'sponsor' },
    link: 'https://www.sony.ca/en',
    name: 'Sony',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thank you so much Sony for donating an amazing camera to us! This has come in super handy for taking high quality pictures to post on our social media, and has allowed us to start producing videos!
    `,
  },
  {
    image: { src: WPrint, alt: 'sponsor' },
    link: 'https://wstore.uwaterloo.ca/wprint',
    name: 'W Print',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: 'W print has provided us with brochure printing services',
  },
  {
    image: { src: Wera, alt: 'sponsor' },
    link: 'https://www-de.wera.de/en/',
    name: 'Wera Tools',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Our team is so grateful for the tools Wera Tools has donated. We keep the wrenches, screwdrivers, and Allen keys in a special drawer in our workbay so as not to mix them with our “regular” tools. The Wera tools have been fantastic to use for assembling our test rigs and pod systems. In terms of quality, they are clearly a cut above the other tools we have.`,
  },
  {
    image: { src: Overleaf, alt: 'sponsor' },
    link: 'https://www.overleaf.com/',
    name: 'Overleaf',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Thank you for providing the team with an Overleaf Professional account. This has helped us put together professional and consistent documentation for our pod subsystems. For the past 3 years, we have used Overleaf to typeset our Final Design Plans which were evaluated by SpaceX engineers to qualify our team for competition.
    `,
  },
  {
    image: { src: Altium, alt: 'sponsor' },
    link: 'https://www.altium.com/',
    name: 'Altium',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `Thank you for providing our team with Altium licenses. Developing our boards in Altium has greatly improved our productivity and the quality of our designs.`,
  },
  {
    image: { src: L3harris, alt: 'sponsor' },
    link: 'https://www.l3harris.com/',
    name: 'L3 Harris',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `L3Harris has equiped us with three HP workstations! We’ve gotten great use out of accessing them remotely during the lockdown period. These systems have also been very useful as file and license servers for our CAD software.`,
  },
  {
    image: { src: Mitutoyo, alt: 'sponsor' },
    link: 'https://www.mitutoyo.com/',
    name: 'Mitutoyo',
    level: 'Sonic',
    dateJoined: 'Fall 2019',
    collaboration: `
    Mitutoyo has donated to us three state-of-the-art calipers. These tools are used all the time in our workbay and we heavily rely on them for precise measurements.
    `,
  },
  {
    image: { src: StickerMule, alt: 'sponsor'},
    link: 'https://www.stickermule.com/ca',
    name: 'Sticker Mule',
    dateJoined: 'Winter 2020',
    collaboration: 'Sticker Mule has donated the to the team some awesome stickers!',
    level: 'Sonic',
  },
  {
    name: 'Keysight',
    dateJoined: 'Winter 2020',
    image: { src: Keysight, alt: 'sponsor'},
    level: 'Sonic',
    link: 'https://www.keysight.com/ca/en/home.html',
    collaboration: 'Keysight has provided us with an LCR meter and handheld digital multimeter. These tools have proven indispensable when testing our linear induction motor prototypes, and have helped us validate simulations and detect faults.',
  },
  // {
  //   name: 'Dassult Systems',
  //   collaboration: 'Thank you for providing our team with 90 Solidworks 2020/2021 licenses. The mechanical team relies heavily on Solidworks (and Solidworks PDM) to design and simulate each and every component in the pod. This also provides an opportunity for our members to gain highly industry-relevant experience in CAD, FEA, and GD&T.',
  // },
  // {
  //   name: 'Metal Pros',
  //   collaboration: 'MetalPros provided us with your generous discount. We used this to purchase our aluminum tubing for our current pod’s frame.',
  //   dateJoined: 'Fall 2020',
  //   image: ,
  //   level: 'Supporter' // TODO Add in supporter tier
  // },
  {
    name: 'Crosslink Technology',
    dateJoined: 'Winter 2020',
    image: { src: Crosslink, alt: 'sponsor'},
    level: 'Sonic',
    link: 'https://www.crosslinktech.com/',
    collaboration: 'Thank you Crosslink Technology for providing our team with your XRD 1014 and XHD 1015 resin and hardener. For our Goose V pod, our team is manufacturing the shell out of carbon fiber, and we could not do it without your generous support. We were very sad to have to delay our shell manufacturing plans due to the pandemic, but we\'re glad to announce that small-scale prototyping is completed, with plans to complete our full-scale shell by Spring.',
  },
  {
    name: 'OpenBOM',
    collaboration: 'OpenBOM has provided us with a license for their software.',
    dateJoined: 'Fall 2020',
    image: { src: OpenBomLogo, alt: 'sponsor' },
    level: 'Transonic',
    link: 'https://www.openbom.com/',
  },
  {
    name: 'Arts Endowment Fund',
    collaboration: 'The Arts Endowment Fund has provided us with the funding needed to build a semi-permanent test track.',
    level: 'Transonic',
    image: { src: ArtsEndowmentFundLogo, alt: 'sponsor' },
    dateJoined: 'Fall 2020',
    link: 'https://uwaterloo.ca/arts-endowment-fund/',
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
      <h2>Supporters</h2>
      <Grid
        className="TierWrapper"
        spacing={4}
        container
        alignItems="center"
        justify="center"
      >
        {MockSupportersData.map((supporter, i) => (
          <Grid key={i} container item md={3} xs={3} justify="center">
            <h3>{supporter}</h3>
          </Grid>
        ))}
      </Grid>
      <SponsorModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        {...sponsor}
      />
    </div>
  );
};

export default SponsorList;
