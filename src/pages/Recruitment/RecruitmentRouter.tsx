import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import RecruitmentPage from './Recruitment';
import RecruitmentFaq from './RecruitmentFaq';
import ApplicantForm from './RecruitmentApplicantForm';

const RecruitmentRouter = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <RecruitmentPage />
      </Route>
      <Route exact path={`${path}/faq`}>
        <RecruitmentFaq />
      </Route>
      <Route exact path={`${path}/:recruitmentFormId`}>
        <ApplicantForm />
      </Route>
    </Switch>
  );
};

export default RecruitmentRouter;
