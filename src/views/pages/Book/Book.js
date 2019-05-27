import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';

import { Typography, Button, Chip } from '@material-ui/core';

import { getUser } from '@ducks/firebase/firebaseSelectors';
import Comments from './Comments';
import styles from './Book.module.scss';
import Description from './Description';

function Book({ image, author, name, description, comments }) {
  const backgroundImage = `url(${image})`;

  const renderLeft = (
    <div className={styles.left}>
      <div className={styles.image} style={{ backgroundImage }} />
      <div className={styles.buttons}>
        <Button className={styles.readBtn} size="large" color="primary" variant="contained">
          Читать
        </Button>
        <Button className={styles.addBtn} size="large" color="primary" variant="contained">
          На полку
          <div className={styles.addBtnPlus}>+</div>
        </Button>
      </div>
    </div>
  );

  const renderRight = (
    <div className={styles.right}>
      <div className={styles.header}>
        <Typography className={cn(styles.author, styles.headerText)} variant="subheading">
          {author}
        </Typography>
        <Typography className={cn(styles.name, styles.headerText)} variant="headline" paragraph>
          {name}
        </Typography>
        <div className={styles.tags}>
          <Chip variant="default" label="компьютерная литература" />
        </div>
      </div>
      <Description description={description} />
      <div style={{ marginTop: 24 }}>
        <Comments comments={comments} />
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className={styles.root}>
        <Container className={styles.inner}>
          {renderLeft}
          {renderRight}
        </Container>
      </div>
    </MainLayout>
  );
}

Book.defaultProps = {
  image: 'https://a.wattpad.com/cover/165002790-352-k993073.jpg',
  name: 'Альфа и его маленький запрет.',
  author: 'Алексей Симоненко',
  description: `«Виля уже имел негативный жизненный опыт (двойное предательство), но романтизма не изжил. Верил в прекрасное. И отражал это в своих стихах. Прекрасными были цветы — садовые и полевые. Что может быть совершеннее ромашки? Кто ее придумал? Всевышний. А как прекрасен грибной дождь с радугой на небе… И человека придумал тот же автор. А такие оттенки, как хитрость, предательство, — это добавили в жизнь сами люди. Всевышний совершенно ни при чем». Виктория Токарева`,
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape($propTypes.comment)),
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  const author = getUser(state);
  const comments = [
    {
      id: 0,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
    {
      id: 1,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
    {
      id: 2,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
    {
      id: 3,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
    {
      id: 4,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
    {
      id: 5,
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam distinctio labore esse repudiandae, minima, cupiditate doloremque reprehenderit beatae repellat, impedit voluptate. Labore aut sequi aliquid assumenda voluptate cum veritatis.',
      author,
    },
  ];

  return {
    ...state,
    id: Number(id),
    comments,
  };
};

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
