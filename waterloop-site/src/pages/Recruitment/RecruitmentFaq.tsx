import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 32px;
  margin-left: 25%;
  margin-right: 25%;
  min-height: calc(100vh - 100px);

  @media screen and (max-width: 425px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const RecruitmentFaq = () => {
  return (
    <Container>
      <h2>FAQ:</h2>
      <h4>For any answers to any other questions you may have, reach out to us directly at contact@waterloop.ca!</h4>
      <h3>Why join Waterloop?</h3>
      <ul>
        <li><strong>Unparalleled mentorship:</strong>from the moment you submit your application, subteam leads will know your name and ensure you have a good experience. We will prepare a term-long project according to your skills and experience, give you feedback, and mentor you directly to ensure your success on the team. </li>
        <li><strong>Opportunity to make a real impact in a rapidly developing field:</strong>from being the first team to implement levitation, to building the very first Hyperloop test track in North America, innovation runs deep in our team culture. Other teams follow competition rulebooks, we are literally writing our own rulebook.</li>
        <li><strong>Close-knit community:</strong>when you spend hours upon hours working together towards a singular goal, you will easily become friends with your teammates. We have built a fantastic community of talented and hard-working students.</li>

      </ul>

      <h3>Why isn’t Waterloop doing open recruitment like the other design teams at UW?</h3>
      <ul>
        <li>We run a slightly different recruitment structure to many other teams. Ahead of each term, Waterloop team leads spend time planning out all the work that will be done by each subteam. We divide everything into assignable projects and small groups, and members take strong ownership of their work. By pre-assigning each member and new recruit to a project, everyone is matched according to their time commitment, skills and interests.</li>
        <li>With the bulk of our students working remotely, we want to make sure our new recruits are sufficiently onboarded and mentored to help you contribute to the team as best as possible. This method allows for more one-on-one attention from leads and allows all members to be allocated their very own projects and tasks.</li>
      </ul>
      <h3>Can I join the team with zero prior technical experience?</h3>
      <ul>
        <li>Yes. Our team works hard to provide a high-quality mentorship experience, and you will learn technical skills on the fly.</li>
        <li>We care the most about your enthusiasm and dedication to the team.</li>
      </ul>
      <h3>What other traits do you look for in recruits?</h3>
      <ul>
        <li><strong>Dedication/reliability:</strong>being committed to the team, always showing up, and committing to completing tasks as well as you can. Coming to meetings and work sessions as often as possible. Long-term commitment to the team is probably the most important trait we look for. We want to mentor you so that in a few years, you can help mentor the next generation.</li>
        <li><strong>Communication skills:</strong>communicating effectively, efficiently, and in a timely manner. Taking on tasks according to your abilities and availability. Keeping everyone up to date on what you're up to, whether you're making progress or not.</li>
        <li><strong>Time management:</strong>being able to manage both school and teamwork without falling behind. This is challenging...but you can do it!</li>
        <li><strong>Resourcefulness:</strong>independently figuring out how to solve problems, find what you need, or ask the right people for advice. You're more capable of figuring it out than you might think!</li>
        <li><strong>Initiative:</strong>the ability to observe and know what needs to be done, and do it. The team depends on initiative from its members - if you don't have any tasks, take one from the list. If someone is struggling to keep up, offer to help.</li>
        <li><strong>Due diligence:</strong> doing the job right, and making sure that it's done right. Whether it involves consulting someone for help, or looking up research and documentation online, you get the job done right!</li>
      </ul>
      <h3>Why do I need to submit my resume?</h3>
      <ul>
        <li>We figure the resume is the standard way to get an idea of your background.</li>
        <li>That said, you’re welcome to submit other documents too: this could be a portfolio, writing sample, pictures or video of a project, etc. Anything that demonstrates your skills is great to see!</li>
        <li>If you’re in first year, it’s also a good opportunity for you to prepare your first resume ahead of interview season!</li>
      </ul>
      <h3>Can I switch my role on the team in future terms?</h3>
      <ul>
        <li>Absolutely!</li>
      </ul>
      <h3>Can I join later in the term?</h3>
      <ul>
        <li>Maybe, depending on whether the team has extra tasks available, or if you have advanced skills. Email us, it’s worth a try.</li>
      </ul>
      <h3>Can I join as a student outside the Faculty?</h3>
      <ul>
        <li>Yes, our team has a place for all types of educational backgrounds and experiences. The more diverse our members’ skillsets, the better we can perform as a team.</li>
      </ul>
      <h3>Do you hire co-op students?</h3>
      <ul>
        <li>Yes, we hire 2-3 co-op students per term. The position is unpaid but you will learn more than any other first coop job. </li>
        <li>If interested, please get in touch with us in November, March, or August: <a href="mailto:contact@waterloop.ca">contact@waterloop.ca</a>.</li>
      </ul>
      <h3>Do you take graduate students?</h3>
      <ul>
        <li>Yes, we usually have a couple grad students on the team. If you are a Master’s or PhD student with lots of interest but not much free time, we’d still love to have you as a technical advisor. Reach out to us at <a href="mailto:contact@waterloop.ca">contact@waterloop.ca</a>.</li>
      </ul>
      <h3>Where can I apply?</h3>
      <ul>
        <li>Find all of our openings <a href="/recruitment">here</a></li>
        <li>We typically open recruitment after exams in August, December, or April. If there are no openings available you can sign up to be notified <a href="http://wloop.ca/subscribe">here.</a></li>
      </ul>
    </Container>
  );
};

export default RecruitmentFaq;
