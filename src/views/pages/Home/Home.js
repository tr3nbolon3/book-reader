import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
// import cn from 'classnames';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
// import * as appActions from '@ducks/app/appActions';
// import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';
import { getUser } from '@ducks/firebase/firebaseSelectors';

import { Typography, Button } from '@material-ui/core';
import { Weekend as WeekendIcon, AccountBalanceWallet as AccountBalanceWalletIcon } from '@material-ui/icons';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';
// import * as paths from '@routes/paths';

import history from '@utils/history';
import * as paths from '@routes/paths';
// import FeedbackSlider from '@components/FeedbackSlider';
import * as firestoreActions from '@ducks/firestore/firestoreActions';
import styles from './Home.module.scss';

const renderHero = (
  <div className={styles.hero}>
    <div className={styles.heroUnderlay} />
    <Container className={styles.heroInner}>
      <Typography className={styles.heroTitle} color="inherit" variant="h1" align="center" paragraph>
        Место, где читают книги...
      </Typography>
      <Typography className={styles.heroSubtitle} color="inherit" variant="subtitle1" align="center" paragraph>
        ...читай с нами
      </Typography>
      <Button
        className={styles.heroButton}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => history.push(paths.BOOKS)}
      >
        Выбрать книгу
      </Button>
    </Container>
  </div>
);

const renderQuote = (
  <div className={styles.quote}>
    <Container>
      <blockquote>
        <Typography className={styles.quoteParagraph} color="inherit" paragraph>
          {'«'}Книга похожа на холодильник — открываешь ее и радуешься, что она полная. И потреблять содержимое книги
          нужно соответственно — ночью, в пижаме, в полном одиночестве!{'»'}
        </Typography>
        <footer>
          — <cite className={styles.quoteCite}>Алессандро Барикко</cite>
        </footer>
      </blockquote>
    </Container>
  </div>
);

// const renderFeedback = ops => (
//   <div className={cn(styles.section, styles.feedback)}>
//     <Container>
//       <div className={styles.sectionHeader}>
//         <Typography className={styles.sectionTitle} variant="h2" paragraph>
//           Отзывы
//         </Typography>
//         <Typography variant="subtitle2">Что говорят о bambook</Typography>
//       </div>
//       <FeedbackSlider user={ops.user} />
//     </Container>
//   </div>
// );

const renderBenefits = (
  <div className={styles.section}>
    <Container>
      <div className={styles.sectionHeader}>
        <Typography className={styles.sectionTitle} variant="h2" paragraph>
          Почему именно мы?
        </Typography>
        <Typography variant="subtitle2">Выбирая bambook вы получаете</Typography>
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.benefitHeader}>
            <WeekendIcon />
            <Typography variant="caption" paragraph>
              Удобство
            </Typography>
          </div>
          <Typography paragraph>
            Читай книги в любом месте и в любое время. Вам необходим лишь устройство с доступом в интернет.
          </Typography>
        </div>
        <div className={styles.benefit}>
          <div className={styles.benefitHeader}>
            <AccountBalanceWalletIcon />
            <Typography variant="caption" paragraph>
              Доступность
            </Typography>
          </div>
          <Typography paragraph>
            Дешевая подписка на всю библиотеку. Получить доступ к библиотеке на месяц можно за 50 рублей, на 3 месяца -
            150 рублей, на полгода - 300 рублей.
          </Typography>
        </div>
      </div>
    </Container>
  </div>
);

function Home() {
  return (
    <MainLayout>
      {renderHero}
      {renderQuote}
      {renderBenefits}
      {/* {renderFeedback({ user })} */}
    </MainLayout>
  );
}

Home.propTypes = {
  user: PropTypes.shape($propTypes.user),
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = { ...firestoreActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
